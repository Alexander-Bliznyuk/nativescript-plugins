import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;
import MutableArrayInterface = com.couchbase.lite.MutableArrayInterface;

const NATIVE_TARGET_KEY = '_native';

const arrTraps = {
  get(target: MutableArrayInterface, prop, receiver) {
    if (prop in Array.prototype && typeof Array.prototype[prop] === 'function') {
      return Array.prototype[prop].bind(receiver);
    }

    if (prop === 'length') {
      return target.count();
    }

    return genericGetTrap(target, prop);
  },

  set(target: MutableArrayInterface, prop, value) {
    if (isNaN(prop)) {
      return true;
    }

    if (parseInt(prop) === target.count()) {
      target.addValue(getCompliantInstance(value));
    } else {
      target.setValue(parseInt(prop), getCompliantInstance(value));
      delete target[prop]; // invalidate cache
    }
    return true;
  },

  ownKeys(target: MutableArrayInterface) {
    const keys = ['length'];
    for (let i = 0; i < target.count(); i++) {
      keys.push(i.toString());
    }
    return keys;
  },

  getOwnPropertyDescriptor(target: MutableArrayInterface, prop) {
    const isAvailable = prop === 'length' || prop < target.count();
    return {
      writable: isAvailable,
      enumerable: isAvailable,
      configurable: isAvailable,
    };
  },

  has(target: MutableArrayInterface, index) {
    return index < target.count();
  },

  deleteProperty(target: MutableArrayInterface, index) {
    target.remove(parseInt(index)); // this breaks delete arr[n] syntax in favor of Array.prototype methods support
    return true;
  },
};

const dictTraps = {
  get: genericGetTrap,
  set(target: MutableDictionaryInterface, prop, value) {
    target.setValue(prop, getCompliantInstance(value));
    delete target[prop]; // invalidate cache
    return true;
  },

  ownKeys(target: MutableDictionaryInterface) {
    const keys = [], nativeKeys = target.getKeys();
    for (let i = 0; i < nativeKeys.size(); i++) {
      keys.push(nativeKeys.get(i));
    }
    return keys;
  },

  getOwnPropertyDescriptor(target: MutableDictionaryInterface, prop) {
    const isAvailable = target.contains(prop);
    return {
      writable: isAvailable,
      enumerable: isAvailable,
      configurable: isAvailable,
    };
  },

  has(target: MutableDictionaryInterface, prop) {
    return target.contains(prop);
  },

  deleteProperty(target: MutableDictionaryInterface, prop) {
    target.remove(prop);
    return true;
  },
};


function genericGetTrap(target: MutableArrayInterface | MutableDictionaryInterface, prop) {
  if (target[prop] !== undefined) {
    if (typeof target[prop] === 'function') {
      return target[prop].bind(target);
    } else {
      return target[prop];
    }
  }

  if (prop === NATIVE_TARGET_KEY) {
    return target;
  }

  if (typeof prop === 'symbol') {
    return;
  }

  // cache
  target[prop] = getJsObjectMock(getCblValue(target, prop));

  return target[prop];
}

export function getJsObjectMock(cblNativeValue) {
  if (cblNativeValue instanceof MutableArrayInterface) {
    return new Proxy(cblNativeValue, arrTraps);
  }

  if (cblNativeValue instanceof MutableDictionaryInterface) {
    return new Proxy(cblNativeValue, dictTraps);
  }

  return cblNativeValue;
}

function getCblValue(cblNativeObj, key) {
  if (cblNativeObj instanceof MutableArrayInterface) {
    key = parseInt(key);
  }
  return cblNativeObj.getValue(key);
}

function isMock(obj) {
  return obj !== null
    && typeof obj === 'object'
    && obj[NATIVE_TARGET_KEY] !== undefined;
}

export function getCompliantInstance(obj) {
  return isMock(obj) ? obj[NATIVE_TARGET_KEY] : obj;
}

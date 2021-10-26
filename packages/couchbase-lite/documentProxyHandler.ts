import MutableDocument = com.couchbase.lite.MutableDocument;

export default {
  get(target: MutableDocument, prop) {
    if (target[prop] !== undefined) {
      if (typeof target[prop] === 'function') {
        return target[prop].bind(target);
      } else {
        return target[prop];
      }
    }

    if (prop === '_native') {
      return target;
    }
    return target.getValue(prop);
  },

  set(target: MutableDocument, prop, value) {
    target.setValue(prop, value);
    return true;
  },

  ownKeys(target: MutableDocument) {
    const keys = [], nativeKeys = target.getKeys();
    for (let i = 0; i < nativeKeys.size(); i++) {
      keys.push(nativeKeys.get(i));
    }
    return keys;
  },

  getOwnPropertyDescriptor(target: MutableDocument, prop) {
    return {
      enumerable: target.contains(prop),
    };
  },

  has(target: MutableDocument, prop) {
    return target.contains(prop);
  },

  deleteProperty(target: MutableDocument, prop) {
    target.remove(prop);
    return true;
  },
};

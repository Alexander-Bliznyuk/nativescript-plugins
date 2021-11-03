import {isAndroid, isIOS} from "@nativescript/core";
import MutableArray = com.couchbase.lite.MutableArray;
import CblArray = com.couchbase.lite.Array;
import MutableDictionary = com.couchbase.lite.MutableDictionary;
import MutableArrayInterface = com.couchbase.lite.MutableArrayInterface;
import MutableDictionaryInterface = com.couchbase.lite.MutableDictionaryInterface;
import MutableDocument = com.couchbase.lite.MutableDocument;

export const NATIVE_TARGET_KEY = '_native';

function isMock(obj) {
  return obj !== null
    && typeof obj === 'object'
    && obj[NATIVE_TARGET_KEY] !== undefined;
}

export function getCompliantInstance(obj): CblCompliantInstance {
  if (typeof obj === 'number') {
    return {type: 'Double', compliantInstance: obj};
  }
  else if (typeof obj === 'string' || typeof obj === 'bigint') {
    return {type: 'String', compliantInstance: obj};
  }
  else if (Array.isArray(obj)) {
    return {type: 'Array', compliantInstance: arrayToCblArray(obj)};
  }
  else if (isMock(obj)) {
    return {type: 'Value', compliantInstance: obj[NATIVE_TARGET_KEY]};
  }
  else if (obj instanceof MutableDictionaryInterface) {
    return {type: 'Dictionary', compliantInstance: obj};
  }
  else if (obj instanceof MutableArrayInterface) {
    return {type: 'Array', compliantInstance: obj};
  }
  else if (obj instanceof Date) {
    return {type: 'Date', compliantInstance: toNativeDate(obj)};
  }
  else if (typeof obj === 'object') {
    if (obj === null) {
      return {type: 'Value', compliantInstance: obj};
    }
    return {type: 'Dictionary', compliantInstance: objToCblDict(obj)};
  }
  else if (typeof obj === 'boolean') {
    return {type: 'Boolean', compliantInstance: obj};
  }
}

function arrayToCblArray(arr): CblArray {
  const cblArr = new MutableArray();
  for (let i = 0; i < arr.length; i++) {
    const {type, compliantInstance} = getCompliantInstance(arr[i]);
    cblArr['add' + type](compliantInstance);
  }
  return cblArr;
}

export function objToCblDict(obj, cblObj?: MutableDictionary | MutableDocument): MutableDictionaryInterface {
  cblObj ||= new MutableDictionary();
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    const {type, compliantInstance} = getCompliantInstance(obj[key]);
    cblObj['set' + type](key, compliantInstance);
  }
  return cblObj;
}

function toNativeDate(date: Date) {
  if (isAndroid) {
    return new java.util.Date(date.getTime());
  } else if (isIOS) {
    throw new Error('check this implementation');
    return NSDate.dateWithTimeIntervalSince1970(date.getTime() / 1000); // todo check if NativeScript can implicitly convert Dates on iOS
  }
}


type CblCompliantInstance = {
  type: 'Double' | 'String' | 'Date' | 'Array' | 'Dictionary' | 'Value' | 'Boolean';
  compliantInstance: any;
}

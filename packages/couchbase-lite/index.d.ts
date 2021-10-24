/// <reference path="./sdk.d.ts" />
/// <reference path="./wrapper.d.ts" />

export const sdk = com.couchbase.lite, couchbase = com.parempi.couchbase;

export function open(db: string | com.parempi.couchbase.PrebuiltDb): Promise<com.couchbase.lite.Database>;

export function openSync(db: string | com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database;


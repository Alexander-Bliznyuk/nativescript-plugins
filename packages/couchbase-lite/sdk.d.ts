declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractConsoleLogger extends com.couchbase.lite.Logger {
        public static class: java.lang.Class<com.couchbase.lite.AbstractConsoleLogger>;
        public setLevel(param0: com.couchbase.lite.LogLevel): void;
        public getDomains(): java.util.EnumSet<com.couchbase.lite.LogDomain>;
        public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public setDomains(param0: java.util.EnumSet<com.couchbase.lite.LogDomain>): void;
        public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public getLevel(): com.couchbase.lite.LogLevel;
        public setDomains(param0: androidNative.Array<com.couchbase.lite.LogDomain>): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractDatabase {
        public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
        public static log: com.couchbase.lite.Log;
        public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConflictHandler): boolean;
        /** @deprecated */
        public compact(): void;
        public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
        public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
        public finalize(): void;
        public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
        public static exists(param0: string, param1: java.io.File): boolean;
        public performMaintenance(param0: com.couchbase.lite.MaintenanceType): boolean;
        public getC4DatabaseLocked(): com.couchbase.lite.internal.core.C4Database;
        public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
        /** @deprecated */
        public static setLogLevel(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel): void;
        public inBatch(param0: java.lang.Runnable): void;
        public delete(): void;
        public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration, param3: number, param4: androidNative.Array<number>): void;
        public save(param0: com.couchbase.lite.MutableDocument): void;
        public delete(param0: com.couchbase.lite.Document): void;
        public purge(param0: string): void;
        public close(): void;
        public getC4Database(): com.couchbase.lite.internal.core.C4Database;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public getName(): string;
        public getCount(): number;
        public getDocument(param0: string): com.couchbase.lite.MutableDocument;
        public getPath(): string;
        public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
        public toString(): string;
        public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
        public getConfig(): com.couchbase.lite.DatabaseConfiguration;
        public purge(param0: com.couchbase.lite.Document): void;
        public getDocumentExpiration(param0: string): java.util.Date;
        public getIndexes(): java.util.List<string>;
        public setDocumentExpiration(param0: string, param1: java.util.Date): void;
        public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
        public static delete(param0: string, param1: java.io.File): void;
        public constructor(param0: number);
        public deleteIndex(param0: string): void;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
      }
      export module AbstractDatabase {
        export class ActiveProcess<T>  extends java.lang.Object {
          public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase.ActiveProcess<any>>;
          public equals(param0: any): boolean;
          public isActive(): boolean;
          public toString(): string;
          public stop(): void;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractDatabaseConfiguration {
        public static class: java.lang.Class<com.couchbase.lite.AbstractDatabaseConfiguration>;
        public setDirectory(param0: string): com.couchbase.lite.AbstractDatabaseConfiguration;
        public isReadOnly(): boolean;
        public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration, param1: boolean);
        public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
        public getDirectory(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractFunction {
        public static class: java.lang.Class<com.couchbase.lite.AbstractFunction>;
        public static abs(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static trunc(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static ln(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static trim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static e(): com.couchbase.lite.Expression;
        public static rtrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static sum(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static upper(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static stringToMillis(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static sign(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static tan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static degrees(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static avg(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static round(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static min(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static max(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static atan2(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static cos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static pi(): com.couchbase.lite.Expression;
        public static ltrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static atan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static acos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static power(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static trunc(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static asin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static sqrt(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static floor(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static radians(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static ceil(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static lower(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static millisToString(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static millisToUTC(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static exp(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static round(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static count(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static stringToUTC(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static log(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static sin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractIndex extends com.couchbase.lite.Index {
        public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractIndexBuilder {
        public static class: java.lang.Class<com.couchbase.lite.AbstractIndexBuilder>;
        public static fullTextIndex(param0: androidNative.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
        public static valueIndex(param0: androidNative.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractQuery extends com.couchbase.lite.Query {
        public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
        public execute(): com.couchbase.lite.ResultSet;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public getParameters(): com.couchbase.lite.Parameters;
        public finalize(): void;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public toString(): string;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractReplicator extends com.couchbase.lite.internal.core.InternalReplicator {
        public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
        public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
        public getPendingDocumentIds(): java.util.Set<string>;
        public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public start(param0: boolean): void;
        public handleOffline(param0: com.couchbase.lite.AbstractReplicator.ActivityLevel, param1: boolean): void;
        public getMessageC4Replicator(param0: number): com.couchbase.lite.internal.core.C4Replicator;
        public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
        public finalize(): void;
        public getServerCertificates(): java.util.List<java.security.cert.Certificate>;
        public toString(): string;
        public constructor();
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
        public addDocumentReplicationListener(param0: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
        public stop(): void;
        public getLocalC4Replicator(param0: com.couchbase.lite.Database): com.couchbase.lite.internal.core.C4Replicator;
        public start(): void;
        public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
        public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
        /** @deprecated */
        public resetCheckpoint(): void;
        public isDocumentPending(param0: string): boolean;
        public getRemoteC4Replicator(param0: java.net.URI): com.couchbase.lite.internal.core.C4Replicator;
        public addDocumentReplicationListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
      }
      export module AbstractReplicator {
        export class ActivityLevel {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
          public static STOPPED: com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static OFFLINE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static CONNECTING: com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static IDLE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static BUSY: com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static valueOf(param0: string): com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public static values(): androidNative.Array<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
        }
        export class Progress {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Progress>;
          public getTotal(): number;
          public toString(): string;
          public getCompleted(): number;
        }
        export class ReplicatorListener extends com.couchbase.lite.internal.core.C4ReplicatorListener {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorListener>;
          public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
          public documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: androidNative.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
        }
        export class ReplicatorProgressLevel {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel>;
          public static OVERALL: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
          public static PER_DOCUMENT: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
          public static PER_ATTACHMENT: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
          public static valueOf(param0: string): com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
          public static values(): androidNative.Array<com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel>;
        }
        export class Status {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Status>;
          public getActivityLevel(): com.couchbase.lite.AbstractReplicator.ActivityLevel;
          public toString(): string;
          public getProgress(): com.couchbase.lite.AbstractReplicator.Progress;
          public getError(): com.couchbase.lite.CouchbaseLiteException;
          public constructor(param0: com.couchbase.lite.internal.core.C4ReplicatorStatus);
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class AbstractReplicatorConfiguration {
        public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration>;
        public readonly: boolean;
        public target: com.couchbase.lite.Endpoint;
        public setContinuous(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
        public setPushFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
        public getConflictResolver(): com.couchbase.lite.ConflictResolver;
        public setHeaders(param0: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
        public effectiveOptions(): java.util.Map<string,any>;
        public setHeartbeat(param0: number): com.couchbase.lite.ReplicatorConfiguration;
        public setAuthenticator(param0: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
        public getChannels(): java.util.List<string>;
        public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
        public getDocumentIDs(): java.util.List<string>;
        public getPinnedServerCertificate(): androidNative.Array<number>;
        public getAuthenticator(): com.couchbase.lite.Authenticator;
        public setChannels(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
        public getReplicatorType(): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
        public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
        public getTarget(): com.couchbase.lite.Endpoint;
        public getPushFilter(): com.couchbase.lite.ReplicationFilter;
        public getPullFilter(): com.couchbase.lite.ReplicationFilter;
        public setReplicatorType(param0: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
        public toString(): string;
        public setPinnedServerCertificate(param0: androidNative.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
        public getDatabase(): com.couchbase.lite.Database;
        public isContinuous(): boolean;
        public getHeaders(): java.util.Map<string,string>;
        public setPullFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
        public setConflictResolver(param0: com.couchbase.lite.ConflictResolver): com.couchbase.lite.ReplicatorConfiguration;
        public checkReadOnly(): void;
        public getHeartbeat(): number;
      }
      export module AbstractReplicatorConfiguration {
        export class ReplicatorType {
          public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
          public static PUSH_AND_PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
          public static PUSH: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
          public static PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
          public static valueOf(param0: string): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
          public static values(): androidNative.Array<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Array extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.Array>;
        public lock: any;
        public internalArray: com.couchbase.lite.internal.fleece.MArray;
        public getDouble(param0: number): number;
        public getString(param0: number): string;
        public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: number): java.lang.Number;
        public iterator(): java.util.Iterator<any>;
        public getDate(param0: number): java.util.Date;
        public toMutable(): com.couchbase.lite.MutableArray;
        public getBoolean(param0: number): boolean;
        public getDictionary(param0: number): com.couchbase.lite.Dictionary;
        public getBlob(param0: number): com.couchbase.lite.Blob;
        public toList(): java.util.List<any>;
        public hashCode(): number;
        public getLong(param0: number): number;
        public equals(param0: any): boolean;
        public getValue(param0: number): any;
        public count(): number;
        public getInt(param0: number): number;
        public getArray(param0: number): com.couchbase.lite.ArrayInterface;
        public getFloat(param0: number): number;
        public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
        public getArray(param0: number): com.couchbase.lite.Array;
      }
      export module Array {
        export class ArrayIterator extends java.util.Iterator<any> {
          public static class: java.lang.Class<com.couchbase.lite.Array.ArrayIterator>;
          public next(): any;
          public hasNext(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ArrayExpression {
        public static class: java.lang.Class<com.couchbase.lite.ArrayExpression>;
        public static anyAndEvery(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
        public static variable(param0: string): com.couchbase.lite.VariableExpression;
        public static every(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
        public static any(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
      }
      export module ArrayExpression {
        export class QuantifiesType {
          public static class: java.lang.Class<com.couchbase.lite.ArrayExpression.QuantifiesType>;
          public static ANY: com.couchbase.lite.ArrayExpression.QuantifiesType;
          public static ANY_AND_EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
          public static EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
          public static valueOf(param0: string): com.couchbase.lite.ArrayExpression.QuantifiesType;
          public static values(): androidNative.Array<com.couchbase.lite.ArrayExpression.QuantifiesType>;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ArrayExpressionIn {
        public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionIn>;
        public in(param0: com.couchbase.lite.Expression): com.couchbase.lite.ArrayExpressionSatisfies;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ArrayExpressionSatisfies {
        public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies>;
        public satisfies(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
      }
      export module ArrayExpressionSatisfies {
        export class QuantifiedExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies.QuantifiedExpression>;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ArrayFunction {
        public static class: java.lang.Class<com.couchbase.lite.ArrayFunction>;
        public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ArrayInterface {
        public static class: java.lang.Class<com.couchbase.lite.ArrayInterface>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          count(): number;
          getValue(param0: number): any;
          getString(param0: number): string;
          getNumber(param0: number): java.lang.Number;
          getInt(param0: number): number;
          getLong(param0: number): number;
          getFloat(param0: number): number;
          getDouble(param0: number): number;
          getBoolean(param0: number): boolean;
          getBlob(param0: number): com.couchbase.lite.Blob;
          getDate(param0: number): java.util.Date;
          getArray(param0: number): com.couchbase.lite.ArrayInterface;
          getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
          toList(): java.util.List<any>;
        });
        public constructor();
        public getDouble(param0: number): number;
        public getString(param0: number): string;
        public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: number): java.lang.Number;
        public getDate(param0: number): java.util.Date;
        public getBoolean(param0: number): boolean;
        public getBlob(param0: number): com.couchbase.lite.Blob;
        public toList(): java.util.List<any>;
        public getLong(param0: number): number;
        public getValue(param0: number): any;
        public count(): number;
        public getInt(param0: number): number;
        public getArray(param0: number): com.couchbase.lite.ArrayInterface;
        public getFloat(param0: number): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class Authenticator {
        public static class: java.lang.Class<com.couchbase.lite.Authenticator>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class BasicAuthenticator extends com.couchbase.lite.Authenticator {
        public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
        /** @deprecated */
        public constructor(param0: string, param1: string);
        public finalize(): void;
        public getUsername(): string;
        public getPasswordChars(): androidNative.Array<string>;
        /** @deprecated */
        public getPassword(): string;
        public constructor();
        public constructor(param0: string, param1: androidNative.Array<string>);
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Blob extends com.couchbase.lite.internal.fleece.FLEncodable {
        public static class: java.lang.Class<com.couchbase.lite.Blob>;
        public getContentType(): string;
        public digest(): string;
        public constructor(param0: string, param1: java.net.URL);
        public length(): number;
        public finalize(): void;
        public toString(): string;
        public getContentStream(): java.io.InputStream;
        public getContent(): androidNative.Array<number>;
        public getProperties(): java.util.Map<string,any>;
        public hashCode(): number;
        public constructor(param0: string, param1: androidNative.Array<number>);
        public equals(param0: any): boolean;
        public constructor(param0: string, param1: java.io.InputStream);
        public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
      }
      export module Blob {
        export class BlobInputStream {
          public static class: java.lang.Class<com.couchbase.lite.Blob.BlobInputStream>;
          public available(): number;
          public read(): number;
          public reset(): void;
          public markSupported(): boolean;
          public skip(param0: number): number;
          public close(): void;
          public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
          public read(param0: androidNative.Array<number>): number;
          public mark(param0: number): void;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class BuildConfig {
        public static class: java.lang.Class<com.couchbase.lite.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static VERSION_CODE: number;
        public static VERSION_NAME: string;
        public static BUILD_COMMIT: string;
        public static BUILD_TIME: string;
        public static CBL_DEBUG: boolean;
        public static ENTERPRISE: boolean;
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class CBLConverter {
        public static class: java.lang.Class<com.couchbase.lite.CBLConverter>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class CBLError {
        public static class: java.lang.Class<com.couchbase.lite.CBLError>;
      }
      export module CBLError {
        export class Code {
          public static class: java.lang.Class<com.couchbase.lite.CBLError.Code>;
          public static ASSERTION_FAILED: number;
          public static UNIMPLEMENTED: number;
          public static UNSUPPORTED_ENCRYPTION: number;
          public static BAD_REVISIONID: number;
          public static CORRUPT_REVISION_DATA: number;
          public static NOT_OPEN: number;
          public static NOT_FOUND: number;
          public static CONFLICT: number;
          public static INVALID_PARAMETER: number;
          public static UNEXPECTED_ERROR: number;
          public static CANT_OPEN_FILE: number;
          public static IO_ERROR: number;
          public static MEMORY_ERROR: number;
          public static NOT_WRITEABLE: number;
          public static CORRUPT_DATA: number;
          public static BUSY: number;
          public static NOT_IN_TRANSACTION: number;
          public static TRANSACTION_NOT_CLOSED: number;
          public static UNSUPPORTED: number;
          public static NOT_A_DATABSE_FILE: number;
          public static WRONG_FORMAT: number;
          public static CRYPTO: number;
          public static INVALID_QUERY: number;
          public static MISSING_INDEX: number;
          public static INVALID_QUERY_PARAM: number;
          public static REMOTE_ERROR: number;
          public static DATABASE_TOO_OLD: number;
          public static DATABASE_TOO_NEW: number;
          public static BAD_DOC_ID: number;
          public static CANT_UPGRADE_DATABASE: number;
          public static NETWORK_BASE: number;
          public static DNS_FAILURE: number;
          public static UNKNOWN_HOST: number;
          public static TIMEOUT: number;
          public static INVALID_URL: number;
          public static TOO_MANY_REDIRECTS: number;
          public static TLS_HANDSHAKE_FAILED: number;
          public static TLS_CERT_EXPIRED: number;
          public static TLS_CERT_UNTRUSTED: number;
          public static TLS_CLIENT_CERT_REQUIRED: number;
          public static TLS_CLIENT_CERT_REJECTED: number;
          public static TLS_CERT_UNKNOWN_ROOT: number;
          public static INVALID_REDIRECT: number;
          public static HTTP_BASE: number;
          public static HTTP_AUTH_REQUIRED: number;
          public static HTTP_FORBIDDEN: number;
          public static HTTP_NOT_FOUND: number;
          public static HTTP_CONFLICT: number;
          public static HTTP_PROXY_AUTH_REQUIRED: number;
          public static HTTP_ENTITY_TOO_LARGE: number;
          public static HTTP_IM_A_TEAPOT: number;
          public static HTTP_INTERNAL_SERVER_ERROR: number;
          public static HTTP_NOT_IMPLEMENTED: number;
          public static HTTP_SERVICE_UNAVAILABLE: number;
          public static WEB_SOCKET_BASE: number;
          public static WEB_SOCKET_GOING_AWAY: number;
          public static WEB_SOCKET_PROTOCOL_ERROR: number;
          public static WEB_SOCKET_DATA_ERROR: number;
          public static WEB_SOCKET_ABNORMAL_CLOSE: number;
          public static WEB_SOCKET_BAD_MESSAGE_FORMAT: number;
          public static WEB_SOCKET_POLICY_ERROR: number;
          public static WEB_SOCKET_MESSAGE_TOO_BIG: number;
          public static WEB_SOCKET_MISSING_EXTENSION: number;
          public static WEB_SOCKET_CANT_FULFILL: number;
          public static WEB_SOCKET_CLOSE_USER_TRANSIENT: number;
          public static WEB_SOCKET_CLOSE_USER_PERMANENT: number;
        }
        export class Domain {
          public static class: java.lang.Class<com.couchbase.lite.CBLError.Domain>;
          public static CBLITE: string;
          public static SQLITE: string;
          public static FLEECE: string;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ChangeListener<T>  extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.ChangeListener<any>>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          changed(param0: T): void;
        });
        public constructor();
        public changed(param0: T): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ChangeListenerToken<T>  extends com.couchbase.lite.ListenerToken {
        public static class: java.lang.Class<com.couchbase.lite.ChangeListenerToken<any>>;
        public getKey(): any;
        public setKey(param0: any): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ChangeNotifier<T>  extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.ChangeNotifier<any>>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Collation {
        public static class: java.lang.Class<com.couchbase.lite.Collation>;
        public static ascii(): com.couchbase.lite.Collation.ASCII;
        public static unicode(): com.couchbase.lite.Collation.Unicode;
        public toString(): string;
      }
      export module Collation {
        export class ASCII extends com.couchbase.lite.Collation {
          public static class: java.lang.Class<com.couchbase.lite.Collation.ASCII>;
          public ignoreCase(param0: boolean): com.couchbase.lite.Collation.ASCII;
        }
        export class Unicode extends com.couchbase.lite.Collation {
          public static class: java.lang.Class<com.couchbase.lite.Collation.Unicode>;
          public locale(param0: string): com.couchbase.lite.Collation.Unicode;
          public ignoreCase(param0: boolean): com.couchbase.lite.Collation.Unicode;
          public ignoreAccents(param0: boolean): com.couchbase.lite.Collation.Unicode;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ConcurrencyControl {
        public static class: java.lang.Class<com.couchbase.lite.ConcurrencyControl>;
        public static LAST_WRITE_WINS: com.couchbase.lite.ConcurrencyControl;
        public static FAIL_ON_CONFLICT: com.couchbase.lite.ConcurrencyControl;
        public static values(): androidNative.Array<com.couchbase.lite.ConcurrencyControl>;
        public static valueOf(param0: string): com.couchbase.lite.ConcurrencyControl;
        public getValue(): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Conflict {
        public static class: java.lang.Class<com.couchbase.lite.Conflict>;
        public getLocalDocument(): com.couchbase.lite.Document;
        public getDocumentId(): string;
        public getRemoteDocument(): com.couchbase.lite.Document;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ConflictHandler {
        public static class: java.lang.Class<com.couchbase.lite.ConflictHandler>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ConflictHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          handle(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.Document): boolean;
        });
        public constructor();
        public handle(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.Document): boolean;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ConflictResolver {
        public static class: java.lang.Class<com.couchbase.lite.ConflictResolver>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ConflictResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
          <clinit>(): void;
        });
        public constructor();
        public static DEFAULT: com.couchbase.lite.ConflictResolver;
        public resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ConsoleLogger extends com.couchbase.lite.AbstractConsoleLogger {
        public static class: java.lang.Class<com.couchbase.lite.ConsoleLogger>;
        public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public getLevel(): com.couchbase.lite.LogLevel;
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class CouchbaseLite {
        public static class: java.lang.Class<com.couchbase.lite.CouchbaseLite>;
        public static init(param0: globalAndroid.content.Context, param1: java.io.File): void;
        public static init(param0: globalAndroid.content.Context): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class CouchbaseLiteException {
        public static class: java.lang.Class<com.couchbase.lite.CouchbaseLiteException>;
        /** @deprecated */
        public constructor(param0: string, param1: number, param2: java.lang.Exception);
        public constructor(param0: string, param1: string, param2: number);
        public getInfo(): java.util.Map<string,any>;
        public getCode(): number;
        public toString(): string;
        public constructor(param0: string);
        /** @deprecated */
        public constructor(param0: com.couchbase.lite.internal.CBLInternalException);
        public constructor();
        /** @deprecated */
        public constructor(param0: string, param1: number, param2: java.util.Map<string,any>);
        public constructor(param0: string, param1: java.lang.Exception);
        public getDomain(): string;
        /** @deprecated */
        public constructor(param0: string, param1: number);
        public constructor(param0: string, param1: com.couchbase.lite.internal.CBLInternalException);
        public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number);
        public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number, param4: java.util.Map<string,any>);
        /** @deprecated */
        public constructor(param0: java.lang.Exception);
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DataSource {
        public static class: java.lang.Class<com.couchbase.lite.DataSource>;
        public static database(param0: com.couchbase.lite.Database): com.couchbase.lite.DataSource.As;
      }
      export module DataSource {
        export class As extends com.couchbase.lite.DataSource {
          public static class: java.lang.Class<com.couchbase.lite.DataSource.As>;
          public as(param0: string): com.couchbase.lite.DataSource;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Database extends com.couchbase.lite.AbstractDatabase {
        public static class: java.lang.Class<com.couchbase.lite.Database>;
        public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
        public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration, param3: number, param4: androidNative.Array<number>): void;
        public constructor(param0: number);
        public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration): void;
        public constructor(param0: string);

        public createDocument(document: { [key: string]: any, id?: string }, concurrencyControl: ConcurrencyControl): MutableDocument | false;

        public static originals: Partial<Database>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DatabaseChange {
        public static class: java.lang.Class<com.couchbase.lite.DatabaseChange>;
        public getDocumentIDs(): java.util.List<string>;
        public toString(): string;
        public getDatabase(): com.couchbase.lite.Database;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DatabaseChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DatabaseChange> {
        public static class: java.lang.Class<com.couchbase.lite.DatabaseChangeListener>;
        /**
         * Constructs a new instance of the com.couchbase.lite.DatabaseChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          changed(param0: com.couchbase.lite.DatabaseChange): void;
          changed(param0: any): void;
          changed(param0: any): void;
        });
        public constructor();
        public changed(param0: com.couchbase.lite.DatabaseChange): void;
        public changed(param0: any): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DatabaseConfiguration extends com.couchbase.lite.AbstractDatabaseConfiguration {
        public static class: java.lang.Class<com.couchbase.lite.DatabaseConfiguration>;
        public setDirectory(param0: string): com.couchbase.lite.AbstractDatabaseConfiguration;
        public setDirectory(param0: string): com.couchbase.lite.DatabaseConfiguration;
        public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration, param1: boolean);
        public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
        public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DefaultConflictResolver extends com.couchbase.lite.ConflictResolver {
        public static class: java.lang.Class<com.couchbase.lite.DefaultConflictResolver>;
        public resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Dictionary extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.Dictionary>;
        public lock: any;
        public internalDict: com.couchbase.lite.internal.fleece.MDict;
        public getKeys(): java.util.List<string>;
        public getValue(param0: string): any;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public toMutable(): com.couchbase.lite.MutableDictionary;
        public contains(param0: string): boolean;
        public hashCode(): number;
        public getBoolean(param0: string): boolean;
        public getDictionary(param0: string): com.couchbase.lite.Dictionary;
        public equals(param0: any): boolean;
        public getString(param0: string): string;
        public getFloat(param0: string): number;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public isEmpty(): boolean;
        public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
        public getLong(param0: string): number;
        public toString(): string;
        public getDouble(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public getDate(param0: string): java.util.Date;
        public iterator(): java.util.Iterator<string>;
        public count(): number;
        public toMap(): java.util.Map<string,any>;
        public getInt(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.Array;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DictionaryInterface {
        public static class: java.lang.Class<com.couchbase.lite.DictionaryInterface>;
        /**
         * Constructs a new instance of the com.couchbase.lite.DictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          count(): number;
          getKeys(): java.util.List<string>;
          getValue(param0: string): any;
          getString(param0: string): string;
          getNumber(param0: string): java.lang.Number;
          getInt(param0: string): number;
          getLong(param0: string): number;
          getFloat(param0: string): number;
          getDouble(param0: string): number;
          getBoolean(param0: string): boolean;
          getBlob(param0: string): com.couchbase.lite.Blob;
          getDate(param0: string): java.util.Date;
          getArray(param0: string): com.couchbase.lite.ArrayInterface;
          getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
          toMap(): java.util.Map<string,any>;
          contains(param0: string): boolean;
        });
        public constructor();
        public getLong(param0: string): number;
        public getKeys(): java.util.List<string>;
        public getValue(param0: string): any;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public getDouble(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public contains(param0: string): boolean;
        public getDate(param0: string): java.util.Date;
        public getBoolean(param0: string): boolean;
        public getString(param0: string): string;
        public getFloat(param0: string): number;
        public count(): number;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public toMap(): java.util.Map<string,any>;
        public getInt(param0: string): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocContext extends com.couchbase.lite.internal.DbContext {
        public static class: java.lang.Class<com.couchbase.lite.DocContext>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Document extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.Document>;
        public getId(): string;
        public getSequence(): number;
        public setContent(param0: com.couchbase.lite.Dictionary): void;
        public getKeys(): java.util.List<string>;
        public toMutable(): com.couchbase.lite.MutableDocument;
        public getValue(param0: string): any;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public getRevisionID(): string;
        public getNumber(param0: string): java.lang.Number;
        public contains(param0: string): boolean;
        public hashCode(): number;
        public getBoolean(param0: string): boolean;
        public getDictionary(param0: string): com.couchbase.lite.Dictionary;
        public equals(param0: any): boolean;
        public getString(param0: string): string;
        public getFloat(param0: string): number;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public getLong(param0: string): number;
        public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
        public toString(): string;
        public getContent(): com.couchbase.lite.Dictionary;
        public getDouble(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public getDate(param0: string): java.util.Date;
        public iterator(): java.util.Iterator<string>;
        public count(): number;
        public toMap(): java.util.Map<string,any>;
        public getInt(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.Array;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentChange {
        public static class: java.lang.Class<com.couchbase.lite.DocumentChange>;
        public getDocumentID(): string;
        public toString(): string;
        public getDatabase(): com.couchbase.lite.Database;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DocumentChange> {
        public static class: java.lang.Class<com.couchbase.lite.DocumentChangeListener>;
        /**
         * Constructs a new instance of the com.couchbase.lite.DocumentChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          changed(param0: com.couchbase.lite.DocumentChange): void;
          changed(param0: any): void;
          changed(param0: any): void;
        });
        public constructor();
        public changed(param0: com.couchbase.lite.DocumentChange): void;
        public changed(param0: any): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentChangeNotifier extends com.couchbase.lite.ChangeNotifier<com.couchbase.lite.DocumentChange> {
        public static class: java.lang.Class<com.couchbase.lite.DocumentChangeNotifier>;
        public finalize(): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentExpirationStrategy {
        public static class: java.lang.Class<com.couchbase.lite.DocumentExpirationStrategy>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentFlag {
        public static class: java.lang.Class<com.couchbase.lite.DocumentFlag>;
        public static DocumentFlagsDeleted: com.couchbase.lite.DocumentFlag;
        public static DocumentFlagsAccessRemoved: com.couchbase.lite.DocumentFlag;
        public rawValue(): number;
        public static values(): androidNative.Array<com.couchbase.lite.DocumentFlag>;
        public static valueOf(param0: string): com.couchbase.lite.DocumentFlag;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentReplication {
        public static class: java.lang.Class<com.couchbase.lite.DocumentReplication>;
        public isPush(): boolean;
        public toString(): string;
        public getReplicator(): com.couchbase.lite.Replicator;
        public getDocuments(): java.util.List<com.couchbase.lite.ReplicatedDocument>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentReplicationListener {
        public static class: java.lang.Class<com.couchbase.lite.DocumentReplicationListener>;
        /**
         * Constructs a new instance of the com.couchbase.lite.DocumentReplicationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          replication(param0: com.couchbase.lite.DocumentReplication): void;
        });
        public constructor();
        public replication(param0: com.couchbase.lite.DocumentReplication): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class DocumentReplicationListenerToken extends com.couchbase.lite.ListenerToken {
        public static class: java.lang.Class<com.couchbase.lite.DocumentReplicationListenerToken>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Endpoint {
        public static class: java.lang.Class<com.couchbase.lite.Endpoint>;
        /**
         * Constructs a new instance of the com.couchbase.lite.Endpoint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
        });
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class Expression {
        public static class: java.lang.Class<com.couchbase.lite.Expression>;
        public static parameter(param0: string): com.couchbase.lite.Expression;
        public static negated(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public modulo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public is(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public between(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static string(param0: string): com.couchbase.lite.Expression;
        public isNot(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public collate(param0: com.couchbase.lite.Collation): com.couchbase.lite.Expression;
        public add(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public constructor();
        public static booleanValue(param0: boolean): com.couchbase.lite.Expression;
        public static property(param0: string): com.couchbase.lite.PropertyExpression;
        public static number(param0: java.lang.Number): com.couchbase.lite.Expression;
        public static map(param0: java.util.Map<string,any>): com.couchbase.lite.Expression;
        public static doubleValue(param0: number): com.couchbase.lite.Expression;
        public isNullOrMissing(): com.couchbase.lite.Expression;
        public static all(): com.couchbase.lite.PropertyExpression;
        public greaterThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static date(param0: java.util.Date): com.couchbase.lite.Expression;
        public divide(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public notEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public greaterThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public in(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
        public like(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public subtract(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static not(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static floatValue(param0: number): com.couchbase.lite.Expression;
        public and(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public or(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public lessThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public toString(): string;
        public static list(param0: java.util.List<any>): com.couchbase.lite.Expression;
        public lessThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static value(param0: any): com.couchbase.lite.Expression;
        public static longValue(param0: number): com.couchbase.lite.Expression;
        public notNullOrMissing(): com.couchbase.lite.Expression;
        public regex(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public equalTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
        public static intValue(param0: number): com.couchbase.lite.Expression;
        public multiply(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
      }
      export module Expression {
        export class AggregateExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.AggregateExpression>;
          public getExpressions(): java.util.List<com.couchbase.lite.Expression>;
        }
        export class BinaryExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression>;
        }
        export module BinaryExpression {
          export class OpType {
            public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression.OpType>;
            public static Add: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Between: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Divide: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static EqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static GreaterThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static GreaterThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static In: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Is: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static IsNot: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static LessThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static LessThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Like: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Modulus: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Multiply: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static NotEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static Subtract: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static RegexLike: com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static valueOf(param0: string): com.couchbase.lite.Expression.BinaryExpression.OpType;
            public static values(): androidNative.Array<com.couchbase.lite.Expression.BinaryExpression.OpType>;
          }
        }
        export class CollationExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.CollationExpression>;
        }
        export class CompoundExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression>;
        }
        export module CompoundExpression {
          export class OpType {
            public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression.OpType>;
            public static And: com.couchbase.lite.Expression.CompoundExpression.OpType;
            public static Or: com.couchbase.lite.Expression.CompoundExpression.OpType;
            public static Not: com.couchbase.lite.Expression.CompoundExpression.OpType;
            public static valueOf(param0: string): com.couchbase.lite.Expression.CompoundExpression.OpType;
            public static values(): androidNative.Array<com.couchbase.lite.Expression.CompoundExpression.OpType>;
          }
        }
        export class FunctionExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.FunctionExpression>;
        }
        export class ParameterExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.ParameterExpression>;
        }
        export class UnaryExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression>;
        }
        export module UnaryExpression {
          export class OpType {
            public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression.OpType>;
            public static Missing: com.couchbase.lite.Expression.UnaryExpression.OpType;
            public static NotMissing: com.couchbase.lite.Expression.UnaryExpression.OpType;
            public static NotNull: com.couchbase.lite.Expression.UnaryExpression.OpType;
            public static Null: com.couchbase.lite.Expression.UnaryExpression.OpType;
            public static values(): androidNative.Array<com.couchbase.lite.Expression.UnaryExpression.OpType>;
            public static valueOf(param0: string): com.couchbase.lite.Expression.UnaryExpression.OpType;
          }
        }
        export class ValueExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.Expression.ValueExpression>;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FileLogger extends com.couchbase.lite.Logger {
        public static class: java.lang.Class<com.couchbase.lite.FileLogger>;
        public setConfig(param0: com.couchbase.lite.LogFileConfiguration): void;
        public setLevel(param0: com.couchbase.lite.LogLevel): void;
        public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public getConfig(): com.couchbase.lite.LogFileConfiguration;
        public getLevel(): com.couchbase.lite.LogLevel;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Fleece {
        public static class: java.lang.Class<com.couchbase.lite.Fleece>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class From extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.From>;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
        public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FromRouter {
        public static class: java.lang.Class<com.couchbase.lite.FromRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.FromRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
        });
        public constructor();
        public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FullTextExpression {
        public static class: java.lang.Class<com.couchbase.lite.FullTextExpression>;
        public match(param0: string): com.couchbase.lite.Expression;
        public static index(param0: string): com.couchbase.lite.FullTextExpression;
      }
      export module FullTextExpression {
        export class FullTextMatchExpression extends com.couchbase.lite.Expression {
          public static class: java.lang.Class<com.couchbase.lite.FullTextExpression.FullTextMatchExpression>;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FullTextFunction {
        public static class: java.lang.Class<com.couchbase.lite.FullTextFunction>;
        public static rank(param0: string): com.couchbase.lite.Expression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FullTextIndex extends com.couchbase.lite.AbstractIndex {
        public static class: java.lang.Class<com.couchbase.lite.FullTextIndex>;
        public setLanguage(param0: string): com.couchbase.lite.FullTextIndex;
        public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndex;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class FullTextIndexItem {
        public static class: java.lang.Class<com.couchbase.lite.FullTextIndexItem>;
        public static property(param0: string): com.couchbase.lite.FullTextIndexItem;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Function extends com.couchbase.lite.AbstractFunction {
        public static class: java.lang.Class<com.couchbase.lite.Function>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class GroupBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.HavingRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.GroupBy>;
        public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class GroupByRouter {
        public static class: java.lang.Class<com.couchbase.lite.GroupByRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.GroupByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
        });
        public constructor();
        public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Having extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.Having>;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class HavingRouter {
        public static class: java.lang.Class<com.couchbase.lite.HavingRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.HavingRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
        });
        public constructor();
        public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Index {
        public static class: java.lang.Class<com.couchbase.lite.Index>;
        /**
         * Constructs a new instance of the com.couchbase.lite.Index interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
        });
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class IndexBuilder extends com.couchbase.lite.AbstractIndexBuilder {
        public static class: java.lang.Class<com.couchbase.lite.IndexBuilder>;
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class IndexType {
        public static class: java.lang.Class<com.couchbase.lite.IndexType>;
        public static Value: com.couchbase.lite.IndexType;
        public static FullText: com.couchbase.lite.IndexType;
        public static Predictive: com.couchbase.lite.IndexType;
        public static values(): androidNative.Array<com.couchbase.lite.IndexType>;
        public static valueOf(param0: string): com.couchbase.lite.IndexType;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Join {
        public static class: java.lang.Class<com.couchbase.lite.Join>;
        public static crossJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join;
        public static join(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
        public static leftJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
        public static leftOuterJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
        public static innerJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
      }
      export module Join {
        export class On extends com.couchbase.lite.Join {
          public static class: java.lang.Class<com.couchbase.lite.Join.On>;
          public on(param0: com.couchbase.lite.Expression): com.couchbase.lite.Join;
        }
        export class Type {
          public static class: java.lang.Class<com.couchbase.lite.Join.Type>;
          public static INNER: com.couchbase.lite.Join.Type;
          public static LEFT_OUTER: com.couchbase.lite.Join.Type;
          public static CROSS: com.couchbase.lite.Join.Type;
          public static valueOf(param0: string): com.couchbase.lite.Join.Type;
          public static values(): androidNative.Array<com.couchbase.lite.Join.Type>;
          public getTag(): string;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class JoinRouter {
        public static class: java.lang.Class<com.couchbase.lite.JoinRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.JoinRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
        });
        public constructor();
        public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Joins extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.WhereRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.Joins>;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Limit extends com.couchbase.lite.AbstractQuery {
        public static class: java.lang.Class<com.couchbase.lite.Limit>;
        public execute(): com.couchbase.lite.ResultSet;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.LimitRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.LimitRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
          limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        });
        public constructor();
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ListenerToken {
        public static class: java.lang.Class<com.couchbase.lite.ListenerToken>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ListenerToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
        });
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LiteCoreException {
        public static class: java.lang.Class<com.couchbase.lite.LiteCoreException>;
        public domain: number;
        public code: number;
        public constructor(param0: number, param1: number, param2: string);
        public getCode(): number;
        public static throwException(param0: number, param1: number, param2: string): void;
        public toString(): string;
        public getDomain(): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LiveQuery extends com.couchbase.lite.DatabaseChangeListener {
        public static class: java.lang.Class<com.couchbase.lite.LiveQuery>;
        public changed(param0: com.couchbase.lite.DatabaseChange): void;
        public toString(): string;
        public changed(param0: any): void;
      }
      export module LiveQuery {
        export class State {
          public static class: java.lang.Class<com.couchbase.lite.LiveQuery.State>;
          public static STOPPED: com.couchbase.lite.LiveQuery.State;
          public static STARTED: com.couchbase.lite.LiveQuery.State;
          public static SCHEDULED: com.couchbase.lite.LiveQuery.State;
          public static values(): androidNative.Array<com.couchbase.lite.LiveQuery.State>;
          public static valueOf(param0: string): com.couchbase.lite.LiveQuery.State;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Log {
        public static class: java.lang.Class<com.couchbase.lite.Log>;
        public getCustom(): com.couchbase.lite.Logger;
        public getFile(): com.couchbase.lite.FileLogger;
        public getConsole(): com.couchbase.lite.ConsoleLogger;
        public setCustom(param0: com.couchbase.lite.Logger): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LogDomain {
        public static class: java.lang.Class<com.couchbase.lite.LogDomain>;
        public static ALL: com.couchbase.lite.LogDomain;
        public static DATABASE: com.couchbase.lite.LogDomain;
        public static QUERY: com.couchbase.lite.LogDomain;
        public static REPLICATOR: com.couchbase.lite.LogDomain;
        public static NETWORK: com.couchbase.lite.LogDomain;
        public static LISTENER: com.couchbase.lite.LogDomain;
        public static ALL_DOMAINS: java.util.EnumSet<com.couchbase.lite.LogDomain>;
        public static values(): androidNative.Array<com.couchbase.lite.LogDomain>;
        public static valueOf(param0: string): com.couchbase.lite.LogDomain;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LogFileConfiguration {
        public static class: java.lang.Class<com.couchbase.lite.LogFileConfiguration>;
        public usesPlaintext(): boolean;
        public constructor(param0: string, param1: com.couchbase.lite.LogFileConfiguration);
        public setMaxRotateCount(param0: number): com.couchbase.lite.LogFileConfiguration;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getMaxSize(): number;
        public getMaxRotateCount(): number;
        public setMaxSize(param0: number): com.couchbase.lite.LogFileConfiguration;
        public constructor(param0: com.couchbase.lite.LogFileConfiguration);
        public constructor(param0: string);
        public setUsePlaintext(param0: boolean): com.couchbase.lite.LogFileConfiguration;
        public getDirectory(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class LogLevel {
        public static class: java.lang.Class<com.couchbase.lite.LogLevel>;
        public static DEBUG: com.couchbase.lite.LogLevel;
        public static VERBOSE: com.couchbase.lite.LogLevel;
        public static INFO: com.couchbase.lite.LogLevel;
        public static WARNING: com.couchbase.lite.LogLevel;
        public static ERROR: com.couchbase.lite.LogLevel;
        public static NONE: com.couchbase.lite.LogLevel;
        public static values(): androidNative.Array<com.couchbase.lite.LogLevel>;
        /** @deprecated */
        public getValue(): number;
        public static valueOf(param0: string): com.couchbase.lite.LogLevel;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Logger {
        public static class: java.lang.Class<com.couchbase.lite.Logger>;
        /**
         * Constructs a new instance of the com.couchbase.lite.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getLevel(): com.couchbase.lite.LogLevel;
          log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        });
        public constructor();
        public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
        public getLevel(): com.couchbase.lite.LogLevel;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MValueDelegate extends com.couchbase.lite.internal.fleece.MValue.Delegate {
        public static class: java.lang.Class<com.couchbase.lite.MValueDelegate>;
        public encodeNative(param0: com.couchbase.lite.internal.fleece.FLEncoder, param1: any): void;
        public collectionFromNative(param0: any): com.couchbase.lite.internal.fleece.MCollection;
        public toNative(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MaintenanceType {
        public static class: java.lang.Class<com.couchbase.lite.MaintenanceType>;
        public static REINDEX: com.couchbase.lite.MaintenanceType;
        public static COMPACT: com.couchbase.lite.MaintenanceType;
        public static INTEGRITY_CHECK: com.couchbase.lite.MaintenanceType;
        public static values(): androidNative.Array<com.couchbase.lite.MaintenanceType>;
        public static valueOf(param0: string): com.couchbase.lite.MaintenanceType;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Meta {
        public static class: java.lang.Class<com.couchbase.lite.Meta>;
        public static id: com.couchbase.lite.MetaExpression;
        public static revisionID: com.couchbase.lite.MetaExpression;
        public static sequence: com.couchbase.lite.MetaExpression;
        public static deleted: com.couchbase.lite.MetaExpression;
        public static expiration: com.couchbase.lite.MetaExpression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MetaExpression extends com.couchbase.lite.Expression {
        public static class: java.lang.Class<com.couchbase.lite.MetaExpression>;
        public from(param0: string): com.couchbase.lite.Expression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MutableArray extends com.couchbase.lite.Array implements com.couchbase.lite.MutableArrayInterface {
        public static class: java.lang.Class<com.couchbase.lite.MutableArray>;
        public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
        public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
        public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
        public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
        public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public remove(param0: number): com.couchbase.lite.MutableArray;
        public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
        public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
        public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public getDictionary(param0: number): com.couchbase.lite.Dictionary;
        public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
        public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
        public addFloat(param0: number): com.couchbase.lite.MutableArray;
        public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public setValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
        public getString(param0: number): string;
        public getNumber(param0: number): java.lang.Number;
        public setString(param0: number, param1: string): com.couchbase.lite.MutableArray;
        public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
        public addInt(param0: number): com.couchbase.lite.MutableArray;
        public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
        public toList(): java.util.List<any>;
        public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
        public setLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
        public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
        public getBlob(param0: number): com.couchbase.lite.Blob;
        public getValue(param0: number): any;
        public count(): number;
        public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
        public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
        public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArray;
        public getDouble(param0: number): number;
        public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public getDictionary(param0: number): com.couchbase.lite.MutableDictionary;
        public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
        public constructor();
        public addBoolean(param0: boolean): com.couchbase.lite.MutableArray;
        public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArray;
        public getInt(param0: number): number;
        public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
        public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public addString(param0: string): com.couchbase.lite.MutableArray;
        public addDouble(param0: number): com.couchbase.lite.MutableArray;
        public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
        public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
        public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
        public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
        public getDate(param0: number): java.util.Date;
        public getBoolean(param0: number): boolean;
        public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
        public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public getArray(param0: number): com.couchbase.lite.ArrayInterface;
        public getFloat(param0: number): number;
        public getArray(param0: number): com.couchbase.lite.Array;
        public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
        public addDate(param0: java.util.Date): com.couchbase.lite.MutableArray;
        public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
        public insertString(param0: number, param1: string): com.couchbase.lite.MutableArray;
        public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
        public getArray(param0: number): com.couchbase.lite.MutableArray;
        public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
        public getLong(param0: number): number;
        public addLong(param0: number): com.couchbase.lite.MutableArray;
        public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
        public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
        public addValue(param0: any): com.couchbase.lite.MutableArray;
        public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
        public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
        public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public setInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
        public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public constructor(param0: java.util.List<any>);
        public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
        public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MutableArrayInterface extends com.couchbase.lite.ArrayInterface {
        public static class: java.lang.Class<com.couchbase.lite.MutableArrayInterface>;
        /**
         * Constructs a new instance of the com.couchbase.lite.MutableArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
          setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
          setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
          setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
          setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
          setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
          setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
          setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
          setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
          addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
          addString(param0: string): com.couchbase.lite.MutableArrayInterface;
          addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
          addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
          addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
          addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
          addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
          addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
          addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
          addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
          addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
          addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
          insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
          insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
          insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
          insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
          insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
          insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
          insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
          insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
          insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
          remove(param0: number): com.couchbase.lite.MutableArrayInterface;
          getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
          getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
          getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
          getArray(param0: number): com.couchbase.lite.ArrayInterface;
          count(): number;
          getValue(param0: number): any;
          getString(param0: number): string;
          getNumber(param0: number): java.lang.Number;
          getInt(param0: number): number;
          getLong(param0: number): number;
          getFloat(param0: number): number;
          getDouble(param0: number): number;
          getBoolean(param0: number): boolean;
          getBlob(param0: number): com.couchbase.lite.Blob;
          getDate(param0: number): java.util.Date;
          getArray(param0: number): com.couchbase.lite.ArrayInterface;
          getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
          toList(): java.util.List<any>;
        });
        public constructor();
        public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
        public getDouble(param0: number): number;
        public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
        public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public getInt(param0: number): number;
        public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
        public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
        public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
        public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public getDate(param0: number): java.util.Date;
        public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public getBoolean(param0: number): boolean;
        public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public getArray(param0: number): com.couchbase.lite.ArrayInterface;
        public getFloat(param0: number): number;
        public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
        public getString(param0: number): string;
        public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: number): java.lang.Number;
        public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
        public toList(): java.util.List<any>;
        public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
        public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
        public getLong(param0: number): number;
        public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
        public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
        public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
        public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
        public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
        public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
        public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
        public getBlob(param0: number): com.couchbase.lite.Blob;
        public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
        public getValue(param0: number): any;
        public count(): number;
        public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
        public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
        public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
        public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MutableDictionary extends com.couchbase.lite.Dictionary implements com.couchbase.lite.MutableDictionaryInterface {
        public static class: java.lang.Class<com.couchbase.lite.MutableDictionary>;
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionary;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionary;
        public constructor();
        public getArray(param0: string): com.couchbase.lite.MutableArray;
        public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
        public getDictionary(param0: string): com.couchbase.lite.Dictionary;
        public getBoolean(param0: string): boolean;
        public getFloat(param0: string): number;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionary;
        public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
        public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getLong(param0: string): number;
        public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionary;
        public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public constructor(param0: java.util.Map<string,any>);
        public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
        public isChanged(): boolean;
        public getArray(param0: string): com.couchbase.lite.Array;
        public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
        public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionary;
        public getKeys(): java.util.List<string>;
        public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionary;
        public getValue(param0: string): any;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
        public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
        public contains(param0: string): boolean;
        public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getString(param0: string): string;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public remove(param0: string): com.couchbase.lite.MutableDictionary;
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionary;
        public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
        public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionary;
        public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
        public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionary;
        public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
        public getDouble(param0: string): number;
        public getDate(param0: string): java.util.Date;
        public count(): number;
        public toMap(): java.util.Map<string,any>;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
        public getInt(param0: string): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MutableDictionaryInterface extends com.couchbase.lite.DictionaryInterface {
        public static class: java.lang.Class<com.couchbase.lite.MutableDictionaryInterface>;
        /**
         * Constructs a new instance of the com.couchbase.lite.MutableDictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
          setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
          setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
          setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
          setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
          setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
          setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
          setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
          setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
          setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
          setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
          setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
          setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
          remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
          getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
          getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
          getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
          getArray(param0: string): com.couchbase.lite.ArrayInterface;
          count(): number;
          getKeys(): java.util.List<string>;
          getValue(param0: string): any;
          getString(param0: string): string;
          getNumber(param0: string): java.lang.Number;
          getInt(param0: string): number;
          getLong(param0: string): number;
          getFloat(param0: string): number;
          getDouble(param0: string): number;
          getBoolean(param0: string): boolean;
          getBlob(param0: string): com.couchbase.lite.Blob;
          getDate(param0: string): java.util.Date;
          getArray(param0: string): com.couchbase.lite.ArrayInterface;
          getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
          toMap(): java.util.Map<string,any>;
          contains(param0: string): boolean;
        });
        public constructor();
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
        public getKeys(): java.util.List<string>;
        public getValue(param0: string): any;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
        public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
        public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public contains(param0: string): boolean;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
        public getBoolean(param0: string): boolean;
        public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getString(param0: string): string;
        public getFloat(param0: string): number;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getLong(param0: string): number;
        public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
        public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
        public getDouble(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public getDate(param0: string): java.util.Date;
        public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public count(): number;
        public toMap(): java.util.Map<string,any>;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
        public getInt(param0: string): number;
        public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class MutableDocument extends com.couchbase.lite.Document implements com.couchbase.lite.MutableDictionaryInterface {
        public static class: java.lang.Class<com.couchbase.lite.MutableDocument>;
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDocument;
        public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDocument;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDocument;
        public constructor();
        public getArray(param0: string): com.couchbase.lite.MutableArray;
        public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
        public getDictionary(param0: string): com.couchbase.lite.Dictionary;
        public getBoolean(param0: string): boolean;
        public getFloat(param0: string): number;
        public setLong(param0: string, param1: number): com.couchbase.lite.MutableDocument;
        public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getLong(param0: string): number;
        public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
        public setValue(param0: string, param1: any): com.couchbase.lite.MutableDocument;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
        public setString(param0: string, param1: string): com.couchbase.lite.MutableDocument;
        public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public constructor(param0: java.util.Map<string,any>);
        public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
        public getArray(param0: string): com.couchbase.lite.Array;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDocument;
        public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDocument;
        public getKeys(): java.util.List<string>;
        public constructor(param0: string);
        public toMutable(): com.couchbase.lite.MutableDocument;
        public remove(param0: string): com.couchbase.lite.MutableDocument;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDocument;
        public getValue(param0: string): any;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
        public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
        public contains(param0: string): boolean;
        public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
        public getString(param0: string): string;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public constructor(param0: string, param1: java.util.Map<string,any>);
        public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
        public setInt(param0: string, param1: number): com.couchbase.lite.MutableDocument;
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
        public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDocument;
        public constructor(param0: com.couchbase.lite.Document);
        public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDocument;
        public getDouble(param0: string): number;
        public getDate(param0: string): java.util.Date;
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDocument;
        public count(): number;
        public toMap(): java.util.Map<string,any>;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
        public getInt(param0: string): number;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class OrderBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.OrderBy>;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class OrderByRouter {
        public static class: java.lang.Class<com.couchbase.lite.OrderByRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.OrderByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
        });
        public constructor();
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export abstract class Ordering {
        public static class: java.lang.Class<com.couchbase.lite.Ordering>;
        public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.Ordering.SortOrder;
        public constructor();
        public static property(param0: string): com.couchbase.lite.Ordering.SortOrder;
      }
      export module Ordering {
        export class SortOrder extends com.couchbase.lite.Ordering {
          public static class: java.lang.Class<com.couchbase.lite.Ordering.SortOrder>;
          public descending(): com.couchbase.lite.Ordering;
          public ascending(): com.couchbase.lite.Ordering;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Parameters {
        public static class: java.lang.Class<com.couchbase.lite.Parameters>;
        public setDouble(param0: string, param1: number): com.couchbase.lite.Parameters;
        public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.Parameters;
        public setLong(param0: string, param1: number): com.couchbase.lite.Parameters;
        public constructor(param0: com.couchbase.lite.Parameters);
        public setBoolean(param0: string, param1: boolean): com.couchbase.lite.Parameters;
        public constructor();
        public getValue(param0: string): any;
        public setInt(param0: string, param1: number): com.couchbase.lite.Parameters;
        public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.Parameters;
        public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.Parameters;
        public setString(param0: string, param1: string): com.couchbase.lite.Parameters;
        public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.Parameters;
        public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.Parameters;
        public setValue(param0: string, param1: any): com.couchbase.lite.Parameters;
        public setFloat(param0: string, param1: number): com.couchbase.lite.Parameters;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class PropertyExpression extends com.couchbase.lite.Expression {
        public static class: java.lang.Class<com.couchbase.lite.PropertyExpression>;
        public from(param0: string): com.couchbase.lite.Expression;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Query {
        public static class: java.lang.Class<com.couchbase.lite.Query>;
        /**
         * Constructs a new instance of the com.couchbase.lite.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getParameters(): com.couchbase.lite.Parameters;
          setParameters(param0: com.couchbase.lite.Parameters): void;
          execute(): com.couchbase.lite.ResultSet;
          explain(): string;
          addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
          addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
          removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        });
        public constructor();
        public execute(): com.couchbase.lite.ResultSet;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class QueryBuilder {
        public static class: java.lang.Class<com.couchbase.lite.QueryBuilder>;
        public static select(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
        public static selectDistinct(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class QueryChange {
        public static class: java.lang.Class<com.couchbase.lite.QueryChange>;
        public getResults(): com.couchbase.lite.ResultSet;
        public getError(): java.lang.Throwable;
        public getQuery(): com.couchbase.lite.Query;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class QueryChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.QueryChange> {
        public static class: java.lang.Class<com.couchbase.lite.QueryChangeListener>;
        /**
         * Constructs a new instance of the com.couchbase.lite.QueryChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          changed(param0: com.couchbase.lite.QueryChange): void;
          changed(param0: any): void;
          changed(param0: any): void;
        });
        public constructor();
        public changed(param0: com.couchbase.lite.QueryChange): void;
        public changed(param0: any): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicatedDocument {
        public static class: java.lang.Class<com.couchbase.lite.ReplicatedDocument>;
        public flags(): java.util.EnumSet<com.couchbase.lite.DocumentFlag>;
        public getError(): com.couchbase.lite.CouchbaseLiteException;
        public toString(): string;
        public getID(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicationFilter {
        public static class: java.lang.Class<com.couchbase.lite.ReplicationFilter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ReplicationFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          filtered(param0: com.couchbase.lite.Document, param1: java.util.EnumSet<com.couchbase.lite.DocumentFlag>): boolean;
        });
        public constructor();
        public filtered(param0: com.couchbase.lite.Document, param1: java.util.EnumSet<com.couchbase.lite.DocumentFlag>): boolean;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Replicator extends com.couchbase.lite.AbstractReplicator {
        public static class: java.lang.Class<com.couchbase.lite.Replicator>;
        public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
        public handleOffline(param0: com.couchbase.lite.AbstractReplicator.ActivityLevel, param1: boolean): void;
        public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicatorChange {
        public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
        public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
        public toString(): string;
        public getReplicator(): com.couchbase.lite.Replicator;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicatorChangeListener {
        public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListener>;
        /**
         * Constructs a new instance of the com.couchbase.lite.ReplicatorChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          changed(param0: com.couchbase.lite.ReplicatorChange): void;
        });
        public constructor();
        public changed(param0: com.couchbase.lite.ReplicatorChange): void;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicatorChangeListenerToken extends com.couchbase.lite.ListenerToken {
        public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListenerToken>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ReplicatorConfiguration extends com.couchbase.lite.AbstractReplicatorConfiguration {
        public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration>;
        public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
        public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Result extends java.lang.Object {
        public static class: java.lang.Class<com.couchbase.lite.Result>;
        public getDouble(param0: number): number;
        public getString(param0: number): string;
        public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: number): java.lang.Number;
        public getKeys(): java.util.List<string>;
        public getValue(param0: string): any;
        public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
        public getNumber(param0: string): java.lang.Number;
        public contains(param0: string): boolean;
        public toList(): java.util.List<any>;
        public getLong(param0: number): number;
        public getBoolean(param0: string): boolean;
        public getDictionary(param0: string): com.couchbase.lite.Dictionary;
        public getString(param0: string): string;
        public getFloat(param0: string): number;
        public getInt(param0: number): number;
        public getBlob(param0: string): com.couchbase.lite.Blob;
        public getLong(param0: string): number;
        public getDate(param0: number): java.util.Date;
        public getBoolean(param0: number): boolean;
        public getDictionary(param0: number): com.couchbase.lite.Dictionary;
        public getBlob(param0: number): com.couchbase.lite.Blob;
        public getDouble(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.ArrayInterface;
        public getDate(param0: string): java.util.Date;
        public iterator(): java.util.Iterator<string>;
        public getValue(param0: number): any;
        public count(): number;
        public getArray(param0: number): com.couchbase.lite.ArrayInterface;
        public toMap(): java.util.Map<string,any>;
        public getFloat(param0: number): number;
        public getInt(param0: string): number;
        public getArray(param0: string): com.couchbase.lite.Array;
        public getArray(param0: number): com.couchbase.lite.Array;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ResultSet extends java.lang.Iterable<com.couchbase.lite.Result> {
        public static class: java.lang.Class<com.couchbase.lite.ResultSet>;
        public allResults(): java.util.List<com.couchbase.lite.Result>;
        public next(): com.couchbase.lite.Result;
        public iterator(): java.util.Iterator<com.couchbase.lite.Result>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Select extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.FromRouter {
        public static class: java.lang.Class<com.couchbase.lite.Select>;
        public execute(): com.couchbase.lite.ResultSet;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public getParameters(): com.couchbase.lite.Parameters;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class SelectResult {
        public static class: java.lang.Class<com.couchbase.lite.SelectResult>;
        public static property(param0: string): com.couchbase.lite.SelectResult.As;
        public static all(): com.couchbase.lite.SelectResult.From;
        public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
      }
      export module SelectResult {
        export class As extends com.couchbase.lite.SelectResult {
          public static class: java.lang.Class<com.couchbase.lite.SelectResult.As>;
          public as(param0: string): com.couchbase.lite.SelectResult;
        }
        export class From extends com.couchbase.lite.SelectResult {
          public static class: java.lang.Class<com.couchbase.lite.SelectResult.From>;
          public from(param0: string): com.couchbase.lite.SelectResult;
        }
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class SessionAuthenticator extends com.couchbase.lite.Authenticator {
        public static class: java.lang.Class<com.couchbase.lite.SessionAuthenticator>;
        public getCookieName(): string;
        public getSessionID(): string;
        public constructor(param0: string);
        public constructor(param0: string, param1: string);
        public constructor();
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class URLEndpoint extends com.couchbase.lite.Endpoint {
        public static class: java.lang.Class<com.couchbase.lite.URLEndpoint>;
        public getURL(): java.net.URI;
        public toString(): string;
        public constructor(param0: java.net.URI);
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ValueIndex extends com.couchbase.lite.AbstractIndex {
        public static class: java.lang.Class<com.couchbase.lite.ValueIndex>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class ValueIndexItem {
        public static class: java.lang.Class<com.couchbase.lite.ValueIndexItem>;
        public static property(param0: string): com.couchbase.lite.ValueIndexItem;
        public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.ValueIndexItem;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class VariableExpression extends com.couchbase.lite.Expression {
        public static class: java.lang.Class<com.couchbase.lite.VariableExpression>;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class Where extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
        public static class: java.lang.Class<com.couchbase.lite.Where>;
        public execute(): com.couchbase.lite.ResultSet;
        public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
        public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
        public getParameters(): com.couchbase.lite.Parameters;
        public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
        public setParameters(param0: com.couchbase.lite.Parameters): void;
        public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
        public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
        public explain(): string;
      }
    }
  }
}

declare module com {
  export module couchbase {
    export module lite {
      export class WhereRouter {
        public static class: java.lang.Class<com.couchbase.lite.WhereRouter>;
        /**
         * Constructs a new instance of the com.couchbase.lite.WhereRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
        });
        public constructor();
        public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
      }
    }
  }
}


//Generics information:
//com.couchbase.lite.AbstractDatabase.ActiveProcess:1
//com.couchbase.lite.ChangeListener:1
//com.couchbase.lite.ChangeListenerToken:1
//com.couchbase.lite.ChangeNotifier:1
//com.couchbase.lite.internal.core.NativeContext:1
//com.couchbase.lite.internal.utils.Fn.Consumer:1
//com.couchbase.lite.internal.utils.Fn.ConsumerThrows:2
//com.couchbase.lite.internal.utils.Fn.Function:2
//com.couchbase.lite.internal.utils.Fn.FunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.Predicate:1
//com.couchbase.lite.internal.utils.Fn.Provider:1
//com.couchbase.lite.internal.utils.Fn.TaskThrows:1
//com.couchbase.lite.internal.utils.StateMachine:1
//com.couchbase.lite.internal.utils.StateMachine.Builder:1

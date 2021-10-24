declare module com {
  export module parempi {
    export module couchbase {
      export class Couchbase {
        public static class: java.lang.Class<com.parempi.couchbase.Couchbase>;

        public constructor();

        public static open(param0: globalAndroid.content.Context, param1: com.parempi.couchbase.PrebuiltDb, param2: com.parempi.couchbase.Promise): void;

        public static open(param0: globalAndroid.content.Context, param1: string, param2: com.parempi.couchbase.Promise): void;

        public static openSync(param0: globalAndroid.content.Context, param1: string): com.couchbase.lite.Database;

        public static openSync(param0: globalAndroid.content.Context, param1: com.parempi.couchbase.PrebuiltDb): com.couchbase.lite.Database;
      }
    }
  }
}

declare module com {
  export module parempi {
    export module couchbase {
      export abstract class PrebuiltDb {
        public static class: java.lang.Class<com.parempi.couchbase.PrebuiltDb>;
        public name: string;
        public location: string;

        public constructor(param0: string, param1: string);

        public install(param0: com.couchbase.lite.DatabaseConfiguration): void;

        public exists(): boolean;

        public getLocation(): string;

        public getName(): string;
      }
    }
  }
}

declare module com {
  export module parempi {
    export module couchbase {
      export class PrebuiltDbFolder extends com.parempi.couchbase.PrebuiltDb {
        public static class: java.lang.Class<com.parempi.couchbase.PrebuiltDbFolder>;

        public constructor(param0: string, param1: string);

        public install(param0: com.couchbase.lite.DatabaseConfiguration): void;

        public exists(): boolean;
      }
    }
  }
}

declare module com {
  export module parempi {
    export module couchbase {
      export class PrebuiltDbZip extends com.parempi.couchbase.PrebuiltDb {
        public static class: java.lang.Class<com.parempi.couchbase.PrebuiltDbZip>;

        public constructor(param0: string, param1: string);

        public install(param0: com.couchbase.lite.DatabaseConfiguration): void;

        public exists(): boolean;
      }
    }
  }
}

declare module com {
  export module parempi {
    export module couchbase {
      export class Promise {
        public static class: java.lang.Class<com.parempi.couchbase.Promise>;

        /**
         * Constructs a new instance of the com.parempi.couchbase.Promise interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          resolve(param0: any): void;
          reject(param0: string): void;
        });
        public constructor();

        public resolve(param0: any): void;

        public reject(param0: string): void;
      }
    }
  }
}
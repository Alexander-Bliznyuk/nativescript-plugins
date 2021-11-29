# @parempi/couchbase-lite

It's a NativeScript plugin for Couchbase Lite. Since it's alpha stage project, you're better off using more mature and
stable [solution](https://github.com/triniwiz/nativescript-plugins/tree/master/packages/nativescript-couchbase) by Osei Fortune for now. I've been using his plugin extensively in a few projects. Although it features quite neat API, it forced me to go hucky in order to perform joins and execute
Couchbase functions.  Besides, it blocks the main thread, thus significantly degrades
app responsiveness.
I believe, plugins should build on top of native libraries not limiting their features.


*Disclaimer*: work in progress, API is subject to change, no iOS support.


1. [What is Couchbase](#introducing-couchbase-lite)?
2. [Installing](#installing)
3. [Usage](#usage)
   1. [Overview](#overview)
   2. [Demo app](#demo-app)
   3. [Native APIs access](#native-apis-access)
   4. [The plugin's API](#the-plugins-api)
       1. [Databases](#databases)
       2. [Documents](#documents)
       3. [Transactions](#transactions)
       4. [Queries](#queries)
4. [License](#license)



## Introducing Couchbase Lite
Source: https://docs.couchbase.com/couchbase-lite/2.8/index.html

> Couchbase Lite is an embedded, NoSQL JSON Document Style database for your mobile apps.

> You can use Couchbase Lite as a standalone embedded database within your mobile apps, or with Sync Gateway and Couchbase Server to provide a complete cloud to edge synchronized solution get the agility of sql and the flexibility of json

> ### Work locally . . .
>Couchbase Lite is designed to work with data stored locally and includes
> - The ability to write queries with semantics based on SQL.
> - Full-Text Search queries on documents stored locally.
> - The ability to store document attachments (blobs), for example images or PDF files.

> ### Sync at the edge . . .
>It manages data sync automatically through:
> - A replication protocol built over WebSockets to synchronize data with Sync Gateway.
> - A Peer-to-Peer sync implementation to synchronize data between Couchbase Lite clients without dependency upon centralized control.

## Installing

`ns plugin add @parempi/couchbase-lite`\
The minimum required Android SDK is version 22 (Lollipop)

If you're going to ship a zipped prebuilt database with your app, add the following line in `webpack.config.js`:\
`webpack.Utils.addCopyRule("**/*.zip");`


## Usage


### Overview


```typescript
import {open, cbl} from "@parempi/couchbase-lite";

const {Expression:{property, string, intValue}, Ordering:{property: orderingProperty}} = cbl;

open("getting-started").then(async (database) => {
  const mutableDoc = database.createDocument({version: 2.0, type: "SDK"});

  mutableDoc.languages = ['JavaScript', 'Java', 'Objective-C'];
  database.save(mutableDoc);
  

  const sdks = await database.fetch(
      query => query
        .where(property("type").equalTo(string("SDK")))
        .orderBy([orderingProperty("version").descending()])
        .limit(intValue(5))
  )
    .rows();

  for (const sdk of sdks) {
    sdk.manyReleases = true;
  }
  try {
      await database.saveInBatch(sdks);
  } catch (e) {
      console.log(e.message);
  }
});
```



### [Demo app](https://github.com/Alexander-Bliznyuk/nativescript-plugins/tree/master/apps/demo)


It's a very simple vanilla NativeScript app.
To be improved.


### Native APIs access



As you might know, NativeScript gives you direct access to native APIs right through JavaScript. This plugin provides you with
d.ts typings to enable IntelliSense. As of now, only Android is supported. JavaScript's syntax and NativeScript are enough
to reproduce examples given in [the official Android guide](https://docs.couchbase.com/couchbase-lite/2.8/android/quickstart.html) with near to no modifications.

<details>
<summary>For example, this JavaScript code corresponds</summary>

```typescript
import {Utils} from "@nativescript/core";
import {knownFolders} from "@nativescript/core/file-system";



// (1) Initialize the Couchbase Lite system and enable IntelliSense
import "@parempi/couchbase-lite";
// or you can import any of exported names (see API reference)
import {cbl} from "@parempi/couchbase-lite";


// then IDEs will import these for you as you code
import CouchbaseLite = com.couchbase.lite.CouchbaseLite;
import DatabaseConfiguration = com.couchbase.lite.DatabaseConfiguration;
import Database = com.couchbase.lite.Database;
import MutableDocument = com.couchbase.lite.MutableDocument;
import SelectResult = com.couchbase.lite.SelectResult;
import QueryBuilder = com.couchbase.lite.QueryBuilder;
import DataSource = com.couchbase.lite.DataSource;
import Expression = com.couchbase.lite.Expression;

// here's an example of another style
const {URLEndpoint, ReplicatorConfiguration, BasicAuthenticator, Replicator, ReplicatorChangeListener} = cbl;


// (2) Get the database (and create it if it doesn’t exist).
const config = new DatabaseConfiguration();

config.setDirectory(knownFolders.currentApp().parent.path);

const database = new cbl.Database("getting-started", config);


// (3) Create a new document (i.e. a record) in the database.
let mutableDoc = new MutableDocument()
  .setFloat("version", 2.0)
.setString("type", "SDK");

// (4) Save it to the database.
database.save(mutableDoc);

// (5) Update a document.
mutableDoc = database.getDocument(mutableDoc.getId()).toMutable();
mutableDoc.setString("language", "JavaScript");
database.save(mutableDoc);
const document = database.getDocument(mutableDoc.getId());
// (6) Log the document ID (generated by the database) and properties
console.log( "Document ID :: " + document.getId());
console.log("Learning " + document.getString("language"));

// (7) Create a query to fetch documents of type SDK.
const query = QueryBuilder.select([SelectResult.all()])
  .from(DataSource.database(database))
  .where(Expression.property("type").equalTo(Expression.string("SDK")));
const result = query.execute();
console.log("Number of rows ::  " + result.allResults().size());

// (8) Create replicators to push and pull changes to and from the cloud.
const targetEndpoint = new URLEndpoint(new java.net.URI("ws://localhost:4984/getting-started-db"));
const replConfig = new ReplicatorConfiguration(database, targetEndpoint);
replConfig.setReplicatorType(ReplicatorConfiguration.ReplicatorType.PUSH_AND_PULL);

// (9) Add authentication.
replConfig.setAuthenticator(new BasicAuthenticator("sync-gateway", "password"));

// (10) Create replicator (be sure to hold a reference somewhere that will prevent the Replicator from being GCed)
const replicator = new Replicator(replConfig);

// (11) Listen to replicator change events.
replicator.addChangeListener(new ReplicatorChangeListener({
  changed: change => {
    if (change.getStatus().getError() !== null) {
      console.log("Error code ::  " + change.getStatus().getError().getCode());
    }
  }
}));

// (12) Start replication.
replicator.start();
```
</details>


<details>
<summary>to this Java code</summary>


```java
// (1) Initialize the Couchbase Lite system
CouchbaseLite.init(context);

// (2) Get the database (and create it if it doesn’t exist).
DatabaseConfiguration config = new DatabaseConfiguration();

config.setDirectory(context.getFilesDir().

  getAbsolutePath());

Database database = new Database("getting-started", config);


// (3) Create a new document (i.e. a record) in the database.
MutableDocument mutableDoc = new MutableDocument()
  .setFloat("version", 2.0F)
  .setString("type", "SDK");

// (4) Save it to the database.
database.save(mutableDoc);

// (5) Update a document.
mutableDoc = database.getDocument(mutableDoc.getId()).toMutable();
mutableDoc.setString("language", "Java");
database.save(mutableDoc);
Document document = database.getDocument(mutableDoc.getId());
// (6) Log the document ID (generated by the database) and properties
Log.i(TAG, "Document ID :: " + document.getId());
Log.i(TAG, "Learning " + document.getString("language"));

// (7) Create a query to fetch documents of type SDK.
Query query = QueryBuilder.select(SelectResult.all())
  .from(DataSource.database(database))
  .where(Expression.property("type").equalTo(Expression.string("SDK")));
ResultSet result = query.execute();
Log.i(TAG, "Number of rows ::  " + result.allResults().size());

// (8)  Create replicators to push and pull changes to and from the cloud.
Endpoint targetEndpoint = new URLEndpoint(new URI("ws://localhost:4984/getting-started-db"));
ReplicatorConfiguration replConfig = new ReplicatorConfiguration(database, targetEndpoint);
replConfig.setReplicatorType(ReplicatorConfiguration.ReplicatorType.PUSH_AND_PULL);

// (9) Add authentication.
replConfig.setAuthenticator(new BasicAuthenticator("sync-gateway", "password"));

// (10) Create replicator (be sure to hold a reference somewhere that will prevent the Replicator from being GCed)
Replicator replicator = new Replicator(replConfig);

// (11) Listen to replicator change events.
replicator.addChangeListener(change -> {
  if (change.getStatus().getError() != null) {
    Log.i(TAG, "Error code ::  " + change.getStatus().getError().getCode());
  }
});

// (12) Start replication.
replicator.start();
```

</details>


Disclaimer:
Of course, iOS Couchbase Lite native library differs a bit, so I will have to write a shim, so that the same JavaScript code work seamlessly on both platforms.
Currently, this plugin does not support iOS.




### The plugin's API

It's very impressive how much we can accomplish  — thanks to NativeScript — simply calling native libraries.
However, JavaScript is more dynamic and concise in comparison to some lower level languages Couchbase Lite is written in.
A downside of JS is that it lacks multithreading.

@parempi/couchbase-lite takes advantage of both worlds.

Next sections will walk you through the convenient extensions over native Couchbase Lite that I've developed so far.

It is highly recommended that you learn more on https://docs.couchbase.com/couchbase-lite/current/index.html.
That way you'll be able to set up sync gateway, troubleshoot, use `cblite` command line tool, and make most of Couchbase Lite.


### Databases

You can create a new database and-or open an existing one, using `open` convenience function. Just pass in a database name or a `PrebuiltDatabase` object.

```typescript
const db = await open('exampe');
```

If the database "example" does not exist, the function will unpack and install `${knownFolders.currentApp().path}/example.cblite2.zip` archive, in case it's present.

`open` operates in a background thread.

You might want to specify a prebuilt database in more details.

```typescript
import PrebuiltDbFolder = com.parempi.couchbase.PrebuiltDbFolder;
import PrebuiltDbZip = com.parempi.couchbase.PrebuiltDbZip;


// a db bundled as a folder ${knownFolders.currentApp().path}/assets/example.cblite2 
open(new PrebuiltDbFolder('example', knownFolders.currentApp().getFolder('assets').path));

// You can implement your own PrebuiltDb.
// Wouldn't it be fancy to install a database from cdn?
open(new MyFancyCdnPrebuiltDb('example', 'https://cdn.example.com/'));
```

You may find and `adb pull` an installed database at `/data/data/${APPLICATION_ID}/files/${DATABASE_NAME}.cblite2`, i.e.`knownFolders.currentApp().parent.path)`

It is highly recommended closing database when it's no longer needed.
```typescript
database.close();
```




### Documents


```typescript

// Plain Old JavaScript Object will do
const POJODocument = {
  type: 'task',
  owner: 'todo',
  title: 'create readme.md',
  createdAt: new Date(),
  // "id" is the only property that bears a special meaning
  // if ommited Couchbase Lite will generate an id for you upon persisting in the database
  id: 'task_readme',
};

db.save(POJODocument);
```


```typescript
import {toNativeDate} from "@parempi/couchbase-lite/toNativeCblConverter";

// here is a native document
const nativeDocument = new MutableDocument('task_readme'); // again, it's possible to omit id

// for those who prefer verbose syntax and explicit types or aim for extra performace
nativeDocument
  .setString('type', 'task')
  .setString('owner', 'todo')
  .setString('title', 'create readme.md')
  .setDate('createdAt', toNativeDate(new Date()));

db.save(nativeDocument);
```


Now meet proxies.
```typescript
// queries a document from the database or initializes a new one; returns its proxy
const proxyDocument = db.getDocument('task_readme'); // here an id is mandatory

// this works
proxyDocument
  .setString('type', 'task')
  .setString('owner', 'todo')
  .setString('title', 'create readme.md')
  .setDate('createdAt', toNativeDate(new Date()))
  .setArray('tags', 
    new MutableArray()
      .addString('open source')
      .addString('hobby')
  );

// as well as this
proxyDocument.type = 'task';
proxyDocument['owner'] = 'todo';
proxyDocument.title = 'create readme.md';
proxyDocument.createdAt = new Date();
proxyDocument.tags = ['open sorce', 'hobby',];

db.save(proxyDocument);
```

Why are proxies?
They hold references to native objects and mimic familiar Plain Old JavaScript Objects' behaviour while eliminating conversion to/from native types.
However, they're the slowest to access properties because their conversion occurs on demand.

So when saving a bunch of extensive documents or querying database becomes a bottleneck, this approach will spare some CPU cycles.


```typescript
// saves a new document and returns its proxy
const proxyDocument = db.createDocument({
  type: 'task',
  owner: 'todo',
  title: 'create readme.md',
  createdAt: new Date(),
});
console.log(proxyDocument.title, proxyDocument.createdAt);

console.assert(proxyDocument.title === db.getDocument(proxyDocument.getId()).title)

// update the document
proxyDocument.owner = 'todo1';
proxyDocument.lastModified = new Date();
db.save(proxyDocument);
```

There might be several sources of updates. The same document may be getting updated by replicator and local `Database.save` call simultaneously.
See the official Couchbase Lite guides for details. You can choose a strategy for resolving such situations.
```typescript
import ConcurrencyControl = com.couchbase.lite.ConcurrencyControl;

db.save({foo: 'bar',}, ConcurrencyControl.FAIL_ON_CONFLICT);
```

Delete a document.
```typescript
db.deleteDocument('docId');
```


### Transactions

If you’re making multiple changes to a database at once, it’s faster to group them together.
`Database.saveInBatch`  saves the overhead of multiple database commits, greatly improving performance. It prevents UI from blocking by running in a background thread.
The following example persists a few documents in batch.

```typescript
const docs = [];
for (let i = 0; i < 10; i++) {
    docs.push({
        type: "user",
        name: "user" + i,
        admin: false,
    });
}
try {
  database.saveInBatch(docs);
} catch (e) {
  console.log(e.message);
}
```

At the local level this operation is still transactional: no other Database instances, including ones managed by the replicator can make changes during the execution of the block, and other instances will not see partial changes.




### Queries


`db[ .setAlias(dbAlias: string) ]`\
`  .fetch( queryBuilder?: (query: From) => AbstractQuery )`\
`  [ .distinct() ]`\
`  [ .plain() | .json() ]`\
`  ( .rows(...props: SelectResult[]) | column(prop: SelectResult) | value(prop: SelectResult) )`


```typescript
import {cbl} from "@parempi/couchbase-lite";

const {Expression: {property, string}, SelectResult: {expression: selectExpression}, ArrayExpression: {every}} = cbl;

// get list of all document types in the database 
await database
  .fetch()
  .distinct()
  .plain() // POJO
  .column( selectExpression(property('type')) );  // select only one field




// count airports in San Diego
await database.fetch(
  query => query
    .where(
          property("type").equalTo(string("airport"))
      .and(
          property('city').equalTo(string('San Diego'))
      )
    )
)
  // select the first field of the first row
  .value( selectExpression( Function.count(string("*")) ) );



// get hotels that welcome guests with pets
await database.fetch(
  query => query
    .where(
      property("pets_ok").equalTo(booleanValue(true))
    )
)
  .documents();  // proxified documents


// find how many top-rated accomodation options are in each city
const countExpression = Function.count(Expression.all()),
  reviewVar = ArrayExpression.variable("review"),
  overallVar = ArrayExpression.variable("review.ratings.Overall");


await dbdatabase.fetch(
  query => query
    .where(
          property("type").equalTo(string("hotel"))
      .and(
          property('city').notNullOrMissing())
      .and(
          every(reviewVar).in(property('reviews'))
          .satisfies( overallVar.greaterThanOrEqualTo(intValue(4)) )
        )
    )
    .groupBy( [property("city")] )
    .having( countExpression.greaterThanOrEqualTo(intValue(10)) )
    .orderBy( [Ordering.expression(countExpression).descending()] )
)
  .rows(
      selectExpression(property('country')),
      selectExpression(property('state')),
      selectExpression(property('city')),
      selectExpression(countExpression).as('hotels_qty')
  ); // proxified dictionaries of specified fields; all fields + meta.id by default (i.e.if nothing selected)




//  get all flights departing from Riga airport
const results = await database.setAlias('airline')  /* set alias for join clause */ .fetch(
  query => query
    .join([
        Join.join(DataSource.database(database).as("route"))
        .on(
            Meta.id.from("airline").equalTo(property("airlineid").from("route"))
        )
    ])
    .where(
          property("type").from("route").equalTo(string("route"))
      .and(
          property("type").from("airline").equalTo(string("airline"))
        )
      .and(
          property("sourceairport").from("route").equalTo(string("RIX"))
      )
    )
)
  .json()
  .rows(
      selectExpression(Function.upper( property("name").from("airline") )),
      selectExpression(property("callsign").from("airline")),
      selectExpression(Function.upper( property("destinationairport").from("route") )),
      selectExpression(property("stops").from("route")),
      selectExpression(Function.upper( property("airline").from("route") ))
  );
```


## License


Apache License Version 2.0


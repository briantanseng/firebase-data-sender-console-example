# firebase-data-sender-console-example

This is a simple command line node.js project that posts random data (to simulate an IOT source) to a Firebase Database. 

## Getting Started

### Dependencies

You need node.js in your life to run this project. You can install node via [Node Version Manager](https://github.com/creationix/nvm).

### Install the Project Dependencies Locally

```
$ cd [your-project-folder]
$ npm install
```

### Load Sample Data to Firebase Database

Import the sample data from database-export.json to an empty Firebase Database

### Update the Database URL

Open the configuration file: config.json. Replace this: "https://[firebase-project-id].firebaseio.com/" with the URL of your Firebase Database.

```

{
  "DB_URL" : "https://[firebase-project-id].firebaseio.com/"
}
```

### Running the Application

Run the following command in your project folder to insert random records to your Firebase Database:

```
$ node insertManyRecords.js
```

The app will inform you how many records were generated:

```
$ node insertManyRecords.js
random string = 0er41mu7sr3m
Generating 4 data samples...
Write operation successful to /devices/-KopAx2GW_f-3_kxNlhQ/data/temperature
```

Check your Firebase console to view the newly created records under the path specified above.


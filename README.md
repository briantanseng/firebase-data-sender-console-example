# firebase-data-sender-console-example

This is a simple node.js project that simulates posting of JSON data to Firebase Database. 

### Project dependencies

'''
npm install --save firebase
npm install --save moment
'''

### Install the node modules

```
node install
```

### Setup the private key (downloadable as a JSON file)

 - Download the private key from Firebase Console > Project Settings > Service Accounts > Generate New Private Key
 - Copy the file to this directory
 - Edit the apps to the correct json filename

### Update the database URL

Edit the apps to reference the correct database

E.G. Replace this in your apps: https://[project-name].firebaseio.com/

### Data Structure

Import the sample data from database-export.json to a black database

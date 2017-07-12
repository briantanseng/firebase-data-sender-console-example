var firebase = require('firebase');
var CONFIG = require('./config.json');

firebase.initializeApp({
  serviceAccount: 'serviceAccount',
  databaseURL: CONFIG.DB_URL
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var randomString = Math.random().toString(36).substr(2,14);
console.log("random string = "+randomString);

let sendData = function(data) {
    return new Promise((resolve, reject) => {
        let newData = firebase.database().ref('/devices').push(data);
        if(newData) {
            resolve(newData.key);
        }
        else {
            reject("The write operation failed");
        }
    });

} // sendData()

let device = { "id": randomString, "location": "Manila", "owner": "98Labs" };
sendData(device)
.then( key => console.log("Write operation successful. New device key = "+key))
.catch(error => console.log(error));


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

var randomInt = getRandomIntInclusive(1, 100);
var randomString = Math.random().toString(36).substr(2,14);
console.log("random number = "+randomInt);
console.log("random string = "+randomString);

let sendData = function(msg) {
    return new Promise((resolve, reject) => {
        let newData = firebase.database().ref('/messages').push(msg);
        if(newData) {
            resolve(newData.key);
        }
        else {
            reject("The write operation failed");
        }
    });

} // sendData()

let message = { "id": randomInt, "message": randomString };
sendData(message)
.then(console.log("Write operation successful."))
.catch(error => console.log(error));


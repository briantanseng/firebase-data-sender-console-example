var firebase = require('firebase');
var moment = require('moment');
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

let sendData = function(data, path) {
    return new Promise((resolve, reject) => {
        let newData = firebase.database().ref(path).push(data);
        if(newData) {
            resolve(newData.key);
        }
        else {
            reject("The write operation failed");
        }
    });

} // sendData()

let sampleData = { 
  "date": moment().format(), 
  "value": getRandomIntInclusive(15,35), 
};
let path = "/devices/-KopAx2GW_f-3_kxNlhQ/data/temperature";
sendData(sampleData, path)
.then( () => console.log("Write operation successful to "+path))
.catch(error => console.log(error));


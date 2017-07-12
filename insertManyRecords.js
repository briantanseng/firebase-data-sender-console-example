var firebase = require('firebase');
var moment = require('moment');
var CONFIG = require('./config.json');
var generatePushID = require('./generatePushID');

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

let appendListData = function(values, path) {
    return new Promise((resolve, reject) => {
        let newData = firebase.database().ref(path).update(values);
        if(newData) {
            resolve(newData.key);
        }
        else {
            reject("The write operation failed");
        }
    });

} // sendData()

let generateSample = function() {
    return {
        "date": moment().format(),
        "value": getRandomIntInclusive(15,35),
    }
}

let generateSampleSet = function () {
    let numSamples = getRandomIntInclusive(1,5);
    //let sampleDataSet = [];
    let sampleDataSet = {};
    for(let i = 0; i < numSamples; i++) {
        //sampleDataSet.push(generateSample());
        sampleDataSet[generatePushID()] = generateSample();
    }
    console.log("Generating "+numSamples+" data samples...");
    return sampleDataSet;
}

let path = "/devices/-KopAx2GW_f-3_kxNlhQ/data/temperature";
appendListData(generateSampleSet(), path)
.then( () => console.log("Write operation successful to "+path))
.catch(error => console.log(error));


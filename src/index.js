module.exports = function toReadable (number) {
 let result;
 const toTwenty = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
 const scoresDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

 if (number === 0) {
     return 'zero';
 }
if (number < 20) {
     result = toTwenty[number];
     return result.trim();
 }
 if (number >= 20 && number < 100) {
     result = `${scoresDozens[Math.floor(number/10)]} ${toTwenty[number%10]}`;
     return result.trim();
 }
 if (number >= 100) {
     if ((number%100) < 20) {
        result = `${toTwenty[Math.floor(number/100)]} hundred ${toTwenty[number%100]}`
        return result.trim();
     }
     else {
        result = `${toTwenty[Math.floor(number/100)]} hundred ${scoresDozens[Math.floor((number%100)/10)]} ${toTwenty[number%10]}`
        return result.trim();
     }
 } 
};


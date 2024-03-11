const express = require('express');

const app = express();
app.use(express.static('dist'));   // parcel domyślnie zbuduje nam stronę w katalogu dist
app.use(express.json());

app.listen(3000, () => {

    console.log("Serwer wystartował");
})
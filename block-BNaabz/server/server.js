let PORT = 4000;
let express = require('express');
let mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/', 
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    console.log(err ? err : 'Connected to database');
});

let app = express();

app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});
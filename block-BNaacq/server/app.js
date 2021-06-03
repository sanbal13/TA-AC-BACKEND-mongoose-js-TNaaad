let PORT = 4000;

// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');

// connecting to database
mongoose.connect('mongodb://localhost/blog', 
{ useNewUrlParser: true,  useUnifiedTopology: true},
(err) => {
    console.log(err ? err : 'connection:true');
})

// instantiate the app
let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));

// route
app.get('/', (req, res) => {
    res.send("Welcome");
});

// listen
app.listen(PORT, () => {
    console.log('server is listening on port '+ PORT);
});

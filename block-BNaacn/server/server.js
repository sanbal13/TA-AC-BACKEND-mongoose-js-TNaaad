let PORT = 4000;

// require
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let mongoose = require('mongoose');

// database connection

mongoose.connect('mongodb://localhost/test', 
{ useNewUrlParser: true,  useUnifiedTopology: true},
(err) => {
    console.log(err ? err : 'Conneted to Database');
})

// instantiate the app
let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/users', (req, res) => {
    res.send('Users Page');
});

// handling errors
app.use((req, res, next) => {
    res.statusCode = 404;
    res.send('Page not Found');
});

app.use((err, req, res, next) => {
    res.send(err);
});

// listener
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});



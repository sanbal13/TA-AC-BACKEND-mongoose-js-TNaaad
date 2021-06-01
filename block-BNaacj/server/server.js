let PORT = 4000;

// requires
let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');

// connect to database
mongoose.connect('mongodb://localhost/sample',
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : 'Connected to database');
    }
);

// instantiate the app
let app = express();

// middlewares
app.use(logger('dev'));

// routes
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/users', (req, res) => {
    res.send('Users Page');
});


// listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});
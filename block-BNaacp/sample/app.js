let PORT = 4000;

// require
let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let mongoose = require('mongoose');
let User = require('./models/user');

// database connection
mongoose.connect('mongodb://localhost/sample', { useNewUrlParser: true, useUnifiedTopology: true},
(err) => {
    console.log(err ? err : 'connection: true ');
}); 

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
app.post('/users', (req, res, next) => {
    User.create(req.body, (err, user) => {
        err ? next("Exception Occured") : res.json(/* user.name + " is inserted into the database" +  */user);   
    });
});
app.get('/users', (req, res, next) => {
    User.find({}, (err, allUsers) => {
            err ? next("Exception occured") : res.json(allUsers);
    });
})
app.get('/users/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next('User not present');
        res.json(user);
    });
});

/* 
    find() => returns all the documents satisfying the given condition
    findOne() => returns the first document that satisfies the given condition
    findById() => this function returns the document based on the id, the first argument is just the id, not an object 
*/

app.put('/users/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
        if(err) return next("Invalid user");
        res.json(updatedUser);
    })
});

app.delete('/users/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        err ? next(err) : res.send( deletedUser.name + ' is deleted'); 
    });
});

// error handler
app.use((req, res, next) => {
    res.statusCode = 404;
    res.send('Page not Found');
});

app.use((err, req, res, next) => {
    res.send(err);
});

// listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});
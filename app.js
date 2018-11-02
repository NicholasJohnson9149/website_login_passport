const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
var port = 3000;

// Setup View Engine 
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge:24*60*60*100,
    keys: [keys.session.cookieKey]
}));

// initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// connect to mondgodb 
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log('connected to mondgo db');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.use(express.static(__dirname + '/public'));

// create home route
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

app.listen(port, () => { 
    console.log("App listening on port " + port);
});

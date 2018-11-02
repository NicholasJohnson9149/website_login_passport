const router = require('express').Router();

const authCheck = (req, res, next) => {
   // if user is not login 
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    res.render('profile', {user: req.user});
});

module.exports = router;


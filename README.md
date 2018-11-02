#SinWaves Passport Login 

### This Uses a mondgodb for stroing user credentails
Youw ill need to setup a database on mlab fro local tetsing 
[Link to mlab](https://mlab.com/)
Create an account and setup a database and user for that database 
Add that infromation to a key.js file 

### Google Athentication 
[Google API Console](https://console.cloud.google.com/apis)
Create a new applciation IE - sinewaves-app-login or find Nicholas to get you teh rquired credetails to also add to your key.js file. 

### Create a keys.js 
````
module.exports = {
    google: {
        clientID: "GOOGLE_CLIENT_TOKEN",
        clientSecret: "CLIENT_SECRET_TOKEN"
    },
    mongodb:{
        dbURI: 'MONDGO_DB_URL_FROM_MLABS'
    },
    session:{
        cookieKey:'RANDOM_VALUES_FOR_ENCRYPTION'
    }
};
````

### run the login applciation on it's own 
```` 
npm i 
npm -g i nodemon // if you don't already have it installed 
nodemon app.js 
````


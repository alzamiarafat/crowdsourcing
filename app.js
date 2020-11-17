const express           = require('express');
const expressSession    = require('express-session');
const bodyParser        = require('body-parser');

const login             = require('./controllers/home');
const registration      = require('./controllers/home');


const app               = express();
const port              = process.env.port || 3000;



// configaration
app.set('view engine', 'ejs');

// middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'secrete value', saveUninitialized: true, resave: false }));


app.use('/home', login);
app.use('/home', registration);


app.get('/', (req, res) => {
    res.render('home/welcome');
});

app.listen(port, (err)=>{
    console.log(`Server started at ${port}`);
});
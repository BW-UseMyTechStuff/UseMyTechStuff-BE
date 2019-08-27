const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const SessionStore = require('connect-session-knex')(session);
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const stuffRouter = require('../techstuff/techstuff-router');
const chargeRouter =require('../charge/charge-router');
const keyPublishable = process.env.PUBLISHABLE_KEY;

const server = express();
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
const sessionConfig = {
	name: 'bipolarbearv2',
	secret: 'hey guys im a secret do not tell the others kk?',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 60 * 60 * 1000,
		secure: false,
		httpOnly: true
	},
	store: new SessionStore({
		knex: require('../db/db-config'),
		tablename: 'sessions',
		sidfieldname: 'sid',
		createtable: true,
		clearInterval: 60 * 60 * 1000
	})
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());


//Body parser middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use(express.static(`${__dirname}/public`))



server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/techstuff', stuffRouter);
server.use('api/charge', chargeRouter)
server.get('/', (req, res) => {
	res.json({ api: 'my boy is alive' });
});

module.exports = server;
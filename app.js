// PACKAGES
require('dotenv').config()
const swaggerDoc = require("swagger-ui-express");
const swaggerDocumentation = require("./helpers/documentation")
const createError = require('http-errors');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const ejs = require('ejs');
const cors = require('cors');
const port = process.env.PORT || 8086;
var fs = require('fs')

// CONFIG DATABASE
db.connection(); //dataBase Connection
require('./services/passport')(passport); // pass passport for configuration

// ROUTERS
const {
  IndexRouter,
  MangasRouter
} = require("./routes/main/manager");

// VIEW ENGINE SETUP
const app = express();



//var mbInstance = messagebird(`${process.env.API_KEY}`);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev', { skip: function (req, res) { return res.statusCode == 304 } }));
app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET_KEY_SESSION,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.NODE_ENV === 'production' ? process.env.DATA_BASE_PROD : process.env.DATA_BASE }),
}));
app.use(cors({
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  origin: '*'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// =============================================================================
// BASE ROUTES
// =============================================================================
const { isValidToken, } = require("./middlewares/index");

//app.use('/api/v1/sms', twilioRouter)
//app.use('/api/v1/webhook-ws-service', webhook_messagebirdRouter);
//app.use('/api/v1/payment_plans', payment_plansRouter);
//app.use('/api/v1/transaction', transaction_companiesRouter);
//app.use('/api/v1/wallet', wallet_companiesRouter);
//app.use('/api/v1/vacant', VacantsRouter);
//app.use('/api/v1/dash_talent', isValidToken, DashTalentRouter);
//app.use('/api/v1/positions', PositionsRouter);
//app.use('/api/v1/skills', SkillsRouter);
//app.use('/api/v1/talent', TalentsRouter);
//app.use('/api/v1/company', CompaniesRouter);
//app.use('/api/v1/auth', AuthRouter);
//app.use('/', IndexRouter);
//app.use('/api/v1/category', CategoriesRouter);
app.use("/documentations", swaggerDoc.serve);
app.use("/documentations", swaggerDoc.setup(swaggerDocumentation));
//app.use('/api/v1/interview', InterviewRouter);
//app.use('/api/v1/match', isValidToken, MatchRouter);
//app.use('/api/v1/talents_groups', isValidToken, TalentsGroupsRouter);
//app.use('/api/v1/search', isValidToken, SearchRouter);
//app.use('/api/v1/notifications', isValidToken, NotificationsRouter);
//app.use('/api/v1/preinterview', isValidToken, Preinterview);
//app.use('/api/v1/views', isValidToken, ViewsRouter);
//app.use('/api/v1/admin', AdminRouter)
app.use('/api/v1/mangas', MangasRouter);
app.use('/', IndexRouter);
// =============================================================================
// CATCH 404 AND FORWARD TO ERROR HANDLER
// =============================================================================
app.use(function (req, res, next) {
  console.log("existe un error");
  next(createError(404));
});
// =============================================================================
// ERROR HANDLER
// =============================================================================
app.use(function (err, req, res, next) {
  console.log('handle error...', err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  // res.status(err.status || 500);
  res.json(err)
  // res.render('error/error', {layaout: 'layaouts/blank', error: err});
});

app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode == 304 }
}))

if (process.env.NODE_ENV === 'production') {
  console.log("production enviroment");
  var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  app.use(logger(':date[iso] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms', { stream: accessLogStream, skip: function (req, res) { return res.statusCode == 304 } }))

  global.url = process.env.API_BACKEND; //CHANGE HERE THE URL OF PRODUCTION
} else {
  process.env.NODE_ENV = "development"
  console.log("development enviroment");
  app.use(logger('dev', {
    skip: function (req, res) { return res.statusCode == 304 }
  }))
  global.url = 'http://localhost:' + port + '/';
}

app.listen(port);
console.log(`my backend corriendo :: ${global.url}`);

module.exports = app;
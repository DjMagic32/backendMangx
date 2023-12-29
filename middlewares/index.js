const jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next) {

  if ( req.isAuthenticated() ){

    return next();
  }else{

    return res.redirect('/login');
  }
}
function alreadyLoggedIn(req, res, next) {

  if ( req.isAuthenticated() ){

    return res.redirect('/main');
  }else{

    return next();
  }
}
function isValidToken(req, res, next) {

  let token = req.get("token");
  if (token) {
    
    jwt.verify(token, process.env.SEED, (err, decode) => {
      
      if (err) {            

        return res.status(501).json("Token no valido o expirado");             
      }
      //resolve("algo")
      req.user = {
        email: decode.user,
        tipo : decode.tipo,
        id: decode.id
      }
      next();
  });
  }else{
    
    return res.status(501).json("Token no incluido");
  }
}

module.exports = {
  isLoggedIn,
  alreadyLoggedIn,
  isValidToken
};
  
const entrepreneurship = require('../../controllers/entrepreneurship'); 
// De parte de Eduardo: bro what is this on this comment.

module.exports = {
    IndexRouter                 : require('../index'),
    CompanyRouter               : require('../company'),
    userRouter                  : require('../user'),
    ridersRouter                : require('../riders'),
    entrepreneurshipRouter      : require('../entrepreneurship'),
    carRouter                   : require('../car')
}
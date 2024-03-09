const entrepreneurship = require('../../controllers/entrepreneurship');

module.exports = {
    IndexRouter                 : require('../index'),
    CompanyRouter               : require('../company'),
    userRouter                  : require('../user'),
    ridersRouter                : require('../riders'),
    entrepreneurshipRouter      : require('../entrepreneurship')    
}
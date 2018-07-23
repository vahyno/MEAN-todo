var configValues = require('./config');

module.exports = {
    getDbConectionString : function(){
        //mongodb://<dbuser>:<dbpassword>@ds243441.mlab.com:43441/meannodetodo
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds243441.mlab.com:43441/meannodetodo`;
    }
}

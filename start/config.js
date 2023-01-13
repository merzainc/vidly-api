const config = require('config');

module.exports = function () {
    if (!config.get('MONGO_URI')) {
        throw new Error('mongodb url is not defined');
        process.exit(1);
    }
    if (!config.get('JWT_KEY')) {
        throw new Error('jwt private key is not defined');
        process.exit(1);
    }
}
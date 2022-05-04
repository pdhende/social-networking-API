const { connect, connection } = require('mongoose');

const connectString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
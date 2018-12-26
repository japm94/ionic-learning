const variables = {
    api: {
        port: process.env.port || 3000
    },

    db: {
        connection: process.env.connection || 'mongodb://admin:admin123@127.0.0.1:27017/foodapp'
    }
}

module.exports = variables;
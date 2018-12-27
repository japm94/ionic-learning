const variables = {
    api: {
        port: process.env.port || 3000
    },

    db: {
        connection: process.env.connection || 'mongodb://admin:admin123@127.0.0.1:27017/foodapp'
    },

    security: {
        secretKey: '3bba724f4f3d8d431dfc73700f7e9b04'
    }
}

module.exports = variables;
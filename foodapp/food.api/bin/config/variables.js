const variables = {
    api: {
        port: process.env.port || 3000
    },

    db: {
        connection: process.env.connection || 'mongodb://admin:admin123@ds243084.mlab.com:43084/foodapp'
    }
}

module.exports = variables;
const variables = {
    api: {
        port: process.env.port || 3000
    },

    db: {
        connection: process.env.connection || '<< MONGO URL >>'
    }
}

module.exports = variables;
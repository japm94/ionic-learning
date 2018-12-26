const variables = {
    api: {
        port: process.env.port || 3000
    },

    db: {
        connection: process.env.connection || '<< MONGO URI >>'
    }
}

module.exports = variables;
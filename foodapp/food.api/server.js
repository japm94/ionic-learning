'use strict'

const app = require('../food.api/bin/express');
const variables = require('../food.api/bin/config/variables');

app.listen(variables.api.port, () => {
    console.info(`API Server listening on port ${variables.api.port}`);
});

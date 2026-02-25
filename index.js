const express = require('express');
const app = express();
import "dotenv/config";

// const PORT = 8080;
const PORT = process.env.PORT || 3000;

const { dbConnection } = require('./config/config');
const routes = require('./routes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());

app.use('/', routes);

// Endpoint Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

dbConnection();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
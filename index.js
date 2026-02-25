const express = require('express');
const app = express();

// Cargar variables de entorno (si usas .env)
require('dotenv').config();

const PORT = process.env.PORT || 3000;  // Render usa process.env.PORT (normalmente 10000)

const { dbConnection } = require('./config/config');
const routes = require('./routes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());

app.use('/', routes);

// Endpoint de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

dbConnection();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});
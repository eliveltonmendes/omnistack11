const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * GET: Buscar uma informação no back
 * POST: Criar uma informação no back
 * PUT: alterar uma informação no back
 * DELETE: Deletar uma informação no back
 */

 /**
  * tipo de Parametros:
  * 
  * Query: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  *     /users/:id - Valor nomeado
  * Request Body: 
  */

  /**
   * SQL; MySQL, SQLite, PostgreSQL, OracleSQL, microsft SQL Server
   * NoSQL: mongoDB, MariaDB, CouchDB, etc
   */

/**
 * Driver: Select * from user
 * Query Builder: table('users').select(*).where()
 */

app.listen(3333);
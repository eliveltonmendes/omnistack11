const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Routes for ongs
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Routes for incidents
 */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

/**
 * Routes for profile
 */
routes.get('/profile', ProfileController.index);

/**
 * Routes for Session
 */
routes.post('/sessions', SessionController.create);

module.exports = routes;
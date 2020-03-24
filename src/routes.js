const express = require('express');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');
const routes = express.Router();

//ongs
routes.post('/ongs',ongController.create);
routes.get('/ongs',ongController.index);

//incidents
routes.post('/incidents',incidentController.create);
routes.get('/incidents',incidentController.index);
routes.delete('/incidents/:id',incidentController.index);


//perfil 
routes.get('/profile',profileController.index);

//login
routes.post('/sessions',sessionController.create);

module.exports= routes;
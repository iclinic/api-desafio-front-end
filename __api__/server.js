/**
 * Import Faux-call package
 */
const faux = require('faux-call');

/**
 * Import the Event model
 */
const EventModel = require('./models/Event');

/**
 * Register the Event model
 */
faux.register(EventModel);

/**
 * Start the server on port 9000
 */
faux.start(9000);

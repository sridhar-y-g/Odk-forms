/* ==========================================
   WCB Manitoba Form Generator - Express Server
   ========================================== */

const express = require('express');
const path = require('path');
const datasets = require('./data/datasets');

const app = express();
const port = 8080;

// Configure Pug template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the public directory (css, js, images)
app.use(express.static(path.join(__dirname, 'public')));

// Handle the dashboard request
app.get('/', (req, res) => {
  // Read document type and dataset from query parameters
  const doc = req.query.doc || 'medical';
  const dataset = req.query.dataset || '1';

  // Basic validation for queries
  if (doc !== 'medical' && doc !== 'worker' && doc !== 'criminal') {
    return res.status(400).send('Invalid document type. Use ?doc=medical, ?doc=worker or ?doc=criminal');
  }
  
  if (dataset !== '1' && dataset !== '2') {
    return res.status(400).send('Invalid dataset. Use ?dataset=1 or ?dataset=2');
  }

  // Retrieve the simulated backend record
  const data = datasets[doc][dataset];

  // Render the view, passing active document state, active dataset state, and the payload
  res.render('index', {
    doc,
    dataset,
    data
  });
});

// Start listening for incoming browser requests
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

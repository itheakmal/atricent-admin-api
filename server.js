const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const cors = require('cors');
const routes = require('./Routes/routes');
const db = require('./Models');
require('dotenv').config();

db.sync();
// Configure cors options
const corsOptions = {
    origin: 'https://admin.atricent.com', 
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/v1/', routes);
// Error handling 
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });

// Start the server on port 3000
app.listen(process.env.ATRICENT_PORT, () => {
    console.log(`Server started on port ${process.env.ATRICENT_PORT}`);
});
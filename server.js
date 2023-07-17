const express = require('express');
const app = express();

// Routes
const server = app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('The server is listening on http://localhost:${PORT}'));
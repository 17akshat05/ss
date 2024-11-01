npm init -y
npm install express cors

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let highScores = {};  // Store high scores in memory for simplicity

app.post('/saveScore', (req, res) => {
    const { username, score } = req.body;
    if (!highScores[username] || highScores[username] < score) {
        highScores[username] = score;
    }
    res.json({ message: 'Score saved!', highScore: highScores[username] });
});

app.get('/getScores', (req, res) => {
    res.json(highScores);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

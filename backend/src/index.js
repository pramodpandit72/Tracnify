import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

// Load environment variables
dotenv.config({ path: './env' })

const app = express()

// Basic route
app.get('/', (req, res) => {
    res.send('Server is ready')
})

// Jokes API route
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'A joke', content: 'This is a joke' },
        { id: 2, title: 'Another joke', content: 'This is another joke' },
        { id: 3, title: 'A third joke', content: 'This is third joke' },
        { id: 4, title: 'A fourth joke', content: 'This is a fourth joke' },
        { id: 5, title: 'A fifth joke', content: 'This is a fifth joke' }
    ];
    res.json(jokes)
})

// Connect DB and start server
connectDB()
    .then(() => {
        const port = process.env.PORT || 5000
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err)
    })

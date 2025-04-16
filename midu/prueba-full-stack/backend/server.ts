import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())

app.post('/api/files', async (req, res) => {
    // 1. Extract file from request
    // 2. Validate that file exists
    // 3. Validate file mimetype (CSV)
    // 4. Extract CSV data from buffer to string
    // 5. Convert string to CSV
    // 6. Save JSON to db (or heap)
    // 7. Return 200 with message and JSON
    return res.status(200).json({ data: [], message: 'File uploaded successfully' })
})

app.get('/api/users', async (req, res) => {
    // 1. Extract query param ?q= from req
    // 2. Validate query param exists
    // 3. Filter data with query param
    // 4. Return 200 with query param
    return res.status(200).json({ data: [] })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

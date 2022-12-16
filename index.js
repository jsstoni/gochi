import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static('dist'))

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'dist/index.html'))
})

app.listen(9090, () => {
	console.log('Server start')
})
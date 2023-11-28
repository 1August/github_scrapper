import express from 'express'
import { configApp } from './src/config/configApp.js'
import { PORT } from './src/data/constants.js'
import { setRoutes } from './src/routes/routes.js'

const app = express()

configApp(app)
setRoutes(app)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.error('Server error:', e.message)
        process.exit(1)
    }
}

start()

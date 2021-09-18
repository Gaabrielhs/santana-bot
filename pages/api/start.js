import start from '../../bot/index.js'

export default function handler(req, res) {
    start()
    res.status(200).json({ "message": "Discord server started successfully" })
}
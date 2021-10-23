import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client
    try {
      client = await MongoClient.connect(process.env.MONGO_URI)
    } catch (error) {
      res.status(500).json({ message: 'Failed to connected to database' })
      return
    }

    try {
      const db = client.db()
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Failed to save message to database' })
    }

    client.close()

    res.status(201).json({ message: 'Your message has been sent!', data: newMessage })
  }
}

export default handler

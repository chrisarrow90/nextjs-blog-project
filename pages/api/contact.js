function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    console.log(req.body)

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

    console.log(newMessage)

    res.status(201).json({ message: 'Your message has been sent!', data: newMessage })
  }
}

export default handler

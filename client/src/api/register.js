import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  origin: ['http://localhost:3000', 'https:/achievers-client.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    // Your registration logic here
    res.status(200).json({ message: 'Registration successful' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

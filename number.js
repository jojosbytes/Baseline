export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({ number: 12345 });
  }

  return res.status(200).send("Nothing to see here.");
}

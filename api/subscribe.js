export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [3], 
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo error:", errorData);
      throw new Error(errorData.message || "Brevo API request failed");
    }

    return res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ message: "Subscription failed." });
  }
}
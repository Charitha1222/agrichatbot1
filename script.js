const axios = require('axios');

const endpoint = "https://charitha6882.openai.azure.com/";
const apiKey = "8JZI0aUCMtekF2E1EPLdcyJJMeblS8IdkH8PWCtIC3z0E6YnPfAaJQQJ99BCAC77bzfXJ3w3AAABACOGzdyX"; // Replace with the regenerated API key
const deploymentId = "gpt-4"; // Change based on your model deployment

async function getChatResponse(prompt) {
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=2023-03-15-preview`;

    const headers = {
        "Content-Type": "application/json",
        "api-key": apiKey
    };

    const data = {
        messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
        max_tokens: 100
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log("Response:", response.data.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

// Example usage
getChatResponse("Hello, how are you?");

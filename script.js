export async function apiRequest(URL, method = "GET", data = null) {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (data && method !== "GET") {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(URL, options);

        if (!response.ok) {
            throw new Error(`Request failed. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
}
// services/userService.js
export const getAllUsers = async () => {
    const response = await fetch("http://localhost:8080/api/users/getall");

    if (!response.ok) {
        throw new Error("Fetch failed");
    }

    return await response.json();
};
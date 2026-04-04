const getData = document.getElementById("get-data-button");
const userList = document.getElementById("userList");
const submit_user = document.getElementById("submit_user");

async function createUser() {
    try {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:8080/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password })
        });

        if (!response.ok) {
            throw new Error(`Failed to create user. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("User created:", data);

        document.getElementById("name").value = "";
        document.getElementById("password").value = "";

        await fetchData();

    } catch (error) {
        console.error("Error:", error);
    }
}

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8080/getallusers");

        if (!response.ok) {
            throw new Error(`Error to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        let items = "";

        data.forEach(element => {
            items += `<li>${element.name} - ${element.password}</li>`;
        });

        userList.innerHTML = items;

        console.log(data);

    } catch (error) {
        console.error("Can't fetch the data", error);
    }
}

getData.addEventListener("click", fetchData);
submit_user.addEventListener("click", createUser);
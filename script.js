const getData = document.getElementById("get-data-button");
const submitUser = document.getElementById("submit_user");
const tableRow = document.getElementById("table_row");

async function createUser() {
    try {
        const nameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");

        const name = nameInput.value.trim();
        const password = passwordInput.value.trim();

        if (name === "" || password === "") {
            alert("Name and password are required");
            return;
        }

        const response = await fetch("http://localhost:8080/adduser", {
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

        nameInput.value = "";
        passwordInput.value = "";

        await fetchData();

    } catch (error) {
        console.error("Error while creating user:", error);
    }
}

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8080/getallusers");

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        tableRow.innerHTML = "";

        data.forEach(user => {
            const tr = document.createElement("tr");

            const nameTd = document.createElement("td");
            nameTd.textContent = user.name;

            const passwordTd = document.createElement("td");
            passwordTd.textContent = user.password;

            tr.appendChild(nameTd);
            tr.appendChild(passwordTd);

            tableRow.appendChild(tr);
        });

        console.log("Fetched users:", data);

    } catch (error) {
        console.error("Can't fetch the data:", error);
    }
}



getData.addEventListener("click", fetchData);
submitUser.addEventListener("click", createUser);
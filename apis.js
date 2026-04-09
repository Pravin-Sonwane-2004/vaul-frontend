import { apiRequest } from "./script.js";

const getData = document.getElementById("get-data-button");
const submitUser = document.getElementById("submit_user");
const tableRow = document.getElementById("table_row");

submitUser.addEventListener("click", handleCreateUser);
getData.addEventListener("click", fetchData);

async function handleCreateUser() {
    try {
        const nameInput = document.getElementById("name");
        const passwordInput = document.getElementById("password");
        const emailInput = document.getElementById("email"); // only if you have email input

        const name = nameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput ? emailInput.value.trim() : "";

        if (name === "" || password === "") {
            alert("Name and password are required");
            return;
        }

        const userData = {
            name: name,
            password: password,
            email: email
        };

        const result = await apiRequest(
            "http://localhost:8080/api/users/add",
            "POST",
            userData
        );

            console.log("User created:", result);

        nameInput.value = "";
        passwordInput.value = "";
        if (emailInput) emailInput.value = "";

        await fetchData();

    } catch (error) {
        console.error("Error while creating user:", error);
    }
}

async function fetchData() {
    try {
        const data = await apiRequest(
            "http://localhost:8080/api/users/getall",
            "GET"
        );

        tableRow.innerHTML = "";

        data.forEach((user) => {
            const tr = document.createElement("tr");

            const nameTd = document.createElement("td");
            nameTd.textContent = user.name;

            const emailTd = document.createElement("td");
            emailTd.textContent = user.email;

            const passwordTd = document.createElement("td");
            passwordTd.textContent = user.password;

            tr.appendChild(nameTd);
            tr.appendChild(emailTd);
            tr.appendChild(passwordTd);

            tableRow.appendChild(tr);
        });

        console.log("Fetched users:", data);

    } catch (error) {
        console.error("Can't fetch the data:", error);
    }
}
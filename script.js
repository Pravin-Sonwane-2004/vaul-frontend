const getData = document.getElementById("get-data-button");
const userList = document.getElementById("userList");

//this is for post request
const name = document.getElementById("name").value;

http://localhost:8080/add

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8080/getallusers");

        if (!response.ok) {
            throw new Error(`Error to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        let items = "";

        data.forEach(element => {
            items += `<li>${element.name}</li>`;
        });

        userList.innerHTML = items;

        console.log(data);

    } catch (error) {
        console.error("Can't fetch the data", error);
    }
}

getData.addEventListener("click", fetchData);
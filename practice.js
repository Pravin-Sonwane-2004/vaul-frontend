// const employee = {
//     id : 1,
//     name : "Pravin",
//     email : "Pravinson222@gmail.com",
//     address : {
//         village : "sadegaon",
//             pin: 411001
//     }
// };
// console.log(employee);

// const user = [
//     { name: "Pravin", age: 22 },
//     { name: "Pravin", age: 22 },
//     { name: "Pravin", age: 22 },
//     { name: "Pravin", age: 35 }

// ]

//this is object destructing

// const num = {e,age} = user[0];
// console.log(`${e}   ${age}`);


// user.forEach()
// user.forEach((users) => console.log(users.name));

// const users = [
//   { id: 1, name: "Pravin", city: "Pune" },
//   { id: 2, name: "Rahul", city: "Mumbai" }
// ];

// const newUser = { id: 3, name: "Aman", city: "Delhi" };

// const allUsers = [...users, newUser];

// allUsers.forEach(({ id, name, city }) => {
//   console.log(`User ${id}: ${name} lives in ${city}`);
// });

// users.forEach(({id, name, city}) => {
//       console.log(`User ${id}: ${name} lives in ${city}`);
// });

// console.log("Start");

// setTimeout(() => {
//     for(let i =0;i<555;i++) {
//         console.log(i);
//     }
// },1000);

// console.log("End");

// async function getActiveUserNames() {
//   try {
//     const response = await fetch("http://localhost:8080/users");

//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const users = await response.json();

//     const activeNames = users
//       .filter(user => user.active)
//       .map(user => user.name);

//     console.log(activeNames);
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//   }
// }
// getActiveUserNames();
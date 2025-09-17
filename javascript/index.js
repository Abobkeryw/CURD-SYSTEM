let username = document.getElementById("name");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let gmail = document.getElementById("gmail");
let allUsers = [];

function addUser() {
    if (username.value === "" || gmail.value === "" || phone.value === "" || address.value === "") {
        alert("Please fill all the fields");
        return;
    } else {
        let user = {
            name: username.value,
            phone: phone.value,
            gmail: gmail.value,
            address: address.value
        };
        allUsers.push(user);
        alert("User added successfully");
        console.clear();
        console.log(allUsers);
        displayTable();
        clearFields();
    }
}

function displayTable() {
    let table = "";
    for (let i = 0; i < allUsers.length; i++) {
        table += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${allUsers[i].name}</td>
                <td>${allUsers[i].gmail}</td>
                <td>${allUsers[i].address}</td>
                <td>${allUsers[i].phone}</td>
                <td>
                    <button onclick="deleteUser(${i})" class="btn btn-danger">Delete</button>
                    <button onclick="editUser(${i})" class="btn btn-warning">Edit</button>
                </td>
            </tr>`;
    }
    document.getElementById("tableBody").innerHTML = table;
}

function clearFields() {
    username.value = "";
    phone.value = "";
    address.value = "";
    gmail.value = "";
}

function deleteUser(index) {
    allUsers.splice(index, 1);
    console.clear();
    console.log(allUsers);
    addToTable(); // refresh table after deletion
}
function editUser(index) {
    username.value = allUsers[index].name;
    phone.value = allUsers[index].phone;
    address.value = allUsers[index].address;
    gmail.value = allUsers[index].gmail;
    allUsers.splice(index, 1);
    displayTable(); // refresh table after editing
}
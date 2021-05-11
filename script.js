let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let userAge = document.querySelector("#age");
let currentLevel = document.querySelector("#currentlevel");
let faveClub = document.querySelector("#favouriteclub");
let userSubmit = document.querySelector("#submit");
let table = document.querySelector(".table");
let tableData = document.querySelector("#tableData");

let objectArray = [];



userSubmit.addEventListener('click', onClick);
tableData.addEventListener('click', deleteRow);

function onClick(event) {
    event.preventDefault();
    createObjectAndPushToArray();
    putObjectInTable(objectArray);
}

function createObjectAndPushToArray() {

    let object = {
        first_Name: firstname.value,
        last_Name: lastname.value,
        user_age: age.value,
        current_level: currentlevel.value,
        fave_club: favouriteclub.value
    }
    let jsonObject = JSON.stringify(object);
    objectArray.push(jsonObject);

}

function putObjectInTable(myArray) {
    let position = "beforeEnd";
    let row;
    myArray.forEach((value) => {
        let newValue = JSON.parse(value);
        row = `<tr>
                   <td>${newValue.first_Name}</td>
                   <td>${newValue.last_Name}</td>
                   <td>${newValue.user_age}</td>
                   <td>${newValue.current_level}</td>
                   <td>${newValue.fave_club}</td>
                   <td><button class="delete-row">Delete User</button></td>
               </tr>`;

    })
    return tableData.insertAdjacentHTML(position, row);

}


function deleteRow(event) {
    if (event.target.classList.contains("delete-row")) {
        event.target.closest("tr").remove();
    }
}
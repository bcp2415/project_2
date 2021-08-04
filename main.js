var total = 0;
var date = document.querySelector('#date');
var description = document.querySelector('#description');
var amount = document.querySelector('#amount');
var table = document.querySelector('#table');
var data = document.querySelector('#data');
var wrapper = document.querySelector('#wrapper');
var totalExp = document.querySelector('#totalExp');
var buttonCount = 0;

function init() {

    // Initialize all 3 input fields by clearing them and placing focus in date:
    date.value = "";
    description.value = "";
    amount.value = 0;
    date.focus();

    // Add event listener to 'Add Expense' button
    document.querySelector('#add').addEventListener('click', function() {
        addNewExpense(date, description, amount);
    });

};

// Add new Expense
function addNewExpense(date, description, amount) {

    // Read values of 3 inputs:
    var newDate = date.value;
    var newDescription = description.value;
    var newAmount = Number(amount.value);

    // Increment counter to create unique ID for delete button:
    buttonCount++;
    var newID = `button${buttonCount}`;
    var newEntry = `amount${buttonCount}`;

    // Write to table
    data.insertAdjacentHTML('afterend', `<tr>
    <td>${newDate}</td>
    <td>${newDescription}</td>
    <td id = "${newEntry}">${newAmount}</td>
    <td><button id = "${newID}"
        >x</button></td>
    </tr>`);

    // Add event listener to delete button
    document.querySelector(`#${newID}`).addEventListener('click', function() {

        // Recalculate and adjust total expenses:
        total = total - newAmount;

        // Write new total expense amount:
        totalExp.innerHTML = `${total.toFixed(2)}`;

        // Remove tr element:
        document.querySelector(`#${newID}`).closest('tr').remove();
    });

    // Calculate total expenses
    total = total + newAmount;


    // Write total:
    totalExp.innerHTML = `${total.toFixed(2)}`;

    // Clear input fields
    date.value = "";
    description.value = "";
    amount.value = 0;

    // Put focus back in date fields
    date.focus();

};

init();
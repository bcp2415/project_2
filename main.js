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

    // Write to table
    data.insertAdjacentHTML('afterend', `<tr>
    <td>${newDate}</td>
    <td>${newDescription}</td>
    <td>${newAmount}</td>
    <td><button id = button${buttonCount}
        >x</button></td>
    </tr>`);

    // Add event listener to delete button
    document.querySelector(`#button${buttonCount}`).addEventListener('click', function(buttonCount) {
        console.log('Delete row function called.');

        // Remove tr element:
        document.querySelector(`#button${buttonCount}`).parentElement.parentElement.remove();

        // Recalculate and adjust total expenses:

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
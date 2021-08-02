var total = 0;
var date = document.querySelector('#date');
var description = document.querySelector('#description');
var amount = document.querySelector('#amount');
var table = document.querySelector('#table');
var wrapper = document.querySelector('#wrapper');
var totalExp = document.querySelector('#totalExp');

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

    // Create headings and basic structure for table:
    table.insertAdjacentHTML('afterbegin', '<tr><td>Date</td><td>Description</td><td>Amount</td></tr>');

    // Print total expenses so far:
    totalExp.innerHTML = `Total Expenses:  ${total.toFixed(2)}`;
};

// Add new Expense
function addNewExpense(date, description, amount) {

    // Read values of 3 inputs:
    var newDate = date.value;
    var newDescription = description.value;
    var newAmount = Number(amount.value);

    // Write to table
    table.insertAdjacentHTML('beforeend', `<tr>
    <td>${newDate}</td>
    <td>${newDescription}</td>
    <td>${newAmount}</td>
    </tr>`);

    // Calculate total expenses
    total = total + newAmount;


    // Write total above table:
    totalExp.innerHTML = `Total Expenses:  ${total.toFixed(2)}`;

    // Clear input fields
    date.value = "";
    description.value = "";
    amount.value = 0;

    // Put focus back in date fields
    date.focus();

};

init();
function init() {
  var date = document.querySelector('#date');
  var description = document.querySelector('#description');
  var amount = document.querySelector('#amount');
  var table = document.querySelector('#table');

  // Initialize all 3 input fields by clearing them and placing focus in date:
  date.value = "";
  description.value = "";
  amount.value = "";
  date.focus();

  // Add event listener to 'Add Expense' button
  document.querySelector('#add').addEventListener('click', function() {
    addNewExpense(date, description, amount);
  });

  // Create headings and basic structure for table:
  table.insertAdjacentHTML('afterbegin', '<tr><td>Date</td><td>Description</td><td>Amount</td></tr>');
};

// Add new Expense
function addNewExpense(date, description, amount) {
  console.log('New expense added.');

  // Read values of 3 inputs:
  var newDate = date.value;
  var newDescription = description.value;
  var newAmount = amount.value;

  // Write to table
  table.insertAdjacentHTML('beforeend', `<tr>
    <td>${newDate}</td>
    <td>${newDescription}</td>
    <td>${newAmount}</td>
    </tr>`);

  // Clear input fields
  date.value = "";
  description.value = "";
  amount.value = "";

  // Put focus back in date fields
  date.focus();

  // Calculate total expenses

  // Write total at bottom of table

};

init();

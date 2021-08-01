function init() {
  var date = document.querySelector('#date');
  var description = document.querySelector('#description');
  var amount = document.querySelector('#amount');
  var table = document.querySelector('#table');

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
    var totalExp = 0;
    var totalExp = totalExp + newAmount;


    // Write total at bottom of table
    table.insertAdjacentHTML('beforeend', `<tr>
      <td></td>
      <td>Total:</td>
      <td>${totalExp}</td>
      </tr>`);

  // Clear input fields
  date.value = "";
  description.value = "";
  amount.value = "";

  // Put focus back in date fields
  date.focus();

};

init();

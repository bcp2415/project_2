
document.getElementById('description').focus();


function init() {
  var date = document.querySelector('#date');
  var description = document.querySelector('#description');
  var amount = document.querySelector('#amount');
  var table = document.querySelector('#table');

  // Initialize all 3 input fields by clearing them and placing focus in date:
  // not working:
  date.value = "";
  description.value = "";
  amount.value = "";
  date.focus();

  // Add event listener to 'Add Expense' button
  document.querySelector('#add').addEventListener('click', function() {
    addNewExpense(date, description, amount);
  });
};


// function for adding new Expense
function addNewExpense(date, description, amount) {
  console.log('New expense added.')
};

init();

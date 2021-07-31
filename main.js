function init() {
  var date = document.querySelector('#date');
  var description = document.querySelector('#description');
  var amount = document.querySelector('#amount');
  var table = document.querySelector('#table');
  date.focus();
};

// Add event listener to 'Add Expense' button
document.querySelector('#add').addEventListener('click', function() {
  AddnewExpense(date, description, amount);
});

// function for adding new Expense
function(date, description, amount) {

};

const balance = function(x) {
  let current = 5000;

  function updateBalance(){
    const inputText = `What would you like to do?
      D - Deposit
      W - Withdrawal
      B - Check your Balance
      Q - Quit`;
    const userInput = prompt(inputText).toLowerCase().trim();
    let quit = false;


    // DEPOSITS
      function makeDeposit() {
        money = prompt('Enter deposit amount:');
        amount = Number(money);
        x = current + amount;
    // is it a number?
      if (isNaN(amount)) {
        alert('Please enter numbers only.');
      } else {
    // > $50,000 in one day?
      if (current + amount > 55000) {
    // Answer: NO
      x = current;
        alert('You cannot deposit more than $50,000 in one day. Please try again with a smaller amount.');
      } else {
        alert(`$${amount} has been deposited into your account. Your new balance is $${x}.`);}
      current = x;
        return x;
        }
    }

    // WITHDRAWALS
      function makeWithdrawal() {
        money = prompt('Enter withdrawal amount:');
        amount = Number(money);
      x = current - amount;
    // is it a number?
      if (isNaN(amount)) {
        alert('Please enter numbers only.');
      } else {
    // overdrawn, do not continue
      if (current - amount < 0) {
          alert('You do not have enough money to withdraw this. Please try again.');
    // if < $300 warning
      } else if (current - amount < 300) {
        let inpU = prompt('This will put your balance below $300. Do you want to proceed? Type "yes" to continue, or "no" to cancel.');
        let uRes = inpU.toLowerCase().trim();
    // confirm Withdrawal
      if (uRes === 'yes') {
          alert(`$${amount} has been withdrawn from your account. Your new balance is $${x}.`);
          current = x;
      } else if (uRes === 'no') {
          alert(`Withdrawal canceled. Current balance: $${current}.`)
      } else {
          alert(`Response unclear. Action canceled. Current Balance: $${current}`)
        }
      } else {
          alert(`$${amount} has been withdrawn from your account. Your new balance is $${x}.`);
          current = x;}
      }

      return x;
    }

  // QUIT
    function quitApplication(){
      alert('Goodbye!');
    };
    switch (userInput) {
      case 'd':
        makeDeposit();
        updateBalance();
        break;
      case 'w':
        makeWithdrawal();
        updateBalance();
        break;
      case 'b':
        alert(`Current Balance: $${current}.`)
        updateBalance();
        break;
      case 'q':
        quitApplication();
        break;
      default:
        alert("Command not recognized. Please try again.");
        updateBalance();
    }
  }

  updateBalance();
  return x;
};

balance();

// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get Deposit Amount
    const depositInput = document.getElementById('deiposit-input');
    const depositAmonunt = depositInput.value;

    // Current Deposit Amount
    const totalDeposit = document.getElementById('deposit-total');
    const PriviousDepositAmount = (totalDeposit.innerText);


    //  Update Deposit total Amount
    const updatedDepositAmount = parseFloat(PriviousDepositAmount) + parseFloat(depositAmonunt);
    totalDeposit.innerText = updatedDepositAmount;

    // Clear the deposit input field
    depositInput.value = '';



    // Update Acount tatal balance

    const balanceTotal = document.getElementById('total-balance');
    const priviousbalanceTotal = parseFloat(balanceTotal.innerText)
    const newBalanceTotal = priviousbalanceTotal + parseFloat(depositAmonunt);
    balanceTotal.innerText = newBalanceTotal;



})



// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // Get Withdraw Balance
    const withdrawInput = document.getElementById('witdraw-input');
    const withdrawAmount = withdrawInput.value;

    // Set Withdraw total

    const withdrawTotal = document.getElementById('withdraw-toltal');
    const priviousWithdrawTotal = withdrawTotal.innerText;

    const newWithdrawAmount = parseFloat(priviousWithdrawTotal) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdrawAmount;


    // Clear the deposit input field
    withdrawInput.value = '';



    // Update Acount tatal balance
    const balanceTotal = document.getElementById('total-balance');
    const priviousbalanceTotal = parseFloat(balanceTotal.innerText)
    const newBalanceTotal = priviousbalanceTotal - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalanceTotal;

})
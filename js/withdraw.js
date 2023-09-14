// step:1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const withdrawElementString = withdrawField.value;
    const newWithdrawElement = parseFloat(withdrawElementString);
    
    // step:2

    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const previousWithdrawaAmount = parseFloat(previousWithdrawAmountString);
    
     // step:3
     const currentWithdrawTotal = previousWithdrawaAmount + newWithdrawElement;

     withdrawAmount.innerText = currentWithdrawTotal;

    //  step:4
    const balanceAmount = document.getElementById('btn-balance');
    const previousBalanceAmountString = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
    //  step:5
    const currentBalance = previousBalanceAmount - currentWithdrawTotal;
     balanceAmount.innerText = currentBalance;


    //  step:6
    withdrawField.value = '';
     
})
document.getElementById('Deposit-btn').addEventListener('click',function(){
    // step-1:deposit button
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step:2(previous deposit)
    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositTotalString=depositAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    depositAmount.innerText = newDepositAmountString;
    // step:3
 const currentDepositTotal =  previousDepositTotal + newDepositAmount ;
 console.log(currentDepositTotal);
 depositAmount.innerText=currentDepositTotal;

//  step:4-balance total
const balanceElement = document.getElementById('btn-balance');
const previousBalanceAmountString = balanceElement.innerText;
const previousBalanceAmount = parseFloat(previousBalanceAmountString);
 const newBalanceAmount = previousBalanceAmount + newDepositAmount; 
 balanceElement.innerText = newBalanceAmount;



    // step-7:
    depositField.value='';
   
})
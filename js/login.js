document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('clicked');
    const emailField = document.getElementById('user-email');
const email = emailField.value ;

const passField = document.getElementById('user-pass');
const password = passField.value;
console.log(email,password);
if(email==='tanjum@gmail.com' && password==='hasan'){
    window.location.href = 'Bank.html';
}
else{
    alert('incorrect password');
}

})

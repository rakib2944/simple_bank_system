document.getElementById('login-btn').addEventListener('click', function () {

    // Get user email 
    const emailFiled = document.getElementById('email-filed');
    const userEmail = emailFiled.value;

    // Get user password
    const passFaied = document.getElementById('pass-filed');
    const userPass = passFaied.value

    if (userEmail == 'mdrakib5561@gmail.com' && userPass == 'rakib5561') {

        // console.log("valied user");

        window.location.href = 'banking.html'

    }

})

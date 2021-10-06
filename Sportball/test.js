const fetch = require('node-fetch');

function checkResult(res){
    if (res.ok){
        return 'The result was OK';
    }else {
        console.log(res)
        return 'The result was FAILUR';
    }
}

async function testConnect() {
    //tests the home page
    let getHomePage = await fetch('http://localhost:3000', {method: 'GET'});
    console.log('Tests the home page with GET method. ' + checkResult(getHomePage));

    //tests the signup
    let random_username = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    const bodySignUp = {username: random_username, email: random_username + "@gmail.com", password: "123456"};

    let signup = await fetch('http://localhost:3000/api/auth/onSignUp', {
        method: 'POST', body: JSON.stringify(bodySignUp), headers: {
            "Content-Type": "application/json",
        }
    })
    console.log('Tests the sign up page with POST method and random user. ' + checkResult(signup));
    console.log('The user ' + random_username + ' has been created successfully')

    //tests the signin
    const bodySignIn = {
        email: random_username + "@gmail.com",
        password: "123456",
        flag: "false",
        defult1: "",
        defult2: ""
    };
    let signIn = await fetch('http://localhost:3000/api/auth/onSignIn', {
        method: 'POST', body: JSON.stringify(bodySignIn), headers: {
            "Content-Type": "application/json",
        }
    })
    console.log('Tests the sign in page with POST method. ' + checkResult(signIn));
}
testConnect().then(res =>{});

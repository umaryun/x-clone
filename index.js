//const createAccountBtn = document.getElementById("create-account-btn");
const signInFirstPage = document.getElementById("sign-in");
const signInBtn = document.getElementById("sign-in-btn");
const signInAccountBtnNext = document.getElementById("sign-in-account-btn-next");
const mainPage = document.getElementById("main-page");
const signInExit = document.getElementById("sign-in-exit");
const signInPasswordPage = document.getElementById("sign-in-password");
const signInExitNext = document.getElementById("sign-in-exit-next");
const signInUsernameNext = document.getElementById("sign-in-username-next"); 
const logInBtn = document.getElementById("create-account-btn-next-password");
let username = "";



function createGrayBackground() {
    let grayBackGround = document.createElement("div");
    grayBackGround.style.position = "fixed";
    grayBackGround.style.top = '0';
    grayBackGround.style.left = '0';
    grayBackGround.style.width = '100%';
    grayBackGround.style.height = '100%';
    grayBackGround.style.backgroundColor = "hsla(0, 6%, 80%, 0.342)";
    grayBackGround.style.zIndex = "-1"
    document.body.appendChild(grayBackGround);
}





signInExit.addEventListener("click", function () {
    signInFirstPage.style.display = "none";
    mainPage.style.zIndex = "0";
})
signInExitNext.addEventListener("click", function () {
    signInPasswordPage.style.display = "none";
    mainPage.style.zIndex = "0";
})

// signInFirstPage.addEventListener("click", function () {
//     console.log("sign in page clicked");
// })
signInBtn.addEventListener("click", function () {
    console.log("sign in button clicked");
    signInFirstPage.style.display = "block";
    mainPage.style.zIndex = "-1";
    createGrayBackground();
})

signInAccountBtnNext.addEventListener('click', function () {
    const signInUsername = document.getElementById("sign-in-username").value;
    if (!signInUsername) {
        //console.log("please input a username");
    } else {
        username = signInUsername;
       // console.log(username);
        signInUsernameNext.value = username;
        signInFirstPage.style.display = "none";
        signInPasswordPage.style.display = "block";
    }
})

// export const user = {
//     name : username
// }

logInBtn.addEventListener("click", function () {
    const signInPassword = document.getElementById("sign-in-password-login").value;
    if (!signInPassword) {
        console.error("please input your password");
    }
    else {
        // const profileName = document.getElementById("profile-details-name");
        // const profileUserName = document.getElementById("profile-details-username");
         window.location.href = "./home/home.html";
        // profileName.textContent = username;
        // profileUserName.textContent = `@${username}`;
        //export user = username;
    }
    
})


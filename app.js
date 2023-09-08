const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

function onLoinSumbit(tomato){
    tomato.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoinSumbit);


const link = document.querySelector("a");
link.addEventListener("click", handleLinkClick);
function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    alert("click");
}



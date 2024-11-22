/**
function welcome(user, message){
    alert(`Hello ${user}, ${message}`);
}

welcome('Aditi', 'Good Morning') */


function welcome(user = "Aditi", message = 'Godday'){
    alert(`Hello ${user}, ${message}`);
}

welcome();
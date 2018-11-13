function saveUser(){
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var tel = document.getElementById('tel').value;

    var user = {
        name,
        lastname,
        tel
    };
    if(validateUser(user)){
        console.log('User saved');
    }
    else{
        console.log('Invalid data')
    }
}

function validateUser(user){
    if(user.name!='' & user.lastname!=''){
        return true;
    }
}

function bindEvents(){
    document.getElementById('savebutton').addEventListener('click', registerButtonHandler);
}

function registerButtonHandler(element){
    saveUser();
}

bindEvents();
/**
 * Add an user to localStorage
 */
function saveUser() {
    const user = userData();
    if (user.name.length > 0
        && user.las_name.length > 0
        && user.tel.length > 0) {
        insertToTable('users', user);
    }
}

function deleteUser(){
    let users = getTableData('users');
    users.forEach(element => {
        console.log(element);
        console.log(users.length)
        if(users.length == element.id){
            deleteFromTable('users', element.id)
        }
    });
}

/**
 * bindEvents of the document
 */
function bindEvents() {
    jQuery('#savebutton').bind('click', (element) => {
        saveUser();
    });
    jQuery('#delete').bind('click', (element) => {
        deleteUser();
    })
}

/**
 * bindEvents called at final
 */
bindEvents();
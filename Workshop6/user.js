/**
 * User object
 */
function userData() {
    let name = $.trim($('#name').val());
    let las_name = $.trim($('#lastname').val());
    let tel = $.trim($('#tel').val());
    let user = {
        name,
        las_name,
        tel
    }
    return user;
}
$(document).ready( function () {
    
} );

function SignIn() {
    var username = $("#username").val();
    var password = $("#password").val();

    if (username == 'OKIEFAUZI' && password == 'OKIEFAUZI') {
        window.location.href = 'index.html';
    } else if (username == '' && password == '') {
        $('#password-alert').text("Mohon isi username dan password");
        $('#password-alert').css("display", "inline");
    } else {
        $('#password-alert').text("Username dan password yang anda masukan salah!");
        $('#password-alert').css("display", "inline");
    }
}
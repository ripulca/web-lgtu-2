$(function () {
    $('.sign_in').click(function () {
        $('.dark_background').addClass(' open');
        $('.enter').addClass(' open');
    })

    $('.sign_up').click(function () {
        $('.dark_background').addClass(' open');
        $('.registration').addClass(' open');
    })

    $('.modal_win_close_btn').click(function () {
        $('.dark_background').removeClass(' open');
        if($('.enter').hasClass('open')){ 
            $('.enter').removeClass(' open');
        }
        if($('.registration').hasClass('open')){ 
            $('.registration').removeClass(' open');
        }
      });
});

$('.dark_background').mouseup(function (e) {
    let modal_win = $(".modal_win");
    if (!modal_win.is(e.target) && modal_win.has(e.target).length === 0) {
        $('.dark_background').removeClass(' open');
        if($('.enter').hasClass('open')){ 
            $('.enter').removeClass(' open');
        }
        if($('.registration').hasClass('open')){ 
            $('.registration').removeClass(' open');
        }
    }
  });

function login_validation(login){
    var loginformat = /^[A-Za-z]+$/;
    if(login.value.match(loginformat)){
        return true;
    }
    else{
        alert('Login must have alphabet characters only');
        login.focus();
        return false;
    }
}

function pwd_validation(pwd, min, max){
    var pwd_len = pwd.value.length;
    if (pwd_len == 0 ||pwd_len>= min || pwd_len<max){
        alert("Password should not be empty / length be between "+min+" to "+max);
        pwd_len.focus();
        return false;
    }
    return true;
}

function email_validation(email){
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(email.value.match(mailformat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function phone_validation(phone){
    var phoneformat= /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if(phone.value.match(phoneformat)){
        return true;
    }
    else{
        alert('Phone is not correct!');
        phone.focus();
        return false;
    }
}

function formValidation(){
    var login = document.registration.login;
    var pwd = document.registration.passid;
    var email = document.registration.email;
    var phone = document.registration.phone;
    if(login_validation(login)){
        if(email_validation(email)){
            if(phone_validation(phone)){
                if(pwd_validation(pwd)){
                    console.log('ok');
                }
            }
        }
    }
}
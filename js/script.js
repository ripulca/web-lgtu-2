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
        if($('.enter').contains('open')){ 
            $('.enter').removeClass(' open');
        }
        if($('.registration').contains('open')){ 
            $('.registration').removeClass(' open');
        }
      });
});


//ハンバーガーメニュー
$(function() {
    $('.menu-icon').on('click', function() {
        $('.header-right').toggleClass('is-active');
    });
}());
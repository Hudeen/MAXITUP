document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.sub-menu').classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
});

$(".card__item").on('click', function () {
    $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass('model-open');
});
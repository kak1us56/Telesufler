$('.go-to').click(function() {
    event.preventDefault();
    const link = this;
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link.hash).offset().top
    }, 80000);
});
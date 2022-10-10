const submit = document.querySelector('#submit');
const textarea = document.querySelector('#textarea');
const text = document.querySelector('#text');
const speed = document.querySelector('#speed');
const fullscreen = document.querySelector('#btnFullscreen');
const fontsize = document.querySelector('#fontsize');
const assign = document.querySelector('#assign');

submit.addEventListener('click', () => {
    const textareaValue = textarea.value;
    if (textareaValue.length > 0) {
        textarea.value = '';
        document.getElementsByClassName('page1')[0].style = "display: none";
        document.getElementsByClassName('page2')[0].style = "display: block";
        document.getElementsByClassName('body')[0].style = "background: #000";
        text.innerHTML = textareaValue;
    } else {
        alert('No text to prompt!');
    }
})

fullscreen.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
})

assign.addEventListener('click', () => {
    const fontsizeValue = fontsize.value;
    if (fontsizeValue > 0) {
        document.getElementsByClassName('text')[0].style = `font-size: ${fontsizeValue}px;`
    } else {
        alert('Введите натуральное число!');
    }
})

$('.go-up').click(function() {
    event.preventDefault();
    const link = this;
    $([document.documentElement, document.body]).animate({
        scrollTop: $(link.hash).offset().top
    }, 2000);
});


$('.go-to').on('click', function() {
    event.preventDefault();
    const speedValue = speed.value;
    if (speedValue > 0) {
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: speedValue * 1000,
            easing: "linear"
        });
    } else {
        event.preventDefault();
        alert('Введите натуральное число!');
    }
});
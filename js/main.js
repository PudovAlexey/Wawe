function scrollMenu() {
    let menu = document.querySelector('.menu');
    window.addEventListener('scroll', () => {
        if (pageYOffset >= document.documentElement.clientHeight) {
            menu.style['background-color'] = '#00B2A0'
            menu.style['height'] = '50px'
        } else {
            menu.style['background-color'] = 'transparent'
            menu.style['height'] = '104px'
        }
    });
}

scrollMenu();

function showMore() {
    let allPictures = document.querySelector('.galery__items').children
    let btn = document.querySelector('.galery__items-link');
    let checkEvent = true;
    let counter = 3;
    let countbtn = 0;
    btn.addEventListener('click', function(event) {
        Array.from(allPictures).forEach((item, index) => {
            if (checkEvent) {
                event.preventDefault()
            }
            if (index > 5 && index <= counter + 5) {
                console.log(item.classList)
                item.classList.add('is-active');
                item.classList.add('mix');
                this.style['background-color'] = '#00B2A0';
            } else if (countbtn >= 3) {
                checkEvent = false;
            }
        });
        counter += 3;
        countbtn++
    });

}

showMore();

$(function() {

    $(".menu a, .go-top").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.blog__slider').slick({
        dots: true,
        arrows: false
    });

    $('.menu-btn, .menu a').on('click', () => {
        $('.menu').toggleClass('menu--open')
        $('.menu-btn').toggleClass('menu-color')
    })

    var mixer = mixitup('.galery__items')

});
//swiper
var swiper = new Swiper('.swiper-container', {
    scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
    },
});

window.onload = () => {
    let changeCard = document.querySelectorAll('.main-content__cards-box')[0];
    let card = changeCard.getElementsByClassName('main-content__card');
    var priceContainer = document.getElementsByClassName('main-content__price')[0];
    price = [8888, 9999, 3333, 5555, 7777, 2222];
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function() {
            let current = changeCard.getElementsByClassName('main-content__card_active');
            current[0].className = current[0].className.replace(' main-content__card_active', '');
            this.className += ' main-content__card_active';
            priceContainer.textContent = `${price[i]}$`;
        }); 
    }

    let form = document.querySelector('.main-content__form');
    let input = document.querySelector('.main-content__tel-input');
    // let re = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    let re = /^\+?([0-9]{2})\)?(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    function validate(event) {
        event.preventDefault();
        let value = input.value;
        if (re.test(value)) {
            alert('Спасибо!')
        } else {
            alert('Неверный формат номера')
        }
    }
    form.addEventListener('submit', validate);
} 


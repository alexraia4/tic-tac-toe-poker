function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset(){
    let cards = document.querySelectorAll('section');
    cards.forEach(element => element.removeAttribute('style'));
}
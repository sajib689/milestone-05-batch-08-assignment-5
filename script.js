const cards = document.querySelectorAll('.card')


// card loop

for (var index = 0; index < cards.length; index++) {
    const card = cards[index]
    card.addEventListener('click', function () {
        const title = card.querySelector('h2')
        console.log(title.innerText)
    })
}
const cards = document.querySelectorAll('.card')
let counters = 1;

// card loop

for (var index = 0; index < cards.length; index++) {
    const card = cards[index]
    card.addEventListener('click', function () {
        // get the products name
        const title = card.querySelector('h2').innerText
        const titleList = document.getElementById('title-container')
        const p = document.createElement('p')
        p.innerText =counters +'.'+ title
        titleList.appendChild(p)
        counters++
        // end product counter and products get name processed completely

        // get the product total amount
        
    })
}
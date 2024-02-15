const cards = document.querySelectorAll('.card')
let counters = 1;
let sum = 0;
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
        const totalAmountElement = document.getElementById('totalPrice')
        const totalPrice = parseFloat(card.querySelector('h3').innerText.split(" ")[1])
        totalAmountElement.innerText =  sum += totalPrice
        
    })
}

// get the discount price element
document.getElementById('apply-btn').addEventListener('click', function(){
    const discountValueElement = document.getElementById('input-field').value
    if(sum >= 200){
        if(discountValueElement === 'SELL200'){
            const discountElement = document.getElementById('discountPrice')
            const discountPrice = sum * 0.20
            discountElement.innerText = discountPrice.toFixed(2)
            document.getElementById('input-field').value = ''
            // get the total after the discount
            const total = document.getElementById('total')
            sum -= discountPrice
            total.innerText = sum.toFixed(2)
        } else {
            alert('Please enter the valid discount promo code')
        }
    } else{
        alert('Please by at least $200')
    }
})
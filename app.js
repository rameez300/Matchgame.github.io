document.addEventListener('DOMContentLoaded' , () => {

    const cardArray = [
        {
            name: 'one',
            img: 'images/one.jpg'
        },
        {
            name: 'one',
            img: 'images/one.jpg'
        },
        {
            name: 'two',
            img: 'images/two.jpg'
        },
        {
            name: 'two',
            img: 'images/two.jpg'
        },
        {
            name: 'three',
            img: 'images/three.jpg'
        },
        {
            name: 'three',
            img: 'images/three.jpg'
        },
        {
            name: 'four',
            img: 'images/four.jpg'
        },
        {
            name: 'four',
            img: 'images/four.jpg'
        },
        {
            name: 'five',
            img: 'images/five.jpg'
        },
        {
            name: 'five',
            img: 'images/five.jpg'
        },
        {
            name: 'six',
            img: 'images/six.jpg'
        },
        {
            name: 'six',
            img: 'images/six.jpg'
        },
        {
            name: 'seven',
            img: 'images/seven.jpg'
        },
        {
            name: 'seven',
            img: 'images/seven.jpg'
        },
        {
            name: 'eight',
            img: 'images/eight.jpg'
        },
        {
            name: 'eight',
            img: 'images/eight.jpg'
        },
        {
            name: 'nine',
            img: 'images/nine.jpg'
        },
        {
            name: 'nine',
            img: 'images/nine.jpg'
        },
        {
            name: 'ten',
            img: 'images/ten.jpg'
        },
        {
            name: 'ten',
            img: 'images/ten.jpg'
        }
]

cardArray.sort(() => 0.5 - Math.random ())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    function createBoard() {
        for(let i=0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert ('You cannot click the same image twice')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert(`It's a match`)
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            // alert('Nope. Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Good job. You Found em all'
        }

    }


    function flipCard(){
     let cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

 



createBoard()

















})
function deckOfCards(cards) {

    let validCards = [];

    function makeCard(face, suit) {
        const validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];


        if(!validFaces.includes(face) || !validSuits.includes(suit)){
            throw new Error("Error")
        } else {
            if(suit === 'S'){
                return face + '\u2660'
            } else if(suit === 'H'){
                return face + '\u2665'
            } else if(suit === 'D'){
                return face + '\u2666'
            }else if(suit === 'C'){
                return face + '\u2663'
            }
        }

    }


        for (let card of cards) {
            let face = card[0];
            let suit = card[1];

        try{
            validCards.push(makeCard(face, suit))
        } catch (err){
            console.log("Invalid card: " + card)
            return
        }
    }

    console.log(validCards.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C']);
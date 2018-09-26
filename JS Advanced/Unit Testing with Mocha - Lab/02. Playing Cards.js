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

console.log('' + makeCard(2, 'S'));
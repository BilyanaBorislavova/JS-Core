function tickets(array, sortingCriteria) {

    class Tickets {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let line of array) {
        let [destinationName, price, status] = line.split('|').filter(a => a !== '');
        price = parseFloat(price);
        tickets.push(new Tickets(destinationName, price, status));
    }

    if(sortingCriteria === 'destination'){
        return ([...tickets].sort((a, b) => a.destination.localeCompare(b.destination)));
    } else if (sortingCriteria === 'status'){
        return ([...tickets].sort((a, b) => a.status.localeCompare(b.status)));
    } else if(sortingCriteria === 'price'){
        return ([...tickets].sort((a, b) => a.price - b.price));
    }

}

tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
)
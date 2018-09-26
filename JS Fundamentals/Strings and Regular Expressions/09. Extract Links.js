function extractLinks(input) {
    let pattern = /(www\.)([a-zA-Z0-9\-]+)(\.[a-z]+)(\.[a-z]+)*/g;
    let match;
    let result = [];

    for (let sentence of input) {
        while (match = pattern.exec(sentence)){
           result.push(match[0]);
        }
    }

    console.log(result.join('\n'));
}

extractLinks(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'
])
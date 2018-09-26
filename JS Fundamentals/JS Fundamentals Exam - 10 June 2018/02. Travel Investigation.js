function second(arr) {

    let companies = arr.shift();
    let delimeter = arr.shift();

    let companiesSplit = companies.split(delimeter).filter(a => a !== ' ');

    let match;
    let valid = [];
    let invalid = [];

    for (let obj of arr) {
        let toLowercase = obj.toLowerCase();
        let isEvery = companiesSplit.every(item => toLowercase.includes(item));

        if(isEvery === true){
            valid.push(toLowercase);
        } else {
            invalid.push(toLowercase);
        }

    }


    if(valid.length >= 1){
        console.log("ValidSentences");
        let count = 1;
        for (let obj of valid) {
            console.log(`${count}. ${obj}`);
            count++;
        }
    }

    if(valid.length >= 1 && invalid.length >= 1){
        console.log("==============================");
    }

    if(invalid.length >= 1){
        console.log("InvalidSentences");
        let count = 1;
        for (let obj of invalid) {
            console.log(`${count}. ${obj}`);
            count++;
        }
    }
}

second(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
)

//second(["bulgariatour@, minkatrans@, koftipochivkaltd",
//    "@,",
//    "Mincho  e KoftiPochkivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
//    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
//)
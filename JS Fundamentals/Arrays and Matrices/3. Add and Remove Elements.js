function addAndRemoveElements(input) {

    let arr = [];
    let num = 1;

    for (let i = 0; i < input.length; i++) {

        if(input[i] === "add"){
            arr.push(num);
        }else {
            arr.pop();
        }

        num += 1;

    }

    if(arr.length >= 1){
    console.log(arr.join(`\n`));
    } else {
        console.log("Empty");
    }

}

addAndRemoveElements(['remove',
    'remove',
    'remove',
])
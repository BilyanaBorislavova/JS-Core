function usernames(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
       set.add(arr[i]);
    }

    function order(a, b){
        if(a.length < b.length){
            return -1;
        } else if(a.length > b.length){
            return 1;
        } else {
            return a.localeCompare(b);
        }
    }

    let sorderedSet = [...set].sort(order);

    for (let name of sorderedSet) {
        console.log(name);
    }
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
])
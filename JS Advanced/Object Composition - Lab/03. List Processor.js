let list = (function listProcessor() {

    let arr = [];
    
    function add(str) {
        arr.push(str);
    }
    
    function remove(str) {
       arr = arr.filter(a => a !== str);
    }
    
    function print() {
        console.log(arr.toString())
    }

    return function (input) {
        for (let element of input) {
            let [command, word] = element.split(' ');
            if(command === 'add'){
                add(word)
            }
            if (command === 'remove'){
                remove(word)
            }
            if (command === 'print'){
                print()
            }
        }
    }  

})()


list(['add hello', 'add again',
    'remove hello', 'add again', 'print']);
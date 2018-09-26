function sortedList() {

    return{
        arr: [],
        size: 0,
        add: function (element) {
            this.arr.push(element);
            this.size++;
            this.arr.sort((a, b) => a - b);
        },
        remove: function (index) {
            if(index >= 0 && index < this.arr.length){
                this.arr.splice(index, 1);
                this.size--;
            }
            this.arr.sort((a, b) => a - b);
        },
        get: function (index) {
            if(index >= 0 && index < this.arr.length){
                return this.arr[index];
            }
        },
    }
}
let sort = sortedList()
sort.add(5);
function catalouge(arr) {

    let map = new Map();

        for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(' : ').filter(a => a !== '');

        if(product[0] === product[0].toUpperCase()){
            if(!map.has(product[0])){
                map.set(product[0], new Map());
            }
            map.get(product[0]).set(product, Number(price));
        }
    }

    function alphabeticalSort(a, b) {
        return a[0].localeCompare(b[0])
    }
    let sortedInitials = [...map].sort(alphabeticalSort);


  for (let [key, values] of sortedInitials) {
      console.log(key);

      let sortedProducts = [...values].sort(alphabeticalSort);
      for (let [product, price] of sortedProducts) {
         console.log(`  ${product}: ${price}`);
      }
  }

}

catalouge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)
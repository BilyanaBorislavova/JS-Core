function rotateArray(arr) {

   let rotations = Number(arr.pop());

   if(rotations >= 1000){
       rotations %= 1000;
   }

    for (let i = 0; i < rotations; i++) {

       let lastEl = arr[arr.length - 1];
       arr.pop();
       arr.unshift(lastEl);
    }

    console.log(arr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2'
])
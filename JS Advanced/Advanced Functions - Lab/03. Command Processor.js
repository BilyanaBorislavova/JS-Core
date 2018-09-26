let cmdProcessor = (function () {
   let str = '';
   
   function append(text) {
       str = str + text;
   }
   
   function removeStart(n) {
       str = str.slice(n + 1, str.length)
   }
   
   function removeEnd(n) {
       str = str.slice(0, str.length - n)
   }

   function print() {
        console.log(str)
   }

   return function (input) {
       for (let line of input) {
           let [cmd, word] = line.split(' ');
           switch (cmd){
               case "append":append(word);break;
               case "removeStart":removeStart(Number(word));break;
               case "removeEnd":removeEnd(Number(word));break;
               case "print":print();break;
           }
       }
   }
    
})()

cmdProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)
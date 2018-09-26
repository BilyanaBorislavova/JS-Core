(function () {
   String.prototype.ensureStart = function (str) {
       if(!this.startsWith(str)){
           return str + this.toString();
       } else {
           return this.toString();
       }
   };

   String.prototype.ensureEnd = function (str) {
       if(!this.endsWith(str)){
           return this.toString() + str;
       } else {
           return this.toString();
       }
   };

   String.prototype.isEmpty = function () {
     if(this.length === 0){
         return true;
     } else {
         return false;
     }
   };

   String.prototype.truncate = function (n) {
       if(this.length <= n){
           return this;
       }

       if(n < 4){
           return '.'.repeat(n);
       }

       if(!this.includes(' ')){
           return this.slice(0, n - 3) + '...';
       }

       if(this.length > n){
           let tokens = this.split(' ');
           let result = tokens[0];
           for (let i = 1; i < tokens.length; i++) {
               if (result.length + tokens[i].length + 4 > n) {
                   return result + '...'
               }
               result += ' ' + tokens[i]
           }

       }

   };

   String.format = function (str, ...params) {
       for (let i = 0; i < params.length; i++) {
           str = str.replace(/{[0-9]+}/, params[i])
       }
       return str;
   }
}())

let str = 'Whatishappening'
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
//str = str.ensureStart('hello ')
//str = str.truncate(8)
//console.log(str);
//str = str.truncate(14)
//str = str.truncate(8)
//str = str.truncate(4)
//str = str.truncate(2)
//str = String.format('The {0} {1} fox',
//    'quick', 'brown');
//str = String.format('jumps {0} {1}',
//    'dog');
//
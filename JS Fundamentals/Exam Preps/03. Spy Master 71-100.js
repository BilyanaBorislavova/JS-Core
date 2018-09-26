function decodingMessages(arr) {
    let specialKey = arr[0];

      let regex = new RegExp(`(^| )(${specialKey})\\s+([A-Z!%\\$#]{8,})( |,|\\.|$)`, 'gi');
    console.log(regex);

      let match;

      let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }


    for (let obj of newArr) {

        while(match = regex.exec(obj)) {

               if(match[3] === match[3].toUpperCase()){

               for (let obj1 of match[3]) {
                   if(obj1 === "!"){
                       obj = obj.replace(obj1, 1);
                   }
                   if(obj1 === "%"){

                       obj = obj.replace(obj1, 2);
                   }
                   if(obj1 === "#"){

                       obj = obj.replace(obj1, 3);
                   }
                   if(obj1 === "$"){
                       obj = obj.replace(obj1, 4);
                   }

                    obj = obj.replace(match[3], match[3].toLowerCase())
               }
           }
        }
        console.log(obj);
    }



}

decodingMessages(['hiddenTrap',
    'Now the ultimate hiddenTrap HIDDENTR just some text',
    'who said the message couldn\'t be contained in the key',
    'or it could be this HIDDENTRAP, HIDDENTRAP HIDDENTRA',
    'some more tests this one is wrong (HIDDENTRAP HIDDENTRA)',
    'now with some spaces HIDDENTRAP         HIDDENTRA  HIDDENTRAP  HIDDENTR',
    'hiddenTrap HiddenTRA, hiddenTrap HIDDENTRA']);

//decodingMessages(['enCode',
//'Some messages are just not encoded what can you do?',
//'RE - ENCODE THEMNOW! - he said.' ,
//'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'])
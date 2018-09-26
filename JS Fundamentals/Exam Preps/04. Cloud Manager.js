function cloudManager(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let [file, space, extension, s, m] = arr[i].split(/([\s+]|[MB]{2})/).filter(a => a !== '');

        file = `"${file}"`;

        if(!obj.hasOwnProperty(extension)){
            obj[extension] = {'files':[], 'memory':[]};
        }
        obj[extension]['files'].push(file);
        obj[extension]['memory'].push(m);
    }

    let sortedInitials = Object.keys(obj).sort();
    let arrr = [];
    for (let obj1 of sortedInitials) {
        let result = "";
        result += `"${obj1}":`;
        let sum = 0;
        let sortedItems = Object.values(obj[obj1].files).sort();
        let memoryItems = Object.values(obj[obj1].memory);
        for (let obj2 of memoryItems) {
            sum += Number(obj2);
        }
        result += `{"files":[${sortedItems.join(',')}],"memory":"${sum.toFixed(2)}"}`;
        arrr.push(result);
    }
    arrr.pop();
    console.log(`{${arrr.join(',')}}`);
}

//cloudManager(['eclipse .tar.gz 198.00MB',
//    'uTorrent .gyp 33.02MB',
//    'nodeJS .gyp 14MB',
//    'nakov-naked .jpeg 3MB',
//    'gnuGPL .pdf 5.6MB',
//    'skype .tar.gz 66MB',
//    'selfie .jpeg 7.24MB',
//    'myFiles .tar.gz 783MB'
//])
//
//cloudManager(['sentinel .exe 15MB',
//    'zoomIt .msi 3MB',
//    'skype .exe 45MB',
//    'trojanStopper .bat 23MB',
//    'kindleInstaller .exe 120MB',
//    'setup .msi 33.4MB',
//    'winBlock .bat 1MB'
//])
//

cloudManager(['GNU_HURD .asm 242.40MB',
    'f.lux .exe 3.2MB',
'debugger .exe 54.22MB',
'flag .asm 231.09MB',
'profile .aspx 2MB',
'gentoo .asm 178.00MB',
'cloudManager .java 2MB',
'clock .cpp 1.1MB',
'GNU_chess .asm 4MB',
'powerMng .java 17MB',
'index .aspx 13MB'
])
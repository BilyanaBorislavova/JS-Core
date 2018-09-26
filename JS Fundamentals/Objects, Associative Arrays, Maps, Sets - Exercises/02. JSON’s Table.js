function table(arr) {

    console.log("<table>");

    for (let i = 0; i < arr.length; i++) {
       let parse = JSON.parse(arr[i]);

        console.log("\t<tr>");
        console.log(`		<td>${parse.name}</td>`);
        console.log(`		<td>${parse.position}</td>`);
        console.log(`		<td>${parse.salary}</td>`);
        console.log("\t<tr>");
    }

    console.log("</table>");
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])
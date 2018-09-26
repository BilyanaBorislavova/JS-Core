function buildingATable(numArr) {

    let start = Number(numArr[0]);
    let end = Number(numArr[1]);

    console.log("<table>");
    console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");

    let result = "";
    let fibbOrNot = "";

    //build the sequence
    let fibSeq = [0, 1], i = 0;
    //goes to Infinity if > 1475
    for (i; i < 1475; i++) {
        fibSeq.push(fibSeq[i] + fibSeq[i + 1]);
    }

    for (let i = start; i <= end; i++) {
        //check for num in the sequence
        if (fibSeq.indexOf(i) > -1) {
            fibbOrNot = "yes";
        } else {
            fibbOrNot = "no";
        }

        result += `<tr><td>${i}</td><td>${i * i}</td><td>${fibbOrNot}</td></tr>\n`;
    }


    console.log(result.substring(0, result.length - 1));
    console.log("</table>");
}


buildingATable(["2","6"])
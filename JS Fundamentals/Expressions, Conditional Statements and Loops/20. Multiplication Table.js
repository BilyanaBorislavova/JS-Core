function multiplicationTable(n) {

    console.log("<table border=\"1\">");

    let result = "";
    let newResult = "";

    result += " <tr><th>x</th>";
    for (let rows = 1; rows <= n; rows++) {
        result += `<th>${rows}</th>`;
        newResult += ` <tr><th>${rows}</th>`;

        for (let i = 1; i <= n; i++) {
            newResult += `<td>${i * (rows)}</td>`
        }
        newResult += `</tr>\n`;
     }


    result += "</tr>";
    console.log(result);
    console.log(newResult.substring(0, newResult.length - 1));
    console.log("</table>");
}

multiplicationTable(5)
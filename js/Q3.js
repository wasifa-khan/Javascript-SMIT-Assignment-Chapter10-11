let signal_1 = prompt("Enter Signal 1 color");
let signal_2 = prompt("Enter Signal 2 color");
let signal_3 = prompt("Enter Signal 3 color");
let a = "Must Stop";
let b = "Ready to move";
let c = "Move now";


document.write("<table>");
    document.write("<tr><th>Signal Color</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>Message</th></tr>");
    document.write("<tr><td>" + signal_1 + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  + a + "</td></tr>");
    document.write("<tr><td>" + signal_2 + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"   + b +"</td></tr>");
    document.write("<tr><td>" + signal_3 + "</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  + c +"</td></tr>");

    document.write("</table>");

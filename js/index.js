var a = 5;
var b = "10";
var c = 10;
var d = a + c;
var e = c * a;
var f = b + e; // "10" + 50 --> "1050" concatena a informação pois um é integer e o outro é string
console.info (f);
console.log (a);
console.error(b);
var h1 = document.createElement("h1"); // <h1></h1> cria na memória
h1.append(f);
document.body.appendChild(h1); // DOM

var a1 = document.createElement("a");//<a></a>
a1.setAttribute("href", "http://google.com");//<a href="http://google.com">
a1.setAttribute("target", "_blank");
a1.append(b);
document.body.appendChild(a1);//DOM

var ul = document.createElement("ul");
var li = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

ul.appendChild(li);
li.append("Item 01");
ul.appendChild(li2);
li2.appendChild(a1);
ul.appendChild(li3);
li3.append(d)

document.body.appendChild(ul);

var section = document.createElement("section");
var div = document.createElement("div");
var h1 = document.createElement("h1");
var nav = document.createElement("nav");
var ul = document.createElement("ul");
var li = document.createElement("li");
var li2 = document.createElement("li");
var a2 = document.createElement("a");
a2.setAttribute("href", "http://google.com")
a2.setAttribute("target", "_blank");
a2.append("Link 01");
var a3 = document.createElement("a");
a3.setAttribute("href", "http://google.com")
a3.setAttribute("target", "_blank");
a3.append("Link 02");


section.appendChild(div);
div.appendChild(h1);
h1.append("Exercicio Javascript");

section.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);
li.append(a2);

section.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li2);
li2.append(a3);

document.body.appendChild(section);

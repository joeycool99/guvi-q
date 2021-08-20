var div = document.createElement("div")
var form = document.createElement("form")
var h1 = document.createElement("h1")
var button = document.createElement("button")
button.innerHTML = "submit"
h1.innerHTML = "2) The correct sequence of HTML tags for starting a webpage is -"
var ul = document.createElement("ul")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var label1 = document.createElement("lable")

label1.innerHTML = "Head, Title, HTML, body"
label1.setAttribute("for", "q1")
var radio1 = createrd("input", "q1")

var label2 = document.createElement("lable")
label2.innerHTML = "HTML, Body, Title, Head"
label2.setAttribute("for", "q1")
var radio2 = createrd("input", "q1")

var label3 = document.createElement("lable")
label3.innerHTML = "HTML, Head, Title, Body"
label3.setAttribute("for", "q1")
var radio3 = createrd("input", "q1")

var label4 = document.createElement("lable")
label4.innerHTML = "HTML, Head, Title, Body"
label4.setAttribute("for", "q1")
var radio4 = createrd("input", "q1")

li1.append(radio1, label1)
li2.append(radio2, label2)
li3.append(radio3, label3)
li4.append(radio4, label4)
ul.append(li1, li2, li3, li4)

form.append(h1, ul)
form.append(button)
div.append(form)

document.body.append(div)






function createrd(elename, id) {
    var rd = document.createElement(elename)
    rd.setAttribute("type", "radio")
    rd.setAttribute("name", id)
    rd.setAttribute("id", id)
    return rd

}

// function addElement() {
//     var text_message = document.getElementById(name001).value;
//     document.createElement('p');
//     text_message.
// }

// document.createElement('DOMContentLoaded', function () {

// })

// function addElement() {
//     var elementType = document.getElementById("name001").value;
//     var inputElement = document.createElement("input");
//     inputElement.setAttribute("type", elementType);
//     document.getElementById("dynamicElements").appendChild(inputElement);
// }


function addElement() {
    var elementType = document.getElementById("name001").value;
    var storedtype = localStorage.getItem('elementType');
    var inputElement = document.createElement("input");

    inputElement.setAttribute("type", elementType);

    document.getElementById("dynamicElements").appendChild(inputElement);
}
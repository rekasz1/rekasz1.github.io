function createButton(label) {

    var button = document.createElement("button");
    // button.innerHTML = "About Me";
    button.innerHTML = label;

    button.style.width = "100px";
    button.style.height = "40px";
    // button.style.color = "515E69";
    // button.style.backgroundColor = "Transparent";
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);
    let container = document.getElementsByTagName("header")[0];
    container.appendChild(button);
}

export default createButton

// class Button {

//     consturctor(width, height, label) {
//         this.button = document.createElement('button')
//         this.height = height;
//         this.width = width;
//         this.label = label;

//     }



//     show() {
//         var body = document.getElementsByTagName("body")[0]
//         // var container = document.getElementsByTagName("div");
//         body.appendChild(button)

//     }

// }


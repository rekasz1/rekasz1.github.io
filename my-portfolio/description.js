function createsiteDescription() {
    let description = document.createElement('p');
    description.innerText = "You’ve found my personal corner of the internet - everything you want to know about me is here."

    let body = document.getElementsByTagName("div")[0];
    body.appendChild(description);

    // return 

    // var x = document.createElement("P");
    // var t = document.createTextNode("This is a paragraph.");
    // x.appendChild(t);
    // document.body.appendChild(x);

}

export default createsiteDescription
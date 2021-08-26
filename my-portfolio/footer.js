function createFooter() {
    let footer = document.createElement('footer')
    footer.style.height = "100px";

    var body = document.getElementsByTagName("div")[0];
    body.appendChild(footer);
}

export default createFooter
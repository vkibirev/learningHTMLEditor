function tag(tagName, text, children=[], attrs={}) {
    let item = document.createElement(tagName);
    if (text) {
        item.textContent = text;
    }    
    for (let i = 0; i < children.length; ++i) {
        item.appendChild(children[i]);
    }

    for (let attr in attrs) {
        item.setAttribute(attr, attrs[attr])
    }
    return item;
}

module.exports.tag = tag;
const createTags = require('./add');

    document.body.insertBefore(    
    createTags.tag('main', '', [
        createTags.tag(        
            'div', '', [
            createTags.tag('div', '', [     
                createTags.tag('div', '', [], {class: 'schema-level'}),
            ], {class: 'block-left schema'}),
            createTags.tag('div', '', [
                createTags.tag('div', '', [
                    createTags.tag('div', '', [
                        createTags.tag('ul', '', [                    
                            createTags.tag('li', 'hello'),                    
                            createTags.tag('li', 'world'),
                        ]),
                    ])
                ], {class: 'board'}),                
            ], {class: 'block-right'}),
        ], {class: 'row'}), 
        createTags.tag('div', '', [
            createTags.tag('div', '', [
                createTags.tag('input', '', [], {id: 'input'}),
                createTags.tag('button', 'Set text', [], {class: 'setter'}),
                createTags.tag('button', 'Create tag', [], {class: 'createTag'}),
                createTags.tag('button', 'Remove', [], {class: 'remove'}),

            ], {class: 'block-left'}),
            createTags.tag('div', '', [
                createTags.tag('div', `Current tag: `, [], {id: "currentTag"})
            ], {class: 'block-right'})
        ], {class: 'row'}),
    ]),
    document.querySelector('script'));

function event(selector, func) {
    let item = document.querySelector(selector);
    return item.addEventListener('click', func);
}

event('.board', clickOnBoardItem());

function activeExists(){
    let active = document.querySelector('.active');
    if(active){
        return active;
    }
    return false;
}
    
function clickOnBoardItem(event) {
    let tempActiveTag;

    return function userClick(event) {
        let currentActiveTag = event.target;

        if (currentActiveTag !== tempActiveTag && activeExists()) {
            activeExists().classList.remove('active');
        }
        event.target.classList.toggle('active');
        showCurrentTag(event.target);
        tempActiveTag = event.target;
    }
}

function showCurrentTag(target) {
    let activeTagName = activeExists().tagName.toLowerCase();
    let currentTagField =  document.querySelector('#currentTag');
    
    if (activeExists()) {
        return currentTagField.textContent = `Current tag: ${activeTagName}`;
    }    
    return;    
}

event('.setter', setText);

function setText() {
    if (activeExists() && input.value === '') {
          
        activeExists().textContent = "default"; 
        show();
        return;
    }
    activeExists().textContent = input.value; 
    show();
    return;
}

event('.createTag', addTag);

function addTag() {    
    let tags = ['h1', 'h2', 'h3', 'h4', 'div', 'p', 'ul', 'ol', 'li'];
    if (activeExists() && !tags.includes(input.value)) {     
        alert(`${input.value} value aren't allowed you can use only these tags: h1, h2, h3, h4, div, p, ul, ol, li`);                   
        return;
    }
    activeExists().appendChild(createTags.tag(input.value, ''));
    show();
    return;
}

event('.remove', removeTag);

function removeTag() {
    if (activeExists()) {
        
        activeExists().remove();        
    }
    show();
    return 
}

// function clear(element) {
//     document.querySelector(element).innerHTML = '';
// }


//Functions that try to show each elem in left part in separate div (Doesn't work correctly yet)
// -----------------------------------------------------------

function show() {
    let boardPart = document.querySelector('.board');
    let generated = showHTMLTree();
    generated(boardPart);
}

function showHTMLTree() {   

    return function f(boardPart) {
        let childrenItem = boardPart.children;
        let parentSection = document.querySelector('.schema').getElementsByClassName('schema-level');

        for (let i = 0; i < childrenItem.length; i++) {  
            let lastElement = parentSection[parentSection.length - 1];
            
            let parentOpenTag = childrenItem[i].tagName;
            let parentCloseTag = childrenItem[i].tagName;
            
            lastElement.innerHTML = 
            `<div class="schema-level">
            ${parentOpenTag}  
                
                ${childrenItem[i].children.length > 0 ? `<div class="schema-level">${f(childrenItem[i])}</div>` : `<div class="schema-level"> ${childrenItem[i].textContent}</div>`}
                  
            ${parentCloseTag}
            </div>`
            
            if (childrenItem[i].children.length !== 0) {                
                f(childrenItem[i]);                         
            } 
        }        
    }
}
show();

//${childrenItem[i].children.length > 0 ? `<div class="schema-level">${f(childrenItem[i])}</div>` : `<div class="schema-level"> ${childrenItem[i].textContent}</div>`}      
// ${childrenItem[i].children.length !== 0 ? f(childrenItem[i]) : 'test'}


//Functions that try show elements of the left part using string (works correctly)
// -----------------------------------------------------------

// function show() {
//     let boardPart = document.querySelector('.board');
//     let tagsPart = document.querySelector('.schema');
//     let generated = showHTMLTree();

//     if(boardPart) {
//         return tagsPart.textContent = generated(boardPart);
//     } else {
//         return tagsPart.textContent = '';
//     }    
// }

// function showHTMLTree() {  
//     let count = 0;  
//     let allItemstags = '';

//     return function f(boardPart) {
//         let childrenItem = boardPart.children;

//         for (let i = 0; i < childrenItem.length; ++i) {
//             let parentOpenTag = `${'\t'.repeat(count)}<${childrenItem[i].tagName}>`
//             let parentCloseTag = `${'\t'.repeat(count)}</${childrenItem[i].tagName}>`

//             allItemstags += `\n ${parentCloseTag}`;

//             if (childrenItem[i].textContent && childrenItem[i].children.length === 0) {
//                 allItemstags += '\n'+'\t'.repeat(count + 1) + childrenItem[i].textContent;
//             }

//             if (childrenItem[i].children.length !== 0) {    
//                 ++count;            
//                 f(childrenItem[i]);                
//             } 

//             allItemstags += `\n ${parentCloseTag}`;
//         }
//         return allItemstags;
//     }
// }

// show();
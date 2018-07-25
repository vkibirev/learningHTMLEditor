const createTags = require('./add');

    document.body.insertBefore(    
    createTags.tag('main', '', [
        createTags.tag(        
            'div', '', [
            createTags.tag('div', '', [
                createTags.tag('ul', '', [                    
                    createTags.tag('li', 'hello', []),                    
                    createTags.tag('li', 'world', []),
                ])
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

let board = document.querySelector('.board');
board.addEventListener('click', clickOnBoardItem());

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



let set = document.querySelector('.setter');
set.addEventListener('click', setText);

function setText() {
    if (activeExists() && input.value === '') {  
        return activeExists().textContent = "default"; 
    }
    return activeExists().textContent = input.value;
    
}

let createTag = document.querySelector('.createTag');
createTag.addEventListener('click', addTag);

function addTag() {
    
    let tags = ['h1', 'h2', 'h3', 'h4', 'div', 'p', 'ul', 'ol', 'li'];
    if (activeExists() && !tags.includes(input.value)) {     
        alert(`${input.value} value aren't allowed you can use only these tags: h1, h2, h3, h4, div, p, ul, ol, li`);                   
        return;
    }
    return activeExists().appendChild(createTags.tag(input.value, ''));
}

let remove = document.querySelector('.remove');
remove.addEventListener('click', removeTag);

function removeTag() {
    if (activeExists()) {
        return activeExists().remove();
    }
}



// let set = document.querySelector('.setter');
// let createTag = document.querySelector('.createTag');
// let current = document.querySelector('.active');
// set.addEventListener('click', adder(setText, current));
// createTag.addEventListener('click', adder(createTag, current));


// function adder(func, cur) {
    
//     console.log(cur);
    
//     if (cur) {        
//         return func;
//     }
// }

// function setText() {
//     console.log('testesteste');
// }

// function createTagFunc() {
//     console.log('create tag');
    
// }









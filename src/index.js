const createTags = require('./add'); //imported function that create HTML elements on the page

//Creating the default HTML structure using imported tag function that we call from createTags
    document.body.insertBefore(    
    createTags.tag('main', '', [
        createTags.tag(        
            'div', '', [
            createTags.tag('div', '', [     
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

//Function that create eventListener for the item(selector) 
//and runc necessery function for this item(func) 
function event(selector, func) {
    let item = document.querySelector(selector);
    return item.addEventListener('click', func);
}

//Function-decorator that sync right(board) part of the screen with left(HTML structure) part of the screen
function addSyncEffect(func) {
    function wrapper() {                
        let result = func();
        syncBlocks(); //call syncBlocks() function to update left part(tag sturcture) of the screen
        return result;
    }
    return wrapper;
}

addTag = addSyncEffect(addTag);
setText = addSyncEffect(setText);
removeTag = addSyncEffect(removeTag);

event('.board', clickOnBoardItem());
event('.setter', setText);
event('.createTag', addTag);
event('.remove', removeTag);

//Function that check if some tag on the board is active now
function activeExists(){
    let active = document.querySelector('.active');
    if(active){
        return active;
    }
    return false;
}

//Function that mark clicked tag as active by adding ".active" class   
function clickOnBoardItem() {
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

//Function that show the name of the active tag near "Current tag: "
function showCurrentTag() {
    let activeTagName = activeExists().tagName.toLowerCase();
    let currentTagField =  document.querySelector('#currentTag');
    
    if (activeExists()) {
        return currentTagField.textContent = `Current tag: ${activeTagName}`;
    }    
    return;    
}

//Function that set text in the active tag on board
function setText() {
    if (activeExists() && input.value === '') {          
        return activeExists().textContent = "default"; 
    }
    return activeExists().textContent = input.value; 
}

//function that add tag written in the input field in the active tag on the board
function addTag() {    
    let tags = ['h1', 'h2', 'h3', 'h4', 'div', 'p', 'ul', 'ol', 'li'];
    if (activeExists() && !tags.includes(input.value)) {     
        alert(`${input.value} value aren't allowed you can use only these tags: h1, h2, h3, h4, div, p, ul, ol, li`);                   
        return;
    }
    return activeExists().appendChild(createTags.tag(input.value, ''));
}

//Function that delete the active tag from board
function removeTag() {
    if (activeExists()) {        
        activeExists().remove();        
    }
    return; 
}

//Function that render text data that is displayed in the innerHTML of left block
function renderTag(tag, offset=5) {
    let tagName = tag.tagName.toLowerCase();
    let content = '';
    let space = '&nbsp'.repeat(offset);
    
    if (tag.children.length) {
        for (let i = 0; i < tag.children.length; i++){       
            content += renderTag(tag.children[i], offset*2); 
        }    
    } else {
        content = space.repeat(2) + tag.textContent;
    }

    result = `${space}&lt${tagName}&gt<br>${content}<br>${space}&lt/${tagName}&gt<br>`;
    return result;
}

//Function that run synchronization of right and left blocks
//HTML tags structure is displayed in the left block as text in the innerHTML
function syncBlocks() {
    let text = '';
    let board = document.querySelector('.board');
    let markup = document.querySelector('.schema');
    let c = board.children;
    console.log(c.children);
    
    for(let i = 0; i < c.length; i++) {
        text += renderTag(c[i]);
    }   

    markup.innerHTML = text;
}
syncBlocks();

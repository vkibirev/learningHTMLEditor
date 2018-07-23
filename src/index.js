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
board.addEventListener('click', handler);
    
function handler(event) {   
    let current = document.querySelector('.active'); 
    
    if (current) {        
        current.classList.remove('active');  
    }   
    
    event.target.classList.toggle('active');    

    activeTag(); 
}

function activeTag() {    
    document.querySelector('#currentTag').textContent = `Current tag: ` + document.querySelector('.active').tagName.toLowerCase();
}

let tags = ['h1', 'h2', 'p', 'ul', 'li'];

let set = document.querySelector('.setter');
set.addEventListener('click', setText);
function setText() {
    let current = document.querySelector('.active');
    if (current) {        
        current.textContent = input.value;  
    }
}





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
                createTags.tag('input', ''),
                createTags.tag('button', 'Set text'),
                createTags.tag('button', 'Create tag'),
                createTags.tag('button', 'Remove'),

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
        document.querySelector('#currentTag').textContent = `Current tag: ` + current.tagName.toLowerCase();        
        current.classList.remove('active');  
    }    
    event.target.classList.toggle('active');   

    // if (current) {        
    // document.querySelector('#currentTag').textContent = `Current tag: ` + current.tagName.toLowerCase();       
    // }  
}

// let  = 
// function tree() {

    
// }





const createTags = require('./add');

    document.body.insertBefore(    
    createTags.tag('main', '', [
        createTags.tag(        
            'div', '', [
            createTags.tag('div', '', [
                createTags.tag('ul', '', [                    
                    createTags.tag('li', 'hello'),                    
                    createTags.tag('li', 'world'),
                ])
            ], {class: 'block-left'}),
            createTags.tag('div', '', [
                createTags.tag('ul', '', [                    
                    createTags.tag('li', 'hello'),                    
                    createTags.tag('li', 'world'),
                ])
            ], {class: 'block-right'})
        ], {class: 'row'}), 
        createTags.tag('div', '', [
            createTags.tag('div', '', [
                createTags.tag('input', ''),
                createTags.tag('button', 'Set text'),
                createTags.tag('button', 'Create tag'),
                createTags.tag('button', 'Remove'),

            ], {class: 'block-left'}),
            createTags.tag('div', '', [
                createTags.tag('div', 'Current tag: ')
            ], {class: 'block-right'})
        ], {class: 'row'}),
    ]),
    document.querySelector('script'));
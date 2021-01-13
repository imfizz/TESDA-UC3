    // Events //

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){

    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        
    });
});
    // prevent default behaviour
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
});

    // Event Bubbling

const list = document.querySelector('#book-list ul');

    // Delete books
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
    }
});

    // Add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    

    // add classes

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});
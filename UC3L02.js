    // Changing content//

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += ' (Book title)';
});

const booklist = document.querySelector("#book-list");

    booklist.innerHTML += " Enjoy Reading!";
    booklist.innerHTML += ' <p>This is how you add HTML!</p>';

    // Nodes //

const banner = document.querySelector('#page-banner');

    console.log('#page-banner node type is:', banner.nodeType);
    console.log('#page-banner node name is:', banner.nodeName);
    console.log('#page-banner node has child nodes:', banner.hasChildNodes());

const cloneBanner = banner.cloneNode(true);
    console.log(cloneBanner);

const cloneBanner2 = banner.cloneNode(false);
    console.log(cloneBanner2);

    // Traversing the DOM (Nodes)
// (Parent)
const bookList = document.querySelector('#book-list');
    console.log('the parent node is:', bookList.parentNode);
    console.log('the parent element is:', bookList.parentElement.parentElement);
    console.log('the parent node is;', bookList.parentNode)

    // Traversing the sibling
    
    // (next)

    console.log('book-list next sibling is:', bookList.nextSibling);
    console.log('book-list next element sibling is:', bookList.nextElementSibling);

    // (previous)

    console.log('book-list previous sibling is:', bookList.previousSibling);
    console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!'


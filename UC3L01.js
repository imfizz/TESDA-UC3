// Get Elements By ID Method

var banner = document.getElementById("page-banner");

console.log(banner);
//         or
// document.getElementById("page-banner");
// console.log(document.getElementById("page-banner"));

// ========
var bookList = document.getElementById("book-list");
console.log(bookList);
//         or
// document.getElementById("book-list");
// console.log(document.getElementById("book-list"));


// Get Elements By ClassName //

console.log("Getting Elements by ClassName");

var titles = document.getElementsByClassName("title");

Array.from(titles).forEach(function(item)
{
    console.log(item);
}
);
// ==============  or  
// var titles = document.getElementsByClassName("title");

//     console.log(titles);

 // Get Elements By TagName //

 console.log("Getting Elements by TagName");

var lis = document.getElementsByTagName("li");

Array.from(lis).forEach(function(item)
{
    console.log(item);
}
);
//  ==============  or 
// var lis = document.getElementsByTagName("li");

//     console.log(lis);


// The Query Selector
console.log("The Query Selector (Get One)");

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

console.log("The Query Selector (Get All)");

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(Book){
  console.log(Book);
});
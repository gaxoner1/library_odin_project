document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addBook);
});

let myLibrary = [
  {title:'book', author:'writer', pages:'100', read:'yes'},
  {title:'book2', author:'writer2', pages:'101', read:'no'}
];

// take user input from form; then creat array of book:
//example {title:'book', author:'writer', pages:'100', read:'yes'}.
const addBook = (e)=>{
  e.preventDefault();  //to stop the form submitting
  let userBook = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: document.getElementById('read').value
    }
    myLibrary.push(userBook);
    generateTable(myLibrary);
    document.querySelector('form').reset(); // to clear the form for the next entries
    //document.forms[0].reset(); // another way of clearing form

    //saving to localStorage
    localStorage.setItem('myLibraryBooks', JSON.stringify(myLibrary) );
}


//generateTable(myLibrary);

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
  }
};

function generateTable(arrayData) {
  let tableBody = document.querySelector('.tableBody');
  for (var i = 0; i < arrayData.length; i++){
    let row = `<tr>
                  <td>${arrayData[i].title}</td>
                  <td>${arrayData[i].author}</td>
                  <td>${arrayData[i].pages}</td>
                  <td>${arrayData[i].read}</td>
               </tr>`
    tableBody.innerHTML += row;
  }
};







// function addBookToLibrary(title, author, pages, read) {
//   // do stuff here
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
// }
//
// const book = new Book //(passin )

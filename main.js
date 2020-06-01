document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addBook);
});
let myLibrary = [
  {title:'book', author:'writer', pages:'100', read:'yes'},
];

// take user input from form; then creat array of book:
//example {title:'book', author:'writer', pages:'100', read:'yes'}.
const addBook = (e)=>{
  e.preventDefault();  //to stop the form submitting
  let userBook = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: readYesNo()
    }
    myLibrary.push(userBook);
    renderTable(myLibrary);
    document.querySelector('form').reset(); // to clear the form for the next entries
    //document.forms[0].reset(); // another way of clearing form

    //saving to localStorage
    localStorage.setItem('myLibraryBooks', JSON.stringify(myLibrary) );
};

//handle delete, remove entire row 
document.querySelector('.tableBody').addEventListener('click', function(e) {
  if(e.target.id == 'delete'){
    e.target.parentNode.parentNode.remove();
  }
});


function readYesNo() {
  var radioBtn = document.getElementsByName('readStatus');
  //return value of radio button (Yes or No); pass to userBook;
  return (radioBtn[0].checked ? radioBtn[0].value : radioBtn[1].value)
};

function renderTable(arrayData) {
  let tableBody = document.querySelector('.tableBody');
  for (var i = 0; i < arrayData.length; i++){
    let row = `<tr >
                  <td>${arrayData[i].title}</td>
                  <td>${arrayData[i].author}</td>
                  <td>${arrayData[i].pages}</td>
                  <td>${arrayData[i].read}</td>
                  <td><button id='delete'> Delete</button></td>
               </tr>`
    tableBody.innerHTML += row;
    console.log(row)
    //tableBody.insertAdjacentHTML('beforeend', row);
  }
};



// const book = new Book //(passin )

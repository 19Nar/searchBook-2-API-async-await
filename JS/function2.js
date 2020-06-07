button.onclick = async () => {
    
    let book_URL = 'https://www.googleapis.com/books/v1/volumes?q=' + input.value;
    console.log(book_URL)
    let response = await fetch(book_URL);
    let data = await response.json()
    showBookResults(data.items);
};

const showBookResults = (allResults) => {

    results.innerHTML = "";
    let html = ""
    allResults.forEach(book => {

        console.log(book)

        html += `
  <hr>
         <div class="container">
  <div class="row">
    <div class="col-sm-2 p-2 text-secondary text-center">
      <span id="text-center">Language: ${book.volumeInfo.language}</span>
    </div>
    <div class="col-sm-2 p-2 text-center text-secondary">
      <span id="text-center">Title: ${book.volumeInfo.title}</span>
    </div>
    <div class="col-sm-4 p-2 text-center text-secondary">
      <span id="text-center">Category: ${book.volumeInfo.categories} </span>
    </div>
    <div class="col-sm-4 p-2 text-center text-secondary">
      <span id="text-center">Category: ${book.volumeInfo.authors} </span>
    </div>
    <div class="col-sm-4 p-2 text-center text-secondary">
      <span id="text-center">Published Date: ${book.volumeInfo.publishedDate}</span>
    </div>
  </div>
  </div>
         `
    })
    results.innerHTML = html;
}

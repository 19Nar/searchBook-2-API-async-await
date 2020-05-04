button.onclick = async () => {
    
    let book_URL = "https://www.googleapis.com/books/v1/volumes?q=" + input.value;
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

        <br>
       <div class = "card col-sm-2">
       <a href="${book.volumeInfo.previewLink.page}"><img src = ${book.volumeInfo.imageLinks.thumbnail} 
       class="w-100" title="See profile"></a>
       <div class = "card-body">
       <h6 class = "card-title">${book.volumeInfo.title}</h6>
      <p class = "card-text">Language: ${book.volumeInfo.language}</p>
      <p class = "card-text">Category: ${book.volumeInfo.categories}</p>
      <p class = "card-text">Published Date: ${book.volumeInfo.publishedDate}</p>
      </div>
      </div>

         `
    })
    results.innerHTML = html;
}
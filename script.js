  const searchBook = () => {
      const searchField = document.getElementById('search-field');
      const searchText = searchField.value;
      if (searchText == '') {
          document.getElementById('error-message').innerText = 'nothing found';
      }


      // clear data
      searchField.value = '';

      const url = `https://openlibrary.org/search.json?q=${searchText}
   `;


      fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.docs))

  }




  const displaySearchResult = docs => {

      const searchResult = document.getElementById('search-result');
      docs.forEach(book => {
          console.log(book);
          const div = document.createElement('div');
          div.classList.add('col');
          div.innerHTML = `
       <div class="card">
       <img src=" https://covers.openlibrary.org/b/id/${book.id_goodreads}-M.jpg" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title ">Book Name: ${book.title}</h5>
           <p class="card-text text-primary "> Author Name: ${book.author_name}</p>
           <p class="card-text"> Published on: ${book.first_publish_year}  </p>
       </div>
   </div>


       `;
          searchResult.appendChild(div);
      });
  }
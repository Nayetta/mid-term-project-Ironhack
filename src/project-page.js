// aqui estem fent el fetch per a printejar l'article

function fetchArticle() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((response) => {
      let content = `
               <h1>${response.title}</h1>
               <div class="title-article">
                  <p class="body-intro-med gray">${response.userId}</p>
                  <div class="date-container">
                    <p class="body-intro-reg dark">Completed on</p>
                    <p class="body-intro-reg">${response.id}</p>
                  </div>
                </div>
                <div class="image-article"></div>
                <div class="text-article body-intro-reg dark">
                  ${response.body}
                </div>
             
          `;
      document.querySelector(".article-section").innerHTML = content;
    })
    .catch((error) => {});
}

fetchArticle();

// aqui estem fent un fetch, per als 3 posts del final

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => {
      let content = "";
      response.forEach((articleObject, index) => {
        if (index < 3) {
          content += `
          <div class="project-card">
            <div class="card-image">
              <img src="/images/project${index + 1}.png" alt="${
            articleObject.title
          } project image" />
            </div>
            <div class="card-text">
              <p class="body-intro-med">${articleObject.title}</p>
              <p class="headline-reg">${articleObject.body}</p>
              <a class="link headline-reg" href="./project-page.html"
                >Learn more</a
              >
            </div>
          </div>`;
        }
      });
      document.querySelector(".cards-container").innerHTML = content;
    })
    .catch((error) => {});
}

fetchPosts();

// aqui estem fent un fetch, buscar la info dels 3 postssss d'un API

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

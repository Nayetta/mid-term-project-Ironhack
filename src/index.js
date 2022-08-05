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
              <img src="https://picsum.photos/352/9${index + 1}" alt="${
            articleObject.title
          } project image" />
            </div>
            <div class="card-text">
              <p class="body-intro-med lines-length">${articleObject.title}</p>
              <p class="headline-reg lines-length">${articleObject.body}</p>
              <a class="link headline-reg lines-length" href="./project-page.html"
                >Learn more</a
              >
            </div>
          </div>`;
        }
      });
      document.querySelector(".cards-container").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
      let content2 = "";
      content2 = `
          <div class="project-card">
            <div class="card-image">
              <img src="https://picsum.photos/352/984" alt="project image" />
            </div>
            <div class="card-text">
              <p class="body-intro-med">Not found</p>
              <p class="headline-reg">Not found</p>
              <a class="link headline-reg" href="./project-page.html"
                >Not found</a
              >
            </div>
          </div>`;
      document.querySelector(".cards-container").innerHTML = content2;
    });
}

fetchPosts();

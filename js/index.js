(function () {
  function scrollHead() {
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
  scrollHead();

  function scrollMyName() {
    const myNameLink = document.querySelector(".myName");
    myNameLink.addEventListener("click", function (event) {
      event.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  }
  scrollMyName();

  function hamMenu() {
    const $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");

    let menu = new Menu({
      container: ".nav-header",
      toggleBtn: ".header__btnMenu",
      widthEnabled: 768,
    });
  }
  hamMenu();

  function scrollMenu() {
    window.addEventListener("scroll", destacaMenu);
    const $menu = document.querySelector(".nav-header");
    const $links = document.querySelectorAll("li .menuScroll");
    let linkAtual = null;

    function destacaMenu() {
      let positions = [];
      for (let i = 0; i < $links.length; i++) {
        positions[i] = positionY($links[i]);
      }

      let lastLinkAtual = linkAtual;
      linkAtual = lastPositionLink(positions);

      if (lastLinkAtual !== linkAtual) {
        let linkActived = $menu.querySelector(".actived");
        if (linkActived) {
          linkActived.classList.remove("actived");
        }
        linkAtual.classList.add("actived");
      }
    }

    function positionY(link) {
      const alvo = document.querySelector(link.getAttribute("href"));
      const positionViewport = alvo.getBoundingClientRect().top;
      return positionViewport - 200;
    }

    function lastPositionLink(positions) {
      let qtd = positions.length;
      while (qtd) {
        qtd--;
        if (positions[qtd] < innerHeight / 2) {
          return $links[qtd];
        }
      }
      return $links[0];
    }

    destacaMenu();
  }

  scrollMenu();
})();

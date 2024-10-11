/*function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
  */

  let zoomLevel = 1;
  let rotation = 0;

  const MAX_ZOOM = 10;
  const MIN_ZOOM = 1;

  
  function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  
  function animatePlanets() {
    const planets = document.querySelectorAll(".container > div:not(.sun)");
    rotation += 1;
    planets.forEach((planet) => {
      if (planet.classList.contains("venus")) {
        planet.style.transform = `rotate(${rotation}deg)`;
      } else {
        planet.style.transform = `rotate(${-rotation}deg)`;
      }
    });
    requestAnimationFrame(animatePlanets);
  }

  function handleScroll(event) {
    if (event.deltaY > 0) {
      // decrease zoom speed as zoomLevel decrease
      zoomLevel -= zoomLevel / 10;
    } else {
      // Increase zoom speed as zoomLevel increases making it easier to zoom further
      zoomLevel += zoomLevel / 10;
    }
    if (zoomLevel <= MIN_ZOOM) {
      //avoid de-zooming more than the minZoom value
        zoomLevel = MIN_ZOOM;
    }
    if (zoomLevel >= MAX_ZOOM) {
      //avoid zooming more than the maxZoom value
      zoomLevel = MAX_ZOOM;
    }

    document.body.style.transform = `scale(${zoomLevel})`;
  }
  
  createStars();
  animatePlanets();
  
  document.addEventListener("wheel", handleScroll); 
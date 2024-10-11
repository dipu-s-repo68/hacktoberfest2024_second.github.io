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
      zoomLevel -= 0.1;
    } else {
      zoomLevel += 0.1;
    }
  
    document.body.style.transform = `scale(${zoomLevel})`;
  }
  
  createStars();
  animatePlanets();
  
  document.addEventListener("wheel", handleScroll); 
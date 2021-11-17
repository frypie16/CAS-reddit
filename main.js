console.log("what do u want");

var textPath = document.querySelector('#text-path');

function updateTextPathOffset(offset) {
  textPath.setAttribute('startOffset', offset)
}

function onScroll() {
  requestAnimationFrame(function() {
    updateTextPathOffset(window.scrollY * 1.5)
  })
}

window.addEventListener('scroll', onScroll);

const titles = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  })
})

titles.forEach(title => {
  observer.observe(title);
})

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const popup = document.querySelector('.full-img');
const popupText = document.querySelector('.caption');

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
  })
})

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains('modal')) {
    modal.classList.remove('open');
  }
})

// const firstLayer = document.querySelector("#Layer_1");
// const secondLayer = document.querySelector("#Layer_2");

// secondLayer.addEventListener("mouseover", respondMouseOver);

// function respondMouseOver(event) {
//     console.log("i'm running");
//     // tooltip.classList.add('show');
//     // const tooltipPara = tooltip.querySelector('style');
//     // tooltipPara.innerText = "i'm hovering wee"
//   }
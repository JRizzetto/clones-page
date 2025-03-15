// BOTÃO CURTIR
function btnCurtir() {
  const faHeart = document.querySelectorAll(".heart-icon"); 
  const likeNumber = document.querySelectorAll(".like-number");
  const sectionImgMini = document.querySelectorAll(".section-img-mini");
  const narutoLike = document.getElementById("narutoLike");
  const kakashiLike = document.getElementById("kakashiLike");

  faHeart.forEach((e, index) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();

      let likes = parseInt(likeNumber[index].dataset.likes);

      e.classList.toggle("fa-solid");
      e.classList.toggle("fa-regular");
      e.classList.toggle("solid");

      e.classList.add("pulse");
      setTimeout(() => {
        e.classList.remove("pulse");
      }, 300);

      if(e.classList.contains("solid")) {
        likes++;
        likeNumber[index].dataset.likes = likes;
        likeNumber[index].textContent = `${likes} curtidas`

        const div = document.createElement("div");
        div.classList.add("like-avatar");
        const img = document.createElement("img");
        div.appendChild(img);
        img.src = "./img/naruto-img.jpg"
        sectionImgMini[index].appendChild(div);
      }else if(e.classList.contains("fa-regular")) {
        likes--;
        likeNumber[index].dataset.likes = likes;
        likeNumber[index].textContent = `${likes} curtidas`
        
        const lastChild = sectionImgMini[index].lastElementChild;
        if(lastChild) {
          sectionImgMini[index].removeChild(lastChild)
        }
      }

    })
  })

  narutoLike.addEventListener("click", () => {
    narutoLike.classList.toggle("fa-solid");
    narutoLike.classList.toggle("fa-regular");
    narutoLike.classList.toggle("solid");

    narutoLike.classList.add("pulse");
    setTimeout(() => {
      narutoLike.classList.remove("pulse");
    }, 300);

    const textoCurtir = document.getElementById("textoCurtir");
    if(narutoLike.classList.contains("fa-solid")) {
      textoCurtir.innerHTML = "54 curtidas";
    }else {
      textoCurtir.innerHTML = "53 curtidas";
    }
  })

  kakashiLike.addEventListener("click", () => {
    kakashiLike.classList.toggle("fa-solid");
    kakashiLike.classList.toggle("fa-regular");
    kakashiLike.classList.toggle("solid");

    kakashiLike.classList.add("pulse");
    setTimeout(() => {
      kakashiLike.classList.remove("pulse");
    }, 300);

    const textoCurtirKakashi = document.getElementById("textoCurtirKakashi");
    if(kakashiLike.classList.contains("fa-solid")) {
      textoCurtirKakashi.innerHTML = "48 curtidas";
    }else {
      textoCurtirKakashi.innerHTML = "47 curtidas";
    }
  })


}
btnCurtir();

// BOTÃO SALVAR
function btnSalvar() {
  const faBookmark = document.querySelectorAll(".fa-bookmark");

  faBookmark.forEach(e => {
    e.addEventListener("click", () => {
      e.classList.toggle("fa-solid");
      e.classList.toggle("fa-regular");
    })
  })
}
btnSalvar();

// FAZER COMENTÁRIO
function fazerComentario() {
  const faComment = document.querySelectorAll(".fa-comment");
  const sectionComment = document.getElementById("sectionComment");
  const faXmark = document.getElementById("fa-xmark");

  faComment.forEach(e => {
    e.addEventListener("click", () => {
      sectionComment.classList.toggle("hidden");
    })
  })

  faXmark.addEventListener("click", () => {
    sectionComment.classList.toggle("hidden");
  })

}
fazerComentario();

// SEÇÃO DE STORIES
function slideStories() {
  const storyHidden = document.getElementById("story-hidden");
  const storySlider = document.querySelectorAll(".story-slider");

  let currentPosition = 0;
  let positionActive = 0

  function addEventListener() {
    const faCircleLeft = document.getElementById("fa-circle-left");
    const faCircleRight = document.getElementById("fa-circle-right");

    if(!storySlider[0].classList.contains("active")) {
      const sizeActive = storySlider[0].offsetWidth;
      slideWidth = sizeActive + 50;
    }else {
      const sizeActive = storySlider[1].offsetWidth;
      slideWidth = sizeActive + 50;
    }

   faCircleLeft.addEventListener("click", () => {
            btnLeft();
            progressLeftt();
            progressStory();
      });

      function btnLeft() {
        if(positionActive > 0) {
          storySlider[positionActive].classList.toggle("active");
          positionActive--;
          currentPosition += slideWidth;
          storyHidden.style.transform = `translateX(${currentPosition}px)`;
          storySlider[positionActive].classList.toggle("active");
    
          createBtn();
          addEventListener();
        }
      }

    faCircleRight.addEventListener("click", () => {
          btnRight();
          progressRight();
          progressStory();
      });

      function btnRight() {
        if (positionActive < storySlider.length - 1) { 
          storySlider[positionActive].classList.toggle("active");
          positionActive++; 
          currentPosition -= slideWidth;
          storyHidden.style.transform = `translateX(${currentPosition}px)`;
          storySlider[positionActive].classList.toggle("active"); 
    
          createBtn();
          addEventListener();
        }
      }

    // PROGRESS STORY ACTIVE
    function progressStory() {
        const progressBar = document.querySelectorAll(".progress");
        let timeLeft = 0;
        const totalTime = 5;
        progressBar.forEach(bar => bar.style.width = "0%");
        
        if(storySlider[positionActive].classList.contains("active")) {
          const faCircleLeft = document.getElementById("fa-circle-left");
          const faCircleRight = document.getElementById("fa-circle-right");
          // TIMER PROGRESS
          function updateProgressbar() {
            if(timeLeft < totalTime) {
              timeLeft++;
            }
            const percentage = (timeLeft / totalTime) * 100;
            progressBar[positionActive].style.width = percentage + '%';
  
            if(timeLeft === totalTime) {
              clearInterval(interval);
              timeLeft = 0;
              btnRight();
              progressRight();
            }

            faCircleLeft.addEventListener("click", () => {
              clearInterval(interval);
            })

            faCircleRight.addEventListener("click", () => {
              clearInterval(interval);
            })
          }
          const interval = setInterval(updateProgressbar, 1000);
        }
      }
      progressStory();
  }

  // CRIAR BOTÕES DE PRÓXIMO E ANTERIOR 
  function createBtn() {
    const faCircleLeft = document.getElementById("fa-circle-left");
    const faCircleRight = document.getElementById("fa-circle-right");

    if (faCircleLeft) faCircleLeft.remove();
    if (faCircleRight) faCircleRight.remove();

    if(storySlider[positionActive].classList.contains("active")) {
      const leftI = document.createElement("i");
      storySlider[positionActive].appendChild(leftI);
      leftI.classList.add("fa-regular", "fa-circle-left");
      leftI.id = "fa-circle-left";

      const rightI = document.createElement("i");
      storySlider[positionActive].appendChild(rightI);
      rightI.classList.add("fa-regular", "fa-circle-right");
      rightI.id = "fa-circle-right";
    }
  }
  createBtn();

  // SEÇÃO BARRA DE PROGRESSO HIDDEN
  function progressRight() {
        positionActive;
        const progressContainer = document.querySelectorAll(".progress-container");
        progressContainer[positionActive].classList.toggle("hidden");
        progressContainer[positionActive -1].classList.toggle("hidden");
  }

  function progressLeftt() {
      positionActive;
      const progressContainer = document.querySelectorAll(".progress-container");
      progressContainer[positionActive].classList.toggle("hidden");
      progressContainer[positionActive +1].classList.toggle("hidden");
  }

    // SEÇÃO ABRIR STORIES
    function storyOpen() {
      const storyModal = document.getElementById("storyModal");
      const storyClass = document.querySelectorAll(".story-class");
      storyClass.forEach(e => {
        e.addEventListener("click", () => {
          storyModal.classList.toggle("hidden");
        })
      })
    }
    storyOpen();
  
    // FECHAR SEÇÃO DE STORIES
    function storyClose() {
      const storyModal = document.getElementById("storyModal");
      const faXmarkModal = document.getElementById("fa-xmarkModal");
      faXmarkModal.addEventListener("click", () => {
        storyModal.classList.toggle("hidden");
      })
    }
    storyClose();
  
  addEventListener();
}
slideStories();




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


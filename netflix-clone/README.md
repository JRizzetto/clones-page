# Clone da Página da Netflix

Este é um projeto simples que replica a interface da Netflix utilizando HTML, CSS e JavaScript. A página contém funcionalidades interativas como dropdown, carrossel de imagens, seção de perguntas frequentes e troca de idiomas entre português e inglês.

## Funcionalidades

- **Dropdown**: Um menu suspenso que exibe opções de idioma.
- **Carrossel de Imagens**: Permite navegar pelas imagens em alta com um scroll horizontal.
- **Seção de Perguntas Frequentes**: Expansão e colapso de perguntas frequentes com base no clique.
- **Troca de Idiomas**: Capacidade de alternar entre português e inglês com base nas traduções predefinidas.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **DOM Manipulation** (para interação dinâmica com os elementos da página)
  
## Funcionalidades Implementadas em JavaScript

- **Dropdown Menu**: O código permite abrir e fechar um menu suspenso com opções de idioma. 
  ```javascript
  dropdownButton.addEventListener("click", (event) => {
      dropdownContent.classList.toggle("hidden");
      event.stopPropagation();
  })
  document.addEventListener("click", (event) => {
      if (!dropdownContent.classList.contains("hidden") && !dropdownButton.contains(event.target)) {
          dropdownContent.classList.add("hidden");
      }
  });


> Carrossel de Imagens em Alta: O carrossel de imagens pode ser rolado horizontalmente, e o botão de navegação aparece somente quando o usuário está em uma posição de scroll que permite movimentação.

```javascript
function scrollCarrossel(distance) {
    const emaltaDiv = document.getElementById("emalta-div");
    const btnLeft = document.getElementById("scroll-btn-left");
    emaltaDiv.scrollBy({ left: distance, behavior: "smooth" });
    if(emaltaDiv.scrollLeft == 0) {
        btnLeft.classList.add("hidden");
    } else {
        btnLeft.classList.remove("hidden");
    }
}

> Perguntas Frequentes: Implementação de uma funcionalidade para abrir e fechar as perguntas frequentes, fechando as outras seções ao abrir uma nova.

const detailsElements = document.querySelectorAll(".perguntas-frequentes details");
detailsElements.forEach(details => {
    details.addEventListener("click", () => {
        detailsElements.forEach(item => {
            if(item !== details) {
                item.removeAttribute('open');
            }
        })
    })
})

> Troca de Idiomas: O código permite alternar entre dois idiomas (português e inglês) e alterar o conteúdo da página dinamicamente com base no idioma selecionado.

const translations = { /* Traduções aqui */ };
function switchLanguage(language) {
    const elementsToChange = document.querySelectorAll("[data-translate]");
    elementsToChange.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

Como Rodar o Projeto

1 - Clone este repositório:
git clone https://github.com/SeuUsuario/clone-netflix.git

2 - Navegue até o diretório do projeto:
cd clone-netflix

3 - Abra o arquivo index.html no seu navegador para visualizar a página.
Contribuições
Se você deseja contribuir com este projeto, fique à vontade para abrir issues ou pull requests.

Licença
Este projeto é de código aberto e disponível sob a licença MIT.


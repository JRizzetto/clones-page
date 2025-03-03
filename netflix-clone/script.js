const dropdownContent = document.getElementById("dropdown-content");
const dropdownButton = document.getElementById("dropdown-button");

dropdownButton.addEventListener("click", (event) => {
    dropdownContent.classList.toggle("hidden");
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    if (!dropdownContent.classList.contains("hidden") && !dropdownButton.contains(event.target)) {
        dropdownContent.classList.add("hidden");
    }
});

// Carrossel das imagens em alta 
function scrollCarrossel(distance) {
    const emaltaDiv = document.getElementById("emalta-div");
    const btnLeft = document.getElementById("scroll-btn-left");

    if (!emaltaDiv) {
        console.error("Elemento com ID 'emalta-div' não encontrado.");
        return;
    }

    // Faz o scroll horizontal suavemente
    emaltaDiv.scrollBy({
        left: distance,
        behavior: "smooth"
    });


    if(emaltaDiv.scrollLeft == 0) {
        btnLeft.classList.add("hidden");
    }else {
        btnLeft.classList.remove("hidden");
    }
}

// Seção de perguntas frequentes
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

// textos em inglês
const translations = {
    pt: {
        buttonText: "Português",
        enterText: "Entrar",
        mainSectionH1: "Filmes, séries e muito mais, sem limites",
        mainSectionH2: "A partir de R$ 20,90. Cancele quando quiser",
        mainSectionP: "Quer assistir? Informe seu email para criar ou reiniciar sua assinatura",
        mainSectionBtn: "Vamos lá",
        netflixText: "A Netflix que você adora por apenas R$ 20,90.",
        affordablePlanText: "Aproveite nossa opção mais acessível, o plano com anúncios.",
        learnMoreText: "Saiba mais",
        trendingText: "Em alta",
        moreReasonsText: "Mais motivos para assinar",
        enjoyOnTVText: "Aproveite na TV",
        watchOnDevicesText: "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
        downloadForOfflineText: "Baixe séries para assistir offline",
        saveTitlesText: "Salve seus títulos favoritos e sempre tenha algo para assistir.",
        watchAnywhereText: "Assista onde quiser",
        createProfilesForKidsText: "Crie perfis para crianças",
        kidsContentText: "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
        frequentQuestionsText: "Perguntas Frequentes",
        whatIsNetflixText: "O que é a Netflix?",
        netflixDescriptionText: "A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.",
        howMuchIsNetflixText: "Quanto custa a Netflix?",
        netflixPriceText: "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.",
        whereToWatchText: "Onde posso assistir?",
        whatCanIWatchText: "O que eu posso assistir na Netflix?",
        netflixContentText: "A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.",
        isNetflixGoodForKidsText: "A Netflix é adequada para crianças?",
        kidsExperienceText: "A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.",
        wantToWatchText: "Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.",
        letsGoText: "Vamos lá",
        howToCancelText: "Como faço para cancelar?",
        contactUsText: "Dúvidas? Ligue para <a href=\"#\">0800 591 2876</a>",
        faqText: "Perguntas frequentes",
        helpCenterText: "Central de Ajuda",
        accountText: "Conta",
        mediaCenterText: "Media Center",
        investorRelationsText: "Relações com investidores",
        careersText: "Carreiras",
        redeemPrepaidCardText: "Resgatar cartão pré-pago",
        buyPrepaidCardText: "Comprar cartão pré-pago",
        waysToWatchText: "Formas de assistir",
        termsOfUseText: "Termos de Uso",
        privacyText: "Privacidade",
        cookiePreferencesText: "Preferências de cookies",
        corporateInfoText: "Informações corporativas",
        contactUsText: "Entre em contato",
        speedTestText: "Teste de velocidade",
        legalNoticesText: "Avisos legais",
        onlyOnNetflixText: "Só na Netflix",
        netflixBrazilText: "Netflix Brasil"
    },
    en: {
        buttonText: "English",
        enterText: "Enter",
        mainSectionH1: "Movies, series, and much more, with no limits",
        mainSectionH2: "Starting at R$ 20.90. Cancel anytime",
        mainSectionP: "Want to watch? Provide your email to create or restart your subscription",
        mainSectionBtn: "Let's go",
        netflixText: "The Netflix you love for only R$ 20.90.",
        affordablePlanText: "Take advantage of our most affordable option, the ad-supported plan.",
        learnMoreText: "Learn more",
        trendingText: "Trending",
        moreReasonsText: "More reasons to subscribe",
        enjoyOnTVText: "Enjoy on TV",
        watchOnDevicesText: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and other devices.",
        downloadForOfflineText: "Download series to watch offline",
        saveTitlesText: "Save your favorite titles and always have something to watch.",
        watchAnywhereText: "Watch anywhere",
        createProfilesForKidsText: "Create profiles for kids",
        kidsContentText: "Let kids enjoy their favorite characters in a space made just for them, without paying extra for it.",
        frequentQuestionsText: "Frequently Asked Questions",
        whatIsNetflixText: "What is Netflix?",
        netflixDescriptionText: "Netflix is a streaming service offering a wide variety of award-winning series, films, and documentaries across thousands of internet-connected devices. You can watch as many movies and series as you want, anytime and anywhere – all for an affordable monthly price. Here you will always find new content. Every week, we add new series and films.",
        howMuchIsNetflixText: "How much does Netflix cost?",
        netflixPriceText: "Watch Netflix on your phone, tablet, Smart TV, laptop, or streaming device for a single monthly fee. Plans range from R$ 20.90 to R$ 59.90 per month. No contracts, no extra fees.",
        whereToWatchText: "Where can I watch?",
        whatCanIWatchText: "What can I watch on Netflix?",
        netflixContentText: "Netflix has a huge catalog of movies, documentaries, series, award-winning Netflix originals, and much more. Watch as much as you want, whenever you want.",
        isNetflixGoodForKidsText: "Is Netflix suitable for kids?",
        kidsExperienceText: "Netflix's kids' experience is included with your subscription so kids can enjoy a space made just for them, with family-friendly series and films under parental supervision. The parental control feature, included in kids' profiles and protected by PIN, allows you to restrict the content rating kids can see and block specific titles you don’t want them to watch.",
        wantToWatchText: "Want to watch? Provide your email to create or restart your subscription.",
        letsGoText: "Let's go",
        howToCancelText: "How do I cancel?",
        contactUsText: "Questions? Call <a href=\"#\">0800 591 2876</a>",
        faqText: "Frequently Asked Questions",
        helpCenterText: "Help Center",
        accountText: "Account",
        mediaCenterText: "Media Center",
        investorRelationsText: "Investor Relations",
        careersText: "Careers",
        redeemPrepaidCardText: "Redeem prepaid card",
        buyPrepaidCardText: "Buy prepaid card",
        waysToWatchText: "Ways to watch",
        termsOfUseText: "Terms of Use",
        privacyText: "Privacy",
        cookiePreferencesText: "Cookie Preferences",
        corporateInfoText: "Corporate Information",
        contactUsText: "Contact Us",
        speedTestText: "Speed Test",
        legalNoticesText: "Legal Notices",
        onlyOnNetflixText: "Only on Netflix",
        netflixBrazilText: "Netflix Brazil"
    }
};

function switchLanguage(language) {
    const elementsToChange = document.querySelectorAll("[data-translate]");

    elementsToChange.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key]; // Alterando o texto do elemento com base na tradução
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll("#dropdown-content a");
    
    dropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que a página recarregue ao clicar

            const selectedLanguage = this.getAttribute("data-language");
            switchLanguage(selectedLanguage); // Chama a função para trocar o idioma
        });
    });
});



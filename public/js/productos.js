// Inicio Renderización de productos

// array de productos

let products = [{ image: "../assets/img/torta_arcoIris.png", name: "Torta Arco Iris", price: 3700, "id": 1 },
    { image: "../assets/img/pikachu.png", name: "Torta Pikachu", price: 4100, "id": 2 },
    { image: "../assets/img/cookieStich.png", name: "Cookie Stich", price: 150, "id": 3 },
    { image: "../assets/img/cookieDino.png", name: "Cookie Dino", price: 130, "id": 4 },
    { image: "../assets/img/tortaRosa.png", name: "Torta Rosa", price: 4000, "id": 5 },
    { image: "../assets/img/funBox.png", name: "Fun Box", price: 1500, "id": 6 },
    { image: "../assets/img/olafCookie.png", name: "Docena Cookie Olaf", price: 2000, "id": 7 },
    { image: "../assets/img/Torta_Chimuelo.png", name: "Torta Chimuelo", price: 3700, "id": 8 },
    { image: "../assets/img/hulk.png", name: "Torta Hulk", price: 4500, "id": 9 },
    { image: "../assets/img/cookieMundo.png", name: "Cookie Mundo", price: 130, "id": 10 },
    { image: "../assets/img/TortaBautismo.png", name: "Torta Bautismo", price: 3700, "id": 11 },
    { image: "../assets/img/cookieCamion.png", name: " Docena Cookies Camión", price: 1600, "id": 12 },
    { image: "../assets/img/cookiesDocena.png", name: "Docena Cookies Navideñas", price: 1560, "id": 13 },
    { image: "../assets/img/CookiesHelado.png", name: "Cookie Helado", price: 130, "id": 14 }
]



const renderizarT = () => {

    let html = ""

    html += ` 
    <div class="image"><img src="./assets/img/torta_arcoIris.png" alt="torta"></div>
    <div class="image"><img src="./assets/img/TortaBautismo.png" alt="torta"></div>
    <div class="image"><img src="./assets/img/Torta_Chimuelo.png" alt="torta"></div>
    <div class="image"><img src="./assets/img/tortaBatman.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaPokemon.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaSpiderman.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaFondant.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaMujerMaravilla.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaNakedFlores.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/tortaHulk.png" alt="cookie"></div>
    `

    document.getElementById("galeriaProductos").innerHTML = html

    document.querySelectorAll('#galeriaProductos img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }

    });

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }

}

const renderizarC = () => {

    let html = ""

    html += ` 
    <div class="image"><img src="./assets/img/cookieDino.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesDocena.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookieStich.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesBautismo.jpg" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesPascua.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesFondant.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesFridaKalo.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesHalloween.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesLOL.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesMarioSonic.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesMonstersInc.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cookiesViaje.png" alt="cookie"></div>
    `

    document.getElementById("galeriaProductos").innerHTML = html

    document.querySelectorAll('#galeriaProductos img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }

    });

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }

}

const renderizarFB = () => {

    let html = ""

    html += ` 
    <div class="image"><img src="./assets/img/funBox.png" alt="funbox"></div>
    <div class="image"><img src="./assets/img/funBox2.png" alt="funbox"></div>
    <div class="image"><img src="./assets/img/funBox3.png" alt="funbox"></div>
    `

    document.getElementById("galeriaProductos").innerHTML = html

    document.querySelectorAll('#galeriaProductos img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }

    });

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }

}

const renderizarCC = () => {

    let html = ""

    html += ` 
    <div class="image"><img src="./assets/img/cupcakes1.png" alt="cupcake"></div>
    <div class="image"><img src="./assets/img/cupcakeFerrero.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cupcakeMinions.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cupcakeGeorgi.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cupcakesJovenesTitanes.png" alt="cookie"></div>
    <div class="image"><img src="./assets/img/cupcakeMinecraft.png" alt="cookie"></div>
    `

    document.getElementById("galeriaProductos").innerHTML = html

    document.querySelectorAll('#galeriaProductos img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }

    });

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
    }

}



function renderizarTortas() {
    renderizarT()

}

function renderizarCookies() {
    renderizarC();
}

function renderizarFunbox() {
    renderizarFB();
}

function renderizarCupcakes() {
    renderizarCC();
}
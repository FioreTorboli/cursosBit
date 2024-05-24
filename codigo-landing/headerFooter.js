const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="header">
    <nav class="nav">
        <div class="logo">
            <a href="landing.html"><img src="./img/1LOGO.png" alt="logo"></a>
        </div>

        <input type="checkbox" id="check">

        <label for="check" class="icons">
            <i class='bx bx-menu' id="menu-icon"></i>
            <i class='bx bx-x' id="close-icon"></i>
        </label>

        <div class="nav-bar">
            
                <a href="./sobre_nosotros.html">Sobre nosotros</a>
                <a href="#">Cursos</a>
                <a href="#"><img src="./img/carrito V.png" alt=""></a>
                <a href="./login.html">Iniciar sesion</a>
                <a href="./register.html"><button class="btm">REGISTRARSE</button></a>
            
        </div>
    </nav>
</div>
`;

footer.innerHTML = `
<div class="footer">
        <div class="left">
            <img src="./img/1logo-blanco.png" alt="">
            <p>Políticas de Privacidad | Términos y Condiciones</p>
        </div>
        <div class="right">
            <p>Buscanos en redes</p>
            <div class="icon-redes">
                <a href="#"><img class="ig" src="./img/instagram-logo-240.png" alt="instagram"></a>
                <a href="#"><img class="in" src="./img/linkedin-logo-240.png" alt="linkedin"></a>
            </div>
        </div>

    </div>
`;

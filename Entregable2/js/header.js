class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header>

            <!--Boton hamburghuesa-->
            <button class="hamburger-menu"
            aria-label="Abrir menú de navegación"
            aria-expanded="false"
            aria-controls="main-nav">
            &#9776;
            </button>

            <!--Menu nav-->
            <nav id="main-nav">
                <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nuevos.html">Nuevos</a></li>
                <li><a href="populares.html">Populares</a></li>
                <li><a href="favoritos.html">Favoritos</a></li>
                <li><a href="todaslascat.html">Todas las categorias</a></li>
                <li><a href="accion.html">Accion</a></li>
                <li><a href="arcade.html">Arcade</a></li>
                <li><a href="aventuras.html">Aventuras</a></li>
                <li><a href="cocina.html">Cocina</a></li>
                <li><a href="conducir.html">Conducir</a></li>
                <li><a href="deportes.html">Deportes</a></li>
                <li><a href="estrategia.html">Estrategia</a></li>
                <li><a href="gestion.html">Gestion</a></li>
                <li><a href="objetoscoultos.html">Objetos ocultos</a></li>
                <li><a href="rompecabezas.html">Rompecabezas</a></li>
                <li><a href="jugadores2.html">2 Jugadores</a></li>
                <li><a href="multijugador.html">Multijugador</a></li>
                </ul>
            </nav>

            <!--Logo imagen-->
            <img src="logo imagen">

            <!--Barra de busqueda-->

            <!--Perfil, foto -> link a perfil.html-->

        </header>
        `;
    }
}
customElements.define("my-header", Header);
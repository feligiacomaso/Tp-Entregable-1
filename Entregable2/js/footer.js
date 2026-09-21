class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="org-horizontal">
                    <div>
                        <p class="t2">Comunidad</p>
                        <ul>
                        <li><a href="foro.html">Foro</a></li>
                        <li><a href="discord.html">Discord</a></li>
                        <li><a href="noticias.html">Noticias</a></li>
                        <li><a href="redessoc.html">Redes sociales</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="t2">Juegos</p>
                        <ul>
                        <li><a href="todos.html">Todos los juegos</a></li>
                        <li><a href="gratuitos.html">Juegos gratuitos</a></li>
                        <li><a href="populares.html">Juegos mas populares</a></li>
                        <li><a href="nuevos.html">Nuevos lanzamientos</a></li>
                        <li><a href="proximamente.html">proximamente</a></li>
                        <li><a href="todaslascat.html">Categorias</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="t2">Tienda</p>
                        <ul>
                        <li><a href="comprarjuegos.html">Comprar juegos</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="giftcard.html">Gift card</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="t2">Ayuda</p>
                        <ul>
                        <li><a href="centroayuda.html">Centro de ayuda</a></li>
                        <li><a href="qa.html">Preguntas frecuentes</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                        <li><a href="soportetec.html">Soporte tecnico</a></li>
                        <li><a href="termycond.html">Terminos y condiciones</a></li>
                        <li><a href="polprivacidad.html">Politicas de privacidad</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="t2">Mi perfil</p>
                        <ul>
                        <li><a href="perfil.html">Perfil</a></li>
                        <li><a href="favoritos.html">Favoritos</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="configuracion.html">Configuracion</a></li>
                        <li><a href="cerrarsesion.html">Cerrar sesion</a></li>
                        </ul>
                    </div>
                </div>
                <!--Logo imagen redireccion inicio?-->
                <img>
                <p>Copyright © 2026 Game.House. Todos los derechos reservados.</p>
                
            </footer>
        `;
    }
}
customElements.define("my-footer", Footer);
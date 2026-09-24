document.addEventListener( 'DOMContentLoaded' , () => {


    
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');

  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton.getAttribute( 'aria-expanded' ) === 'true' ;
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded ) ;
    mainNav.classList.toggle( 'nav-open' ) ; // Alterna la clase 'nav-open'
  } ) ;

  // Cierra el menu si se hace clic fuera de el en dispositivos moviles
  document.addEventListener( 'click' , (event) => {
    if( !mainNav.contains( event.target ) &&
        !hamburgerButton.contains( event.target ) &&
        mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ;
      mainNav.classList.remove( 'nav-open' ) ;
    }
  } ) ;
  
  
    const pantallaCarga = document.getElementById('loading-screen');
    const porcentaje = document.getElementById('loading-percent');
    const circulo = document.querySelector('.loading-circle');

    let progreso = 0;

    const carga = setInterval(() => {
        progreso++;
        porcentaje.textContent = `${progreso}%`;
        circulo.style.background =
            `conic-gradient(#F7C544 ${progreso}%, #263b36 ${progreso}%)`;

        if (progreso === 100) {
            clearInterval(carga);
            pantallaCarga.remove();
        }
    }, 50);
} ) ;



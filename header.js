//header ,footer
 

class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =" <nav>   <div class='hamburger'><div class='line1'></div> <div class='line2'></div> <div class='line3'></div> </div><ul class='nav-links> <li><a href='#'></a></li>   <li><a>Startseite</a></li>           <li><a href='./heilgespraeche.html'>Heilgespräche</a></li> <li><a href='./Vita.html'>Vita</a></li> <li><a href='#Kontakt'>Kontakt</a></li> <li> <div class='phone'><a href='tel:1069696969'>🕽</a></div></li> </ul></></nav> "
      alert(123)
    
    }
    }
    
    customElements.define('my-header', Myheader)

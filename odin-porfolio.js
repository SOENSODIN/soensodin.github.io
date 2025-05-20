// JavaScript Document
var nameChange = document.getElementById("naam")
var unit = document.documentElement.scrollHeight / 100;
var x = document.getElementById("myLinks");


	/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
			x.style.display = "none";
		} 
		else {
    	x.style.display = "block";
	}
}


	function change(x) {
  x.classList.toggle("change");
}
	function scrollNaarBeneden(tekst) {
        window.scrollTo({
            top: 260 * unit,   // het aantal pixels om naar beneden te scrollen
            left: 0,     // geen horizontale scroll
            behavior: 'smooth' // maakt de scroll beweging vloeiend
        });
    }
document.getElementById('openFilterMenu').addEventListener('click', function() {
    const menu = document.getElementById('container_filterbuttons');
    menu.classList.toggle('active');
});

/* auré/meet-jquery
 *
 * /src/js/scripts.js - Main scripts
 *
 * coded by auré
 * started at 13.02.17
 */

 const fHandleTabClick = function(oEvent){

 	oEvent.preventDefault();
 	const $target = oEvent.currentTarget;

 	if($target.parentNode.classList.contains("active")){
 		return;
 	}

 	document.querySelector( "ul.nav-tabs li.active" ).classList.remove("active"); // enleve la classe active
 	$target.parentNode.classList.add("active"); // ajoute une classe active
 	document.querySelector(".tab-content .tab-pane.active").classList.remove("active"); // on va remettre du contenu dans l'elt actif
 	document.getElementById($target.getAttribute("data-tab-target")).classList.add("active");
 };

// When page loads
window.addEventListener("load", function(){

	// 1. select a with rel-external attributes
	Array.from(document.querySelectorAll( 'a[rel*="external"]')).forEach( function( $elt){

		$elt.setAttribute("target", "_new");
	});

	// 2. tab mecanism
	Array.from(document.querySelectorAll( 'ul.nav.nav-tabs a' )).forEach(function($elt){

		$elt.addEventListener("click", fHandleTabClick);
	});
});
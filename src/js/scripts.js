/* auré/meet-jquery
 *
 * /src/js/scripts.js - Main scripts
 *
 * coded by auré
 * started at 13.02.17
 */

// When page loads
window.addEventListener("load", function(){

	// 1. select a with rel-external attributes
	Array.from(document.querySelectorAll( 'a[rel*="external"]')).forEach( function( $elt){

		$elt.setAttribute("target", "_new");
	});
});
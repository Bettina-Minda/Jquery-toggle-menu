let lista1 = document.getElementById('lista');




jQuery(document).ready( function() {

	jQuery('a.test').click( function(ev) {

		ev.preventDefault();
		
		let sublist_el = jQuery('#lista > li > #sublist');

		sublist_el.toggle();
	
	});

    jQuery('a.test1').click( function(ev) {

		ev.preventDefault();
		
		let sublist_el1 = jQuery('#lista > li > #sublist1');

		sublist_el1.toggle();
	
	});


    jQuery('a.test2').click( function(ev) {

		ev.preventDefault();
		
		let sublist_el1 = jQuery('#lista > li > #sublist2');

		sublist_el1.toggle();
	
	});
});
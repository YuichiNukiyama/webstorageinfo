 /*
 * webstorageinfo
 *
 * Copyright 2015 Nukiyama Yuichi
 * Released under the MIT license
 * 
 * Date: 2015-1-1
 */

; (function ( $ ) {
$.fn.webStorageInfo = function(){
	//init
	$( ".storageContainer" ).remove();
	//Storage
  var local = window.localStorage,
      session = window.sessionStorage;

	//Tables
  var table,
			caption,
			tr,
			th,
			td;

	//CSS settings
  var tableCss = {
		"table-layout": "auto",
		"border": "1px solid #ccc",
		"border-collapse": "separate",
		"border-spacing": "0.5px",
		"min-height": ".01%",
		"width": "80%",
		"overflow-x":"auto"
		},
		captionCss = {
			"background-color": "pink"
    },
    thCss = {
			"padding": "4px",
			"marigin": "2px",
			"background-color": "#ccc",
			"border": "1px solid black",
			"width": "40%",
			"text-align": "left"
    },
		tdCss = {
	    "padding": "4px",
	    "marigin": "2px",
	    "border": "1px solid black",
			"width": "60%"
		},
    containerDivCss = {
      "word-wrap": "break-word",
			"margin-right": "auto",
			"margin-left": "auto"
  };

    //responsive
	if (window.matchMedia("(max-width: 767px)").matches) {
	    var responsiveCss = {
	        "width":"100%",
	        "margin-bottom": "15px",
	        "overflow-y":"hidden",
	        "-ms-overflow-style": "-ms-autohiding-scrollbar"
	    }
	    $.extend(tableCss, responsiveCss);
	}

	//container
	var containerDiv = $("<div>").css(containerDivCss).addClass( "storageContainer" ),
			div;

	//basic information
	div = $("<div>");
	table = $("<table>");
	table.css(tableCss);

	//create caption
	caption = $( "<caption>" );
	caption.css( captionCss );
	caption.text( "■General Information" );
	table.append( caption );

	//show UserAgent
	tr = $( "<tr>" );
	th = $( "<th>" ).text( "UserAgent" ).css( thCss );
	td = $( "<td>" ).text( navigator.userAgent ).css( tdCss );
	tr.append( th ).append( td );
	table.append(tr);

  //show Domain
	tr = $( "<tr>" );
	th = $( "<th>" ).text( "origin" ).css( thCss );
	td = $( "<td>" ).text( location.origin ).css( tdCss );
	tr.append( th ).append( td );
	table.append( tr );

	//show Support
	tr = $( "<tr>" );
	th = $( "<th>" ).text( "Support of WebStorage" ).css( thCss );
	td = $( "<td>" ).css( tdCss );
	if( session && local ){
		td.text( "true" );
	}else{
		td.text( "false" );
	}
	tr.append( th ).append( td );
	table.append( tr );
	div.append( table );
	containerDiv.append( div );

	//Session Storage information
	if ( session && session.length > 0 ) {
		
	  div = $( "<div>" );
	  table = $( "<table>" );
	  table.css( tableCss );
		table.addClass( "session" );

		//create caption
	  caption = $( "<caption>" );
	  caption.css( captionCss );
	  caption.text( "■Session Storage Information" );
	  table.append( caption );
		tr = $( "<tr>" );
		th = $( "<th>" ).text( "Name" ).css( thCss );
		td = $( "<th>" ).text( "Value" ).css( thCss );
		tr.append( th ).append( td );
		table.append( tr );
		
		for( var i = 0; i <= session.length - 1; i++){
			var key = session.key( i );
			var value = session.getItem( key );
			
			tr = $( "<tr>" );
			td = $( "<td>" ).text( key ).css( tdCss );
			tr.append( td );
			
			td = $( "<td>" ).text( value ).css( tdCss );
			tr.append( td );
			table.append( tr );
		}

	  //append to container
	  div.append( table );
	  containerDiv.append( div ); 
	}
	
		//Local Storage information
	if ( local && local.length > 0 ) {
		
	  div = $( "<div>" );
	  table = $( "<table>" );
	  table.css( tableCss ).addClass( "local" );

		//create caption
	  caption = $( "<caption>" );
	  caption.css( captionCss );
	  caption.text( "■Local Storage Information" );
	  table.append( caption );
		tr = $( "<tr>" );
		th = $( "<th>" ).text( "Name" ).css( thCss );
		td = $( "<th>" ).text( "Value" ).css( thCss );
		tr.append( th ).append( td );
		table.append( tr );
		
		for( var i = 0; i <= local.length - 1; i++){
			var key = local.key( i );
			var value = local.getItem( key );
			
			tr = $( "<tr>" );
			td = $( "<td>" ).text( key ).css( tdCss );
			tr.append( td );
			
			td = $( "<td>" ).text( value ).css( tdCss );
			tr.append( td );
			table.append( tr );
		}

	  //append to container
	  div.append( table );
	  containerDiv.append( div ); 
	}
	
	//add container to body element
	$( "body" ).append( containerDiv );
};

//add event
window.onstorage = $().webStorageInfo;

})( jQuery );
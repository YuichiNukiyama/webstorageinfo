QUnit.module( "SessionStorage" );
QUnit.test( "SessionStorage test", function( assert ) {
	/*Notice:QUnit internally uses SessionStorage to count number of test.
	So, this test's consider this. */
	
	//init
	window.sessionStorage.clear();
	$().webStorageInfo();
	
	//test1
	var sessionTable = document.querySelector( "table.session" );
	assert.equal( sessionTable, null, "Table is not exist when session storage is empty." );
	
	//test2 
	var done1 = assert.async();
	window.sessionStorage.setItem( "foo", "bar" );
	setTimeout( function() {
		var td1 = $( "table.session tr:last" ).find( "td:last" ).text();
		assert.equal( td1, "bar", "Add Data." );
		done1();
	} );
	
	//test3
	var done2 = assert.async();
	window.sessionStorage.setItem( "hoge", "bar" );
	setTimeout( function() {
		var td2 = $( "table.session tr:last" ).find( "td:last" ).text();
		assert.equal( td2, "bar", "Add Data, again." );
		done2();
	} );
});
QUnit.module( "LocalStorage" );
QUnit.test( "LocalStorage test", function( assert ) {
	//init
	window.localStorage.clear();
	$().webStorageInfo();
	
	//test1
	var localTable = document.querySelector( "table.local" );
	assert.equal( localTable, null, "Table is not exist when local storage is empty." );
	
	//test2 
	var done1 = assert.async();
	window.localStorage.setItem( "foo", "bar" );
	setTimeout( function() {
		var td1 = $( "table.local tr:last" ).find( "td:last" ).text();
		assert.equal( td1, "bar", "Add Data." );
		done1();
	} );
	
	//test3
	var done2 = assert.async();
	window.localStorage.setItem( "hoge", "bar" );
	setTimeout( function() {
		var td2 = $( "table.local tr:last" ).find( "td:last" ).text();
		assert.equal( td2, "bar", "Add Data, again." );
		done2();
	} );
});

//postprocessor
setTimeout( function() {
		window.localStorage.clear();
		window.sessionStorage.clear();
}, 1000 );
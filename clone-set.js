try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "cloneSet",
		[
			"cloneArray",
			"cloneObject"
		],
		function construct( ){
			var cloneSet = function cloneSet( set ){
				if( typeof set != "object" ){
					throw new Error( "invalid set" );
				}

				
			};

			base.cloneSet = cloneSet;
		} );
} )( base );
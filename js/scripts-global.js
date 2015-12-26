/**
 * Theme frontend scripts
 *
 * @package    Receptar
 * @copyright  2015 WebMan - Oliver Juhas
 *
 * @since    1.0
 * @version  1.0
 *
 * CONTENT:
 * -  10) Basics
 * -  20) Site header
 * -  30) Banner
 * -  40) Posts
 * - 100) Others
 */





jQuery( function() {



	/**
	 * 10) Basics
	 */

		var $window = jQuery( window );



		/**
		 * Tell CSS that JS is enabled...
		 */

			jQuery( '.no-js' ).removeClass( 'no-js' );



	/**
	 * 20) Site header
	 */


		/**
		 * Secondary section toggle
		 */

			jQuery( '#menu-toggle' ).on( 'click', function( e ) {

				e.preventDefault();

				jQuery( '#secondary' )
					.toggleClass( 'active' );

				jQuery( '#secondary.active' )
					.attr( 'aria-expanded', 'true' )
					.find( '#menu-toggle' )
						.attr( 'aria-expanded', 'true' );

				jQuery( '#secondary:not(.active)' )
					.attr( 'aria-expanded', 'false' )
					.find( '#menu-toggle' )
						.attr( 'aria-expanded', 'false' );

			} );



	/**
	 * 30) Banner
	 */

		/**
		 * Banner slider
		 */

			if ( jQuery().slick ) {

				jQuery( '#site-banner.enable-slider .site-banner-inner' ).slick( {
						'adaptiveHeight' : false,
						'autoplay'       : true,
						'autoplaySpeed'  : ( ! jQuery( '#site-banner' ).data( 'speed' ) ) ? ( 5400 ) : ( jQuery( '#site-banner' ).data( 'speed' ) ),
						'cssEase'        : 'ease-in-out',
						'dots'           : false,
						'draggable'      : false,
						'easing'         : 'easeInOutBack',
						'fade'           : true,
						'pauseOnHover'   : true,
						'slide'          : 'article',
						'speed'          : 600,
						'swipeToSlide'   : true,
						'prevArrow'      : '<div class="slider-nav slider-nav-prev"><button type="button" class="slick-prev"><span class="genericon genericon-previous"></span></button></div>',
						'nextArrow'      : '<div class="slider-nav slider-nav-next"><button type="button" class="slick-next"><span class="genericon genericon-next"></span></button></div>'
					} );

			} // /slick



	/**
	 * 40) Posts
	 */

		/**
		 * Single post minimal content height
		 */

			var $siteContent = jQuery( '.is-singular:not(.home) .site-content' ).css( 'min-height', jQuery( '.entry-media' ).outerHeight() + 'px' );

			$window.on( 'resize orientationchange', function( e ) {
				if ( 960 < document.body.clientWidth ) {
					$siteContent.css( 'min-height', jQuery( '.entry-media' ).outerHeight() + 'px' );
				}
			} );



	/**
	 * 100) Others
	 */

		/**
		 * Page scrolled?
		 */

			if ( 0 == $window.scrollTop() ) {
				jQuery( 'body' )
					.addClass( 'not-scrolled' )
			}

			$window.on( 'scroll', function( e ) {

				if ( 0 == $window.scrollTop() ) {
					jQuery( 'body' )
						.addClass( 'not-scrolled' )
						.removeClass( 'is-scrolled' );
				} else {
					jQuery( 'body' )
						.addClass( 'is-scrolled' )
						.removeClass( 'not-scrolled' );
				}

			} );



		/**
		 * On-page anchor smooth scrolling
		 *
		 * Disable this when editing page with Beaver Builder to prevent
		 * jumps when switching modules settings form tabs.
		 */

			if ( ! ( 0 < window.location.href.search( 'fl_builder' ) ) ) {

				jQuery( 'body' ).on( 'click', 'a[href^="#"]', function( e ) {

					var $this         = jQuery( this ),
					    $anchor       = $this.not( '.add-comment-link, .search-toggle, .back-to-top, .skip-link' ).attr( 'href' ),
					    $scrollObject = jQuery( 'html, body' ),
					    $scrollSpeed  = ( 960 >= document.body.clientWidth ) ? ( 0 ) : ( 600 );

					if (
							$anchor
							&& '#' !== $anchor
							&& ! $this.parent().parent().hasClass( 'wm-tab-links' )
							&& ! $this.hasClass( 'no-smooth-scroll' )
						) {
						e.preventDefault();

						var $scrollOffset = jQuery( '.do-sticky-header #masthead' ).outerHeight() - 1;

						if ( jQuery( '#wpadminbar' ).length ) {
							$scrollOffset += jQuery( '#wpadminbar' ).outerHeight();
						}
						if ( jQuery( '.fl-row.sticky' ).length ) {
							$scrollOffset += jQuery( '.fl-row.sticky' ).eq( 0 ).outerHeight();
						}

						$scrollObject
							.stop()
							.animate( {
								scrollTop : jQuery( $anchor ).offset().top - $scrollOffset + 'px'
							}, $scrollSpeed );
					}

				} );

			} //check if Beaver Builder not active



} );
/**
 * @author Edouard Demotes-Mainard <https://github.com/EdouardDem>
 * @license http://opensource.org/licenses/BSD-2-Clause BSD 2-Clause License
 */

/**
 * Object djs for namespace
 */
window.djs = window.djs || {};
/**
 * Object djs.tools for namespace
 */
window.djs.tools = window.djs.tools || {};
/**
 * A set of Javascript UI functions used by the other Djs modules.
 *
 * @see https://github.com/EdouardDem/djs-ui-tools
 */
djs.tools.ui = {

	/**
	 * Directions
	 *
	 * @var {Object}
	 */
	directions: {
		none: 0,
		horizontal: 1,
		vertical: 2,
		both: 3
	},
	/**
	 * Debug flag, for console logging
	 *
	 * @private
	 * @var {Boolean}
	 */
	_debug: false,
	/**
	 * Initialized flag
	 *
	 * @private
	 * @var {Boolean}
	 */
	_initialized: false,
	/**
	 * Add the scrollbar width to the window width ?
	 * Should be true
	 *
	 * @private
	 * @var {Boolean}
	 */
	_dealWithScrollbar: true,
	/**
	 * jQuery body element
	 *
	 * @private
	 * @var {Object}
	 */
	_$body: null,
	/**
	 * jQuery html+body element
	 *
	 * @private
	 * @var {Object}
	 */
	_$htmlBody: null,
	/**
	 * jQuery window element
	 *
	 * @private
	 * @var {Object}
	 */
	_$window: null,

	/**
	 * Initialize the object
	 *
	 * @private
	 */
	_init: function () {

		// Init only once
		if (this._initialized) {
			return;
		}

		// Get jQuery elements
		this._$body = $('body');
		this._$htmlBody = $('html, body');
		this._$window = $(window);

		//Precomputed values
		this._scrollBarWidth = this._computeScrollbarWidth();

		// Set flag
		this._initialized = true;
	},
	/**
	 * Compute the scrollbar width
	 *
	 * @private
	 * @return {Number}
	 */
	_computeScrollbarWidth: function () {

		// Force scrollbar on body and get width
		this._$htmlBody.css('overflow', 'scroll');
		var w1 = this._$body.outerWidth();

		// Force hidden scrollbar on body and get width
		this._$htmlBody.css('overflow', 'hidden');
		var w2 = this._$body.outerWidth();

		// Restore body styles
		this._$htmlBody.css('overflow', '');

		// Returns difference
		return (w2 - w1);
	},
	/**
	 * Detect if the body has a scrollbar
	 *
	 * @return {Boolean}
	 */
	bodyHasScrollbar: function () {

		// Auto init
		this._init();

		// Get window height
		var wh = window.innerHeight || this._$window.height();

		// Compare body and window width
		return this._$body.height() > wh;
	},
	/**
	 * Returns the window width
	 *
	 * @param {Boolean}		asMediaQuery (default : true)
	 * @return {Number}
	 */
	getWindowWidth: function (asMediaQuery) {

		// Auto init
		this._init();

		// Default value for asMediaQuery
		if (asMediaQuery == null) asMediaQuery = true;

		// Returns the window width with or without the scrollbar
		return (asMediaQuery && this._dealWithScrollbar && this.bodyHasScrollbar()) ?
		this._$window.width() + this._scrollBarWidth :
			this._$window.width();
	},
	/**
	 * Get the scrollbar width
	 *
	 * @return {Number}
	 */
	getScrollbarWidth: function () {

		// Auto init
		this._init();

		// Return the pre-computed value
		return this._scrollBarWidth;
	},
	/**
	 * Find the direction of the scroll of and element
	 *
	 * @param {Object} $element
	 * @return {Number}
	 * 	none: 0,
	 * 	horizontal: 1,
	 * 	vertical: 2,
	 * 	both: 3
	 * This values are stored in djs.tools.ui.directions
	 */
	getScrollDirection: function ($element) {

		// Check if element exists
		if ($element.length == 0) return this.directions.none;

		// Values
		var w = $element.outerWidth(),
			h = $element.outerHeight(),
			sh = $element.get(0).scrollHeight,
			sw = $element.get(0).scrollWidth;

		// Returns directions
		if (sh > h && sw > w) return this.directions.both;
		if (sh > h) return this.directions.vertical;
		if (sw > w) return this.directions.horizontal;
		return this.directions.none;
	}
};

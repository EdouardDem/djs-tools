/**
 * @author Edouard Demotes-Mainard <https://github.com/EdouardDem>
 * @license http://opensource.org/licenses/BSD-2-Clause BSD 2-Clause License
 */

/**
 * Object djs for namespace
 */
window.djs = window.djs || {};
/**
 * A set of Javascript functions used by the other Djs modules.
 *
 * @see https://github.com/EdouardDem/djs-tools
 */
djs.tools = {

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

		// Set flag
		this._initialized = true;
	},

	/**
	 * Get the scroll bar width
	 *
	 * @private
	 * @return {Number}
	 */
	getScrollBarWidth: function () {

		//Auto init
		this._init();

		// Force scroll bar on body and get width
		this._$htmlBody.css('overflow', 'scroll');
		var w1 = this._$body.outerWidth();

		// Force hidden scroll bar on body and get width
		this._$htmlBody.css('overflow', 'hidden');
		var w2 = this._$body.outerWidth();

		// Restore body styles
		this._$htmlBody.css('overflow', '');

		// Returns difference
		return (w2 - w1);
	},
	/**
	 * Detect if the body has a scr0ll bar
	 *
	 * @private
	 * @return {Boolean}
	 */
	bodyHasScrollbar: function () {

		//Auto init
		this._init();

		// Compare body and window width
		return this._$body.height() > this._$window.height();
	},
	/**
	 * Returns the window width
	 *
	 * @private
	 * @param {Boolean}		asMediaQuery (default : true)
	 * @return {Boolean}
	 */
	getWindowWidth: function (asMediaQuery) {

		//Auto init
		this._init();

		// Default value for asMediaQuery
		if (asMediaQuery == null) asMediaQuery = true;

		// Returns the window width with or without the scroll bar
		return (asMediaQuery && this._dealWithScrollbar && this.bodyHasScrollbar()) ?
		this._$window.width() + this._scrollBarWidth :
			this._$window.width();
	}
};

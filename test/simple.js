/**
 * Log function
 *
 * @param {String} text
 */
displayLog = function (text) {
    $('.results').append('<div>' + text + '</div>');
    console.log(text);
};
/**
 * Clear log
 */
clearLog = function () {
    $('.results').html('');
    console.clear();
};
/**
 * Run the tests
 */
runTests = function () {

    //----------------------------------------------
    // Init resize object
	$('.results').append('<div>Windows width as media query (including the scrollbar): ' + djs.tools.getWindowWidth() + 'px</div>');
	$('.results').append('<div>Windows width only: ' + djs.tools.getWindowWidth(false) + 'px</div>');
	$('.results').append('<div>Scrollbar width: ' + djs.tools.getScrollbarWidth() + 'px</div>');
	$('.results').append('<div>Body has scroll bar: ' + (djs.tools.bodyHasScrollbar() ? 'Yes': 'No') + '</div>');

    //----------------------------------------------
    // Ends displayed tests
    displayLog(" ");

};
/**
 * Auto run test
 */
$(document).ready(function () {
    runTests();
});
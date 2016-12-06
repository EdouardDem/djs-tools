# djs-ui-tools
A set of Javascript UI functions used by the other Djs modules

## Installation

```
bower install djs-ui-tools
```

## Dependencies

This package requires [jQuery](http://jquery.com/)

If you install it with Bower, the dependencies will be included.

## Available functions

### bodyHasScrollbar

Detect if the body currently has a scrollbar.

```javascript
djs.tools.ui.bodyHasScrollbar();
```

### getWindowWidth

Returns the window width, with or without the scrollbar.

```javascript
djs.tools.ui.getWindowWidth(); // Returns the window width (including the scrollbar, if any)
djs.tools.ui.getWindowWidth(false); // Returns the window width (without the scrollbar)
```

### getScrollbarWidth

Get the scrollbar width, computed once.

```javascript
djs.tools.ui.getScrollbarWidth();
```

### getScrollDirection

Find the direction of the scroll of and element.

```javascript
djs.tools.ui.getScrollDirection($(element));
```

It returns one of these values :

```javascript
djs.tools.ui.directions = {
    none: 0,
    horizontal: 1,
    vertical: 2,
    both: 3
}
```

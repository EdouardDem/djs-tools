# djs-ui-tools
A set of Javascript UI functions used by the other Djs modules

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


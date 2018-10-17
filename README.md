# fitText

<h2>1. Idea</h2>

Tired of fitting variable length texts inside fixed containers by hand? Or resizing text depending on the parent's size? Then this is for you.

**TL;DR: Run fitText(*CSS selector*).**

<h2>2. Requirements</h2>

fitText only needs jQuery to run. Make sure to include it before fitText to avoid errors.

<h2>2. Installation</h2>

1. Download the file fitText.js

2. Include fitText.js:

```html
<script src='./js/fitText.js'></script>
```

<h2>3. Structure setup</h2>

fitText needs 2 DOM elements:

+A Parent, which sets the boundaries for the text.
+A Child, which contains the text to resize. 


```html
<div class='parent'><p class='child'>This text may change in lenght</p></div>
```

That's it, now you are all set to use fitText.js

<h2>3. Usage</h2>

To call fitText, pass it a CSS selector:

```javascript
  fitText('.parent .child');
```

A good idea is to call fitText when the size of the parent containers might change, for example whenever the window resizes.




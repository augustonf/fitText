# fitText

<h2>1. Idea</h2>

Tired of fitting variable length texts inside fixed containers by hand? Or resizing text depending on the parent's size? Then this is for you.

**TL;DR: Run fitText(*CSS selector*).**

<h2>2. Requirements</h2>

fitText only needs jQuery to run. Make sure to include it before fitText to avoid errors.

<h2>3. Installation</h2>

1. Download the file fitText.js

2. Include fitText.js:

```html
<script src='./js/fitText.js'></script>
```

<h2>4. Structure setup</h2>

fitText needs 2 DOM elements:

<ul>
  <li>A Parent, which sets the boundaries for the text. </li>
  <li>A Child, which contains the text to resize. </li>
</ul>

```html
<div class='parent'>
  <p class='child'>This text may change in lenght</p>
</div>
```

That's it, now you are all set to use fitText.js

<h2>5. Usage</h2>

To call fitText, pass it a CSS selector:

```javascript
  fitText('.parent .child');
```

A good idea is to call fitText when the size of the parent containers might change, for example whenever the window resizes.

<h2>6. Probable upgrades</h2>

Find appropiate font-size using a binary search to reduce algorithm complexity from O(n) to O(log n). Nevertheless, the maximum value for n is the height of the parent container in px. 

<h2>7. Another solutions</h2>

There is also another library that does something similar to fitText called [fitty](https://github.com/rikschennink/fitty), but I had some wobble when calling it with the same frequency as fitText in the example. This may not be a problem in a static page that only changes the container's size once in a while, so I'll just leave it here.

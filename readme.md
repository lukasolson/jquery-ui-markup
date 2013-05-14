# jQuery UI Markup

This jQuery UI plugin allows you to use jQuery UI widgets without writing any JavaScript. Instead, you'll keep presentation elements where they belong: Inside the HTML.

Here's what you'd usually have to do to implement something like `draggable()`:

```html
<div class="draggable">This is draggable<div>
```

```javascript
$(document).ready(function() {
  $(".draggable").draggable({
    addClasses: false,
    axis: "x"
  });
});
```

After including this plugin, you can do the same thing with the following syntax:

```html
<div data-jqui="draggable" data-add-classes="false" data-axis="x">This is draggable</div>
```

Or, to call multiple jQuery UI methods on a single element, use a space-separated list of all of them:

```html
<div data-jqui="draggable resizable">This is draggable AND resizable</div>
```

To use this plugin, simply include it after you include jQuery and jQueryUI.:

```html
<script type="text/javascript" src="jqueryui/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="jqueryui/js/jquery-ui-1.10.2.custom.js"></script>
<script type="text/javascript" src="jqueryui-markup.js"></script>
```


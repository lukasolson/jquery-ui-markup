# jQuery UI Markup

This jQuery UI plugin allows you to use jQuery UI widgets without writing any JavaScript. Instead, you'll keep presentation elements where they belong: Inside the HTML.

Here's what you'd usually have to do to implement something like `draggable()`:

```html
<div class="draggable">This is draggable<div>
```

```javascript
$(document).ready(function() {
  $(".draggable").draggable({
    axis: "x"
  });
});
```

After including this plugin, you can do the same thing with the following syntax:

```html
<div data-jqui="draggable" data-axis="x">This is draggable</div>
```

To use it, simply include it after you include jQuery and jQueryUI.:

```html
<script type="text/javascript" src="jqueryui/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="jqueryui/js/jquery-ui-1.10.2.custom.js"></script>
<script type="text/javascript" src="jqueryui-markup.js"></script>
```

Note: there is still a lot of work to do before this is fully-featured. Things like support for option names with capital letters, support for option values that aren't static, etc.
---
layout: default
permalink: /docs/
---

<link rel="stylesheet" href="{{ "/css/demo.css" | prepend: site.baseurl }}">
<script src="/js/modernizr.custom.63321.js"></script>



<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <script>document.documentElement.className = "js";</script>

<link rel="javascript" type="javascript" href="{{ "/js/vendor/jquery-1.9.1.js" | prepend: site.baseurl }}">
<link rel="javascript" type="javascript" href="{{ "/js/vendor/json2.js" | prepend: site.baseurl }}">

<link rel="javascript" type="javascript" href="{{ "/js/jquerycollapsecookiestorage.js" | prepend: site.baseurl }}">
<link rel="javascript" type="javascript" href="{{ "/js/jquerycollapsestorage.js" | prepend: site.baseurl }}">
<link rel="javascript" type="javascript" href="{{ "/js/jquerycollapse.js" | prepend: site.baseurl }}">

</head>
<body>
    <!-- BEGIN Showing and hiding with CSS -->
    <h2>w/ CSS3 Animations</h2>
    <div id="css3-animated-example">
      <h3>Hello</h3>
      <div>
        <div class="content">
          <p>This example simply sets a class attribute to the details and let's an
          external stylesheet toggle the collapsed state.</p>
          <p>Hello Sir.</p>
          <p>I'm sliding</p>
        </div>
      </div>
      <h3>Friend</h3>
      <div>
        <div class="content">
          <p>This example simply sets a class attribute to the details and let's an
          external stylesheet toggle the collapsed state.</p>
          <p>Hello Sir.</p>
        </div>
      </div>
      <h3>Foe</h3>
      <div>
        <div class="content">
          <p>This example simply sets a class attribute to the details and let's an
          external stylesheet toggle the collapsed state.</p>
        </div>
      </div>
    </div>
    <script>
      $("#css3-animated-example").collapse({
        accordion: true,
        open: function() {
          this.addClass("open");
          this.css({ height: this.children().outerHeight() });
        },
        close: function() {
          this.css({ height: "0px" });
          this.removeClass("open");
        }
      });
    </script>
    <!-- END Showing and hiding with CSS -->
   

</body>
</html>

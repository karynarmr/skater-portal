---
layout: default
permalink: /docs/
---
<head>
<script>document.documentElement.className = "js";</script>

<link rel="javascript" type="javascript" href="{{ "/js/jquery.collapse-storage.js" | prepend: site.baseurl }}">
<link rel="javascript" type="javascript" href="{{ "/js/jquery.collapse.js" | prepend: site.baseurl }}">
<link rel="javascript" type="javascript" href="{{ "/js/jquery.collapse-cookie-storage.js" | prepend: site.baseurl }}">

<script type="text/js">
$("#css3-animated-example").collapse({
accordion: true,
open: function() {
this.addClass("open");
this.css({ height: this.children().outerHeight() });},
close: function() {
  this.css({ height: "0px" });
this.removeClass("open");
}
});
</script>
</head>


<h2>Know your sh*t</h2>
<br>

<style type="text/css">
body {
  background: #ddd;
  margin: 0 auto;
  max-width: 1024px;
  font: normal 14px/1.2 'Helvetica Neue', 'Arial'
}

.fork {
  border:0;
  position:absolute;
  top:0;
  right:0;
}

.col {
  width: 320px;
  float: left;
  margin-right:32px;
  margin-bottom: 16px;
}
.c3 {
  margin-right:0;
}

h1 {
  border-bottom: 1px solid #333;
  font-size: 32px;
  color: #fff;
  padding-bottom: 12px;
  text-shadow: 0px 0px 2px rgba(0,0,0,0.6);
}

h2 {
  margin: 10px 0;
  color: #000;
  font-size: 18px;
  text-shadow: 1px 1px 2px #fff;
}

h3 {
  margin: 0;
  background-color: rgb(228,10,85);
  background-image: linear-gradient(bottom, rgb(228,10,85) 14%, rgb(255,36,111) 57%);
  background-image: -o-linear-gradient(bottom, rgb(228,10,85) 14%, rgb(255,36,111) 57%);
  background-image: -moz-linear-gradient(bottom, rgb(228,10,85) 14%, rgb(255,36,111) 57%);
  background-image: -webkit-linear-gradient(bottom, rgb(228,10,85) 14%, rgb(255,36,111) 57%);
  background-image: -ms-linear-gradient(bottom, rgb(228,10,85) 14%, rgb(255,36,111) 57%);
}

h3 a {
  background: url("sprite.png") 15px 13px no-repeat;
  display: block;
  padding: 10px;
  padding-left: 32px;
  margin: 0;
  color: #fff;
  text-decoration: none;
  font-weight: normal;
  border-bottom: 1px solid rgba(128, 10, 85, 0.5);
  text-shadow: 1px 1px 1px rgb(128,10,85);
}
h3:hover { background: rgb(228,10,85); }
h3.open  { background: rgb(255,70,120); }
h3.open a { background-position: 13px -25px; }
h3 + div { padding: 10px; }
h2 + div,
.example {
  background: #fff;
  overflow: hidden;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  margin-bottom: 20px;
}

/* Pre hide sections with JavaScript on
--- */
h3+div {
  display: none;
}
</style>


<!-- BEGIN Showing and hiding with CSS -->
<div id="css3-animated-example">
  <h3>Hello</h3>
    <div>
      <div class="content">
          <p>This example simply sets a class attribute to the details and let's an external stylesheet toggle the collapsed state.</p>
          <p>Hello Sir.</p>
          <p>I'm sliding</p>
        </div>
        </div>

  <h3>Friend</h3>
    <div>
        <div class="content">
      <p>This example simply sets a class attribute to the details and let's an external stylesheet toggle the collapsed state.</p>
      <p>Hello Sir.</p>
      </div>
      </div>

<h3>Foe</h3>
      <div>
      <div class="content">
      <p>This example simply sets a class attribute to the details and let's an external stylesheet toggle the collapsed state.</p>
    </div>
    </div>
</div>


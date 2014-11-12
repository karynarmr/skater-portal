---
layout: page
permalink: /docs/
---

<h2>Know your sh*t</h2>
<br>

<div class="row">
  <div class="columns large-4">
     <button class="filter-button individual button active" id="sotu">SOTU</button>
  </div>
  
  <div class="columns large-4">   
     <button class="filter-button individual button active" id="opsman">Ops Manual</button>
  </div>   
   
  <div class="columns large-4">  
     <button class="filter-button individual button active" id="rules">Rules 2014</button>
  </div>
</div> <!-- close row -->


 <iframe width="1000" height="800" frameborder="0" src="{{ site.baseurl }}/img/Rules2014.pdf"></iframe>
 <iframe width="1000" height="800" frameborder="0" src="{{ site.baseurl }}/img/OpsMan.docx"></iframe>
 <iframe width="1000" height="800" frameborder="0" src="{{ site.baseurl }}/img/SOTU2014.doc"></iframe>


<!--

$(".filter-button").on("click", function(){
  console.log(this.id);
  var className = "." + this.id; 
console.log(className);
$(className).toggle();
//.toggleClass("active")


});
 

 --> 
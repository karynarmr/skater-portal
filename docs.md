---
layout: default
permalink: /docs/
---

<script type="text/javascript">

$(".filter-button").on("click", function(){
  console.log(this.id);
  var className = "." + this.id; 
console.log(className);
$(className).toggle();
.toggleClass("active")
});
</script>



<h3>Know your sh*t</h3>
<br>

<div class="row">

      <div class="columns large-4 medium-4 small-12">
         <button class="filter-button individual button active" id="sotu">SOTU</button>
      </div>   
      
      <div class="columns large-4 medium-4 small-12">   
         <button class="filter-button individual button active" id="opsman">Ops Manual</button>
      </div>   
       
      <div class="columns large-4 medium-4 small-12">  
         <button class="filter-button individual button active" id="rules">Rules 2014</button>
      </div>
</div> <!-- end row -->  


 <div class="row gallery">
            <div class="large-12 small-12 columns sotu">
               <iframe width="900" height="800" frameborder="0" src="{{ site.baseurl }}/img/SOTU2014.pdf"></iframe>
            </div>

            <div class="large-12 small-12 columns rules">
                 <iframe width="900" height="800" frameborder="0" src="{{ site.baseurl }}/img/Rules2014.pdf"></iframe>
            </div>

             <div class="large-12 small-12 columns opsman">
               <iframe width="900" height="800" frameborder="0" src="{{ site.baseurl }}/img/OpsMan.pdf"></iframe>
             </div>
</div> <!-- end row -->
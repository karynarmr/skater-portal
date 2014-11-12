---
layout: page
permalink: /suggestionbox/
---

<h2>Send us your feelings</h2>
<h5> to: Info@TXRD.com </h5>

<form method="post" name="contact_form" action="mailto:karynarmr33@gmail.com">

  <!-- action="contact-form-handler.php" This is what the action should be if I can get the form to work.-->
  
  <div id="from">
    <label for="name">from:</label>
    <input type="text" name="name" placeholder="Enter Skate Name">
  </div>

  <div id="reply">
    <label for="subject">subject:</label>
    <input type="text" name="subject" placeholder="Subject">
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="message" placeholder="Send us all your feelings"></textarea>
  </div>
 
 <br>
 
    <button type="submit">Send your message</button>

</form>

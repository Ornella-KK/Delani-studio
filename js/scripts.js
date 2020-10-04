// jquery for paragraphs in what we do icons
$(document).ready(function(){
   $("img#first").click(function(){
       $("#para1").toggle();
   })
   $("img#second").click(function(){
       $("#para2").toggle();
   })
   $("img#third").click(function(){
       $("#para3").toggle();
   })
})
//  alerting when submitting contact info
$(document).ready(function(){
    $(".btn").click(function(){
        var name=$("input#name").val();
        alert(name+ " we have received your message. Thank you for reaching to us");
    })
})

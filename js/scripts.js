// jquery for paragraphs in what we do icons
$(document).ready(function(){
   $("img#first").click(function(){
        $("#para1").toggle()
        $("img#first").toggle();
   })
   $("#para1").click(function(){
       $("img#first").show();
       $("#para1").hide();
   })
   $("img#second").click(function(){
       $("#para2").toggle();
       $("img#second").toggle();
   })
   $("#para2").click(function(){
       $("img#second").show();
       $("#para2").hide();
   })
   $("img#third").click(function(){
       $("#para3").toggle();
       $("img#third").toggle();
   })
   $("#para3").click(function(){
       $("img#third").show();
       $("#para3").hide();
   })
})
//  alerting when submitting contact info
$(document).ready(function(){
    $(".btn").click(function(){
        var name=$("input#name").val();
        alert(name+ " we have received your message. Thank you for reaching to us");
    })
})

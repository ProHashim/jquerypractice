$(document).ready(function(){
    // text() function
    console.log($("h3").text())

    $("h3").click(function () { 
        $(this).text("You clicked here now I am changed :(")
        console.log(h3)
     })

    // getting html
    // console.log($("h3").html()) 

    $("#cool").blur(function(){
        //getting the value of an input using jquery
        console.log($("#cool").val()) 
        // attr() function
        console.log($("#cool").attr("id"))
    })

    $("#img").click(function () { 
        
        $("img").attr({
            "src" : "/a.jpg",
            "alt": "an image",
            "width": "200px"
        })
    });  
    
        
    $("h3").text(function(i, originalText){
        console.log(`${originalText} is replaced with COOOOOL at ${i}`)
    })

    $("#change").click(function () { 
        $("#willChange").text("Very cool")
     })
    

     $("#willChange").append(" 👈Appended")
     $("#willChange").prepend("Pre-pended 👉 ")


   
})

// Today we'll learn about jquery, so lets jump right in

// Basic syntax:

// $("selector").action()

/*
Wrap all the jquery inside the ready() function
$(document).ready(function(){
 
})

*/

// Or use it like this:

/*

$(function(){

})


*/

// Example 1, a basic usage

// Jquery selector by tag name
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide()
    })
})

// Jquery selctor by id with $(function(){}) syntax
$(function(){
    $("button").click(function(){
        $("#top").hide()
    });

    // jquery selector by class
    $(".myj").click(function(){
        $(".myj").hide()
    })


    $("#hover").mouseenter(function(){
        // $("#hover").css("color","green")
    })

    $("#hover").mouseleave(function(){
        console.log("you left LOL :(")
        // $("#hover").css("color","#000")
    })

    //  The list of the events goes on to
    // mousedown, mouseup, hover, focus, blur, on etc

    // The hover() function takes two funstions as parameters

    $("#hover").hover(function(){
        console.log("Ahh you are here to hover over me?")
        $("#hover").css("color","green")
    }, function(){
        // alert("Ahh you are here")
        $("#hover").css("color","#000")
    })


    $("#focus-please").focus(function(){
        $(this).css("background-color", "burlywood")
        $(this).css("color", "#111")
        
    })

  $("#focus-please").blur(function(){
    $(this).css("background-color", "transparent")
    $(this).css("color", "#111")
  })

//   By using the on() we can use multiple events at once

  $("#link").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
      },
      click: function(){
        $(this).css("background-color", "yellow");
      },
      dblclick: function(){
        $(this).hide()
      }
    })

    // Add more down the road
    $("#hide-show #hide").click(function(){
      // $(selector).hide(speed, callback)
      $("p").hide(500) 
    })

    $("#hide-show #show").click(function(){
      $("#hide-show p").show(500)
    })

    $("#toggle").click(function(){
      $("#toggle p").toggle("slow")
    })

    $("#fade").click(function(){
      $("#div1").fadeIn()
      $("#div2").fadeIn("slow")
      $("#div3").fadeIn(3000)
    })


    $("#fadeout").click(function(){
      $("#div11").fadeOut()
      $("#div22").fadeOut("slow")
      $("#div33").fadeOut(3000)
    })

    $("#fadeToggle").click(function(){
      $("#div111").fadeToggle()
      $("#div222").fadeToggle("slow")
      $("#div333").fadeToggle(3000)
    })

    // Jquery Slide, slideDown() slideUp() slideToggle()
    $("#flip").click(function(){
      $("#panel").slideToggle(1000)
    })

    // Animate method
    // $("#animate").click(function(){
    //   $(this).animate({left: "10%"}, 1000)
    // })

    $("#animate").click(function(){
      $(this).animate({
        left: "10%",
        opacity: '0.5',
        height: '300px',
        width : '300px'
      }, 1000)
    })


    // stop() method is used to stop an animation
    // $("selector").stop()

  // Jquery Callbacks
  // A callback function is executed after the current statement is finished 100%

  /*
  JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.

  To prevent this, you can create a callback function.

  A callback function is executed after the current effect is finished.

  Typical syntax: $(selector).hide(speed,callback); */

  $("#coolbutton").click(function(){
    $("#hidden").hide("slow", function(){
      console.log("call backsssssssssssssssssssss!")
    })
  })

  // We can multiple methods in jquery 


$("#chaining").click(function(){
  $(this).css("color", "burlywood").slideUp("slow").slideDown(2000)
})
    

});


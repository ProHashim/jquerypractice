
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

});


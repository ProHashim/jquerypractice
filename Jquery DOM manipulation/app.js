$(document).ready(function () {
    // text() function
    console.log($("h3").text())

    $("h3").click(function () {
        $(this).text("You clicked here now I am changed :(")
        console.log(h3)
    })

    // getting html
    // console.log($("h3").html()) 

    $("#cool").blur(function () {
        //getting the value of an input using jquery
        console.log($("#cool").val())
        // attr() function
        console.log($("#cool").attr("id"))
    })

    $("#img").click(function () {

        $("img").attr({
            "src": "/a.jpg",
            "alt": "an image",
            "width": "200px"
        })
    });


    $("h3").text(function (i, originalText) {
        console.log(`${originalText} is replaced with COOOOOL at ${i}`)
    })

    $("#change").click(function () {
        $("#willChange").text("Very cool")
    })


    $("#willChange").append(" 👈Appended")
    $("#willChange").prepend("Pre-pended 👉 ")
    //  We can also inser multiple elements with append() / prepend()


    var txt1 = "<p>Text.</p>";               // Create element with HTML 
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("#appended").append(txt1, txt2, txt3)

    // Two other methods are after() and before() work s
    // ame as append and prepend()

    $("#removed").click(function () {
        $(this).remove()
    })

    $("#removeShow").empty()


    $("#reveal").click(function () {
        console.log($("#removeShow").text())
    })
    //  Use $("p").remove(".test, .demo"); to remove
    // multiple classes / ids

    // addClass()
    // $(".button").click(function () {
    //     $(".addclass").addClass("blue")
    //     $(".div").addClass("important")
    // })

    // removeClass()
    // $(".button").click(function () {
    //     $(".addclass").removeClass("addclass")
    //     $(".div").removeClass("important")
    // })


    // toggleClass() 
    $(".button").click(function () {
        $(".addclass").toggleClass("blue")
        $(".div").toggleClass("important")
    })

    // $("#csspls").css("color", "green") 


    $("#csspls").css({
        "color": "green",
        "fontSize": "25px",
        "fontFamily": "Tahoma"
    })

    $("#scrollTop").css({
        "position": "absolute",
        "right": "20px"
    })

    $("#scrollTop").click(function () {
        $(this).css({
            "position": "fixed",
            "right": "20px",
            "top": "100px"

        })
    })

    $("#showwh").click(function () {
        let txt = ""
        txt += "Width of: " + $("#div1").width() + "<br>"
        txt += "Height of: " + $("#div1").height() + "<br>"
        $("#div1").html(txt)
    })

    // Similarly we can use:
    // innerWidth, innerHeight, outerWidth, outerHeight 

    // get height and width including padding, border and margin
    // innerWidth(true), innerHeight(true), outerWidth(true), 
    // outerHeight(true) 
    $("#pls").click(function () {
        $(this).height(200)
        $(this).width(500)
        $(this).css("background-color", "burlywood")
    })
})
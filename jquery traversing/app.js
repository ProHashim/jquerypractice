$(function () {
    // Jquery Ancestors
    // parent() method selects the direct parent of an element
    $("#parent").parent().css("color", "#ff7777")
    // Targets all the paernt up until body element
    // $("#parents").parents().css("background-color", "#111")

    $("#parents").parentsUntil("div").css("background-color", "#111")


    // jquery descendents 
    $("#children").children().css({
        "borderBottom": "2px solid green",
        "width": "30%"
    })
    // $("#children").children("p.first") to select only paragraphs with
    // class first

    $("#find").find("span").css("border-bottom", "2px solid green")

    $("#siblings").parent().css({
        "borderTop": "2px solid green",
        "width": "50%",
        "marginTop": "50px"
    })

    $("#siblings li").siblings().css("color", "gray")

    $("#next").next().css({
        "color": "yellow",
        "backgroundColor": "gray"
    })

    // $("body").first().css("background-color", "green")

    $(".first").first().css("color", "burlywood")
    $(".first").last("").css("background-color", "burlywood")

    // the eq method

    $("#siblings li").eq(4).css({
        "color": "purple"

    })

    $("li").filter("#li").css("background-color", "yellow");
    $("#not").not("#li").css("background-color", "yellow");


})
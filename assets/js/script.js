//toggling completed
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
       $(this).remove();
    });
    event.stopPropagation();
});

//adding new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13 && $(this).val() !== "") {
        //new todo
       let text = $(this).val();
       //clearing input
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+text+"</li>");
    }
});

//toggle + -
$("#toggle").click(function(){
    $("input[type='text']").fadeToggle();
    $(this).find("svg").toggleClass('fa-minus fa-plus');
});
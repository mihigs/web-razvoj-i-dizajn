
initialise();
startInput();
addNewItemToList();


//global variables
var numbOfItemsOnList = 0;
// called only on start
function initialise() {
    setTimeout(function () {
        $(".to-do-main-container").animate({
            top: '0px'
        }, 600, "easeOutExpo");
        setTimeout(showInputBlock, 90);
    }, 600)
}
// makes input block pop out (55px from header)
function showInputBlock() {
    $(".to-do-input").animate({
        top: '55px'
    }, 200, "easeOutExpo");
    $(".to-do-input").before('<div class="filler block"></div>')
}
//focusing input
var inputIsFocused = false;
function startInput() {
    $(".input-form").focus().select();
    inputIsFocused = true;
}
//input form behavior on focus
//automatically start input when typing
$("body").on("keypress", function () {
    if (!inputIsFocused) {
        startInput();
        $(".filler").animate({ height: "55px" }, 300, "easeOutQuad");
        $(".to-do-input").animate({ height: "55px" }, 300, "easeOutExpo");
        $(".item-content").first().css({ borderTopRightRadius: "0px" });
    }
})
//input form behavior on lost focus (focusout)
$(".input-form").on("focusout", function () {
    inputIsFocused = false;
    $(".input-form").val("");
    $(".filler").animate({ height: "47px" }, 500, "easeOutExpo");
    $(".to-do-input").animate({ height: "47px" }, 500, "easeOutExpo");
    $(".to-do-item").first().animate({ borderTopRightRadius: "10px" });
});
//adding a new item to the list
function addNewItemToList() {
    $(".input-form").on("keypress", function (event) {
        if ($(".input-form").val() == "" || $(".input-form").val() == null) return;
        if (event.which == 13) {
            var userInput = $(".input-form").val();
            $(".input-form").val('');
            $(".to-do-input").after('<div class="to-do-item block"></div>'); itemsOnHover();
            $(".to-do-item").first().append('<div class="item-content"></div>');
            numbOfItemsOnList++;
            for (var i = numbOfItemsOnList; i > 1; i--) {
                $(".item-content")[i] = $(".to-do-item")[i - 1];
            }
            $(".item-content").first().text(userInput);
            $(".to-do-item").first().append('<div class="item-delete-hover"></div>');
            addDeleteButton();
            startInput();
            itemsOnHover();
            clickDeleteButton();
        }
    });
}
//items change color on mouse over
function itemsOnHover() {
    $(".item-content").hover(function () {
        $(this).css("background-color", "lightgray");
        $(this).siblings(".item-delete-hover").css("background-color", "lightgray")
    }, function () {
        $(this).css("background-color", "white");
        $(this).siblings(".item-delete-hover").css("background-color", "white")
    })
}
//hover on the edge for item delete
function addDeleteButton() {
    $(".item-delete-hover").first().on("mouseenter", function () {
        $(this).css("background","rgb(21, 38, 66)");
        $(this).append('<div class="delete-icon"></div>');
    })
    $(".item-delete-hover").first().on("mouseleave", function () {
        $(this).css("backgroundColor","white");
        $(this).children().remove();
    })
}
//delete element on click
function clickDeleteButton(){
    $(".item-delete-hover").first().on("click",function(){
        $(this).parent().animate({left: "-500px"},300,function(){
            $(this).remove();
        });
        $(this).stop(true,true);
    })
}

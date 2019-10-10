
initialise();
startInput();
addNewItemToList();


//global variables
var numbOfItemsOnList = 0;
// called only on start
function initialise() {
    setTimeout(function () {
        $(".to-do-main-container").animate({
            top: '0px',
            // "border-top-right-radius": "15px",
            // "border-bottom-right-radius": "13px",
            // "border-bottom-left-radius": "8px",
        }, 800, "easeOutExpo");
        setTimeout(showInputBlock, 90);
    }, 400)
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
function widenInputField() {
    $(".filler").stop();
    $(".filler").animate({ height: "55px" }, 300, "easeOutQuad");
    $(".to-do-input").stop();
    $(".to-do-input").animate({ height: "55px" }, 300, "easeOutExpo");
}
$(".input-form").on("focus",function(){
    widenInputField();
})
//automatically start input when typing
$("body").on("keypress", function () {
    if (!inputIsFocused) {
        startInput();
        widenInputField();
    }
})
//input form behavior on lost focus (focusout)
$(".input-form").on("focusout", function () {
    inputIsFocused = false;
    $(".input-form").val("");
    $(".filler").animate({ height: "47px" }, 500, "easeOutExpo");
    $(".to-do-input").animate({ height: "47px" }, 500, "easeOutExpo");
});
//adding a new item to the list
function addNewItemToList() {
    $(".input-form").on("keypress", function (event) {
        if ($(".input-form").val() == "" || $(".input-form").val() == null) return;
        if (event.which == 13) {
            var userInput = $(".input-form").val();
            $(".input-form").val('');
            $(".to-do-input").after('<div class="to-do-item block"></div>');
            $(".to-do-item").first().append('<div class="item-content"></div>');
            numbOfItemsOnList++;
            for (var i = numbOfItemsOnList; i > 1; i--) {
                $(".item-content")[i] = $(".to-do-item")[i - 1];
            }
            $(".item-content").first().text(userInput);
            $(".to-do-item").first().append('<div class="item-delete-hover"></div>');
            startInput();
            itemsOnHover();
            addDeleteButton();
            clickDeleteButton();
            markDone();
        }
    });
}
//items change color on mouse over
function itemsOnHover() {
    $(".to-do-item").hover(function () {
        $(this).children().addClass("to-do-item-hover");
    }, function () {
        $(this).children().removeClass("to-do-item-hover");
    })
}
function doneItemsOnHover() {
    $(".item-done").hover(function () {
        $(this).children().addClass("item-done-hover");
    }, function () {
        $(this).children().removeClass("item-done-hover");
    })
}
//hover on the edge for item delete
function addDeleteButton(toLast = false) {
    if (toLast) {
        $(".item-delete-hover").last().hover(function () {
            $(".delete-icon").remove();
            $(this).append("<div class='delete-icon'</div>");
        }, function () {
            $(".delete-icon").remove();
        });
        return;
    }
    $(".item-delete-hover").first().hover(function () {
        $(".delete-icon").remove();
        $(this).append("<div class='delete-icon'</div>");
    }, function () {
        $(".delete-icon").remove();
    });

}
//delete element on click
function clickDeleteButton(toLast = false) {
    if (toLast) {
        $(".item-delete-hover").last().on("click", function () {
            $(this).parent().animate({ left: "-500px" }, 300, function () {
                $(this).animate({ height: "0px" }, 400, "easeOutExpo", function () {
                    $(this).remove();
                });
            });
            $(this).stop(true, true);
        })
        return;
    }
    $(".item-delete-hover").first().on("click", function () {
        $(this).parent().animate({ left: "-500px" }, 300, function () {
            $(this).animate({ height: "0px" }, 400, "easeOutExpo", function () {
                $(this).remove();
            });
        });
        $(this).stop(true, true);
    })
}
//items marked done on click
function markDone() {
    var inputValue;
    $(".item-content").first().on("click", function () {
        $(this).parent().animate({ left: "-500px" }, 300, function () {
            $(this).animate({ height: "0px" }, 400, "easeOutExpo", function () {
                $(this).remove();
            });
        });
        inputValue = $(this).text();
        $(".listFooter").before($('<div class="item-done block"><div class="item-content"></div><div class="item-delete-hover"></div></div>'));
        $(".item-done .item-content").last().text(inputValue);
        $(".item-done .item-content").last().addClass("marked-done");
        addDeleteButton(true);
        clickDeleteButton(true);
        doneItemsOnHover();

    })
}


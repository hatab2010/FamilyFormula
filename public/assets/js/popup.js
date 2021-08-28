$(".header__link").on("click", show);

let popup = new Popup();

function show(e){
    e.preventDefault();

    let popup = $("[data-popup='"+$(this).data("popup-button")+"']");

    if (popup.length !== 0){
        popup.css("display", "block");
        let t = popup[0].offsetHeight; //Trigger a reflow, flushing the CSS changes
        popup.addClass("popup--show");
    }

    return false;
}

function Popup(){
    const POPUP_CLASS = "popup";

    let _currentPopup = null;

    $(".popup__button--close").on("click", close)

    let _this = this;

    function close(e){
        el = $(this);
        let popup = el.parent().parent();

        popup.on("transitionend", onTransitionEnd)
        popup.removeClass("popup--show");
        _currentPopup = null;

        function onTransitionEnd(){
            popup.css("display", "none")
            popup.off("transitionend", onTransitionEnd);
        }
    }
}
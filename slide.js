function Divs1() {
    for(let i = 1; i<13;i++){
        var bool = check_modals("modal"+i);
        if(bool)break;
    }
    if(!bool){
        
        var divs= $('#set-1 div'),
            now = divs.filter(':visible'),
            next = now.next().length ? now.next() : divs.first(),
            speed = 1000;

        now.fadeOut(speed);
        next.fadeIn(speed);
        var title = document.getElementById("title1");
        if(title.innerHTML=='Piano Robot Controller')title.innerHTML = 'Reflow Oven Controller';
        else if(title.innerHTML=='Reflow Oven Controller')title.innerHTML = 'Line Following Robot';
        else if(title.innerHTML=='Line Following Robot')title.innerHTML = 'Coin Picking Robot';
        else title.innerHTML = 'Piano Robot Controller';
    }
}

function Divs2() {
    for(let i = 1; i<13;i++){
        var bool = check_modals("modal"+i);
        if(bool)break;
    }
    if(!bool){
        var divs= $('#set-2 div'),
            now = divs.filter(':visible'),
            next = now.next().length ? now.next() : divs.first(),
            speed = 1000;

        now.fadeOut(speed);
        next.fadeIn(speed);
        var title = document.getElementById("title2");
        if(title.innerHTML=='Reflow Oven Controller')title.innerHTML = 'Line Following Robot';
        else if(title.innerHTML=='Line Following Robot')title.innerHTML = 'Coin Picking Robot';
        else if(title.innerHTML=='Coin Picking Robot')title.innerHTML = 'Piano Robot Controller';
        else title.innerHTML = 'Reflow Oven Controller';
    }
}

function Divs3() {
    for(let i = 1; i<13;i++){
        var bool = check_modals("modal"+i);
        if(bool)break;
    }
    if(!bool){
        var divs= $('#set-3 div'),
            now = divs.filter(':visible'),
            next = now.next().length ? now.next() : divs.first(),
            speed = 1000;

        now.fadeOut(speed);
        next.fadeIn(speed);
        var title = document.getElementById("title3");
        if(title.innerHTML=='Line Following Robot')title.innerHTML = 'Coin Picking Robot';
        else if(title.innerHTML=='Coin Picking Robot')title.innerHTML = 'Piano Robot Controller';
        else if(title.innerHTML=='Piano Robot Controller')title.innerHTML = 'Reflow Oven Controller';
        else title.innerHTML = 'Line Following Robot';
    }
}
function check_modals(modal_id){
    var modal = document.getElementById(modal_id);
    if(modal.style.display == "block") return true;
    else return false;
}

$(function () {
    setInterval(Divs1, 5000);
    setInterval(Divs2, 5000);
    setInterval(Divs3, 5000);
});
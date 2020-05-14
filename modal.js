function set_modal(modal_id, button_id, span_id){
    var modal = document.getElementById(modal_id);
    var btn = document.getElementById(button_id);
    var span = document.getElementById(span_id);

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
         modal.style.display = "none";
        }
    }
}

set_modal("modal1","modal_button1","span_close1");
set_modal("modal2","modal_button2","span_close2");
set_modal("modal3","modal_button3","span_close3");
set_modal("modal4","modal_button4","span_close4");
set_modal("modal5","modal_button5","span_close5");
set_modal("modal6","modal_button6","span_close6");
set_modal("modal7","modal_button7","span_close7");
set_modal("modal8","modal_button8","span_close8");
set_modal("modal9","modal_button9","span_close9");
set_modal("modal10","modal_button10","span_close10");
set_modal("modal11","modal_button11","span_close11");
set_modal("modal12","modal_button12","span_close12");
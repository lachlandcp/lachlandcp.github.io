function exp_bar() {
    var bars = document.getElementsByClassName("exp_bar");
    var i;
    for (i = 0; i < bars.length; i++) {
        var exp = document.createElement("div");
        exp.style.width = bars[i].getAttribute("data-percent") + "%";
        bars[i].appendChild(exp);
    }
}

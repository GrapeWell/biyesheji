window.addEventListener('load', function() {
    var t = null;
    t = setTimeout(time, 1000);
    var timer = document.querySelector('.timeshow');
    console.log(timer);
    time();

    function time() {
        clearTimeout(t);
        var date = new Date();
        var year = date.getYear() + 1900;
        var mm = date.getMonth() + 1;
        var d = date.getDate();
        var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var day = date.getDay();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if (h < 10) { h = "0" + h; }
        if (m < 10) { m = "0" + m; }
        if (s < 10) { s = "0" + s; }
        timer.innerHTML = year + "年" + mm + "月" + d + "日" + " " + weekday[day] + " " + h + ":" + m + ":" + s + "";
        t = setTimeout(time, 1000);
    }
})
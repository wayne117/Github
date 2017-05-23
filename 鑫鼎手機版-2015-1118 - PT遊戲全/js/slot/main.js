$(document).ready(function () {
    $(document).get(0).oncontextmenu = function () {
        return false;
    };
    $("div.text2").hide();
    $(".boxC h1").click(function () {
        $(this).next(".text2").slideToggle("slow");
    });

    $("#leftsead a").hover(function () {
        if ($(this).prop("className") == "youhui") {
            $(this).children("img.hides").show();
        }
        else if ($(this).prop("className") == "gotop") {
        }
        else {
            $(this).children("img.hides").show();
            $(this).children("img.shows").hide();
            $(this).children("img.hides").animate({ marginRight: '0px' }, 'slow');
        }
    }, function () {
        if ($(this).prop("className") == "youhui") {
            $(this).children("img.hides").hide('slow');
        }
        else if ($(this).prop("className") == "gotop") {
        }
        else {
            $(this).children("img.hides").animate({ marginRight: '-143px' }, 'slow', function () { $(this).hide(); $(this).next("img.shows").show(); });
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".gotop").fadeIn(800);
        }
        else {
            $(".gotop").fadeOut(800);
        }
    });

    $('.abgne-yahoo-carousel').each(function () {
        // 先取得相關的元素及?度等資料
        var $this = $(this), $page = $this.find('.page'), $btn = $this.find('.btn'), _frameWidth = $this.find('.frame').width(), $carousel = $this.find('ul'), $items = $carousel.find('li'), _itemLength = $items.length, _set = Math.ceil(_frameWidth / $items.outerWidth(true)), _count = Math.ceil(_itemLength / _set), _width = _set * $items.outerWidth(true) * -1, _speed = 4000, _opacity = 0.75, _index = 0;
        // 用來顯示目前已顯示及?資料筆數資?
        $page.html('1 - ' + (_set < _itemLength ? _set : _itemLength) + ' / ' + _itemLength);
        // 幫每一? li 加上標題及遮罩
        $items.each(function () { var $this = $(this), _href = $this.find('a').attr('href'); });
        // ?按了上下?的按鈕時
        $btn.find('.prev, .next').click(function (e) {
            // ?算要顯示第幾組
            _index = Math.floor((e.target.className == 'prev' ? _index - 1 + _count : _index + 1) % _count);
            var _lastNum = _set * (_index + 1);
            $page.html((_set * _index + 1) + ' - ' + (_lastNum < _itemLength ? _lastNum : _itemLength) + ' / ' + _itemLength);

            // 進行動?
            $carousel.stop().animate({ left: _index * _width }, _speed);

            e.preventDefault();
        }).focus(function () {
            this.blur();
        });
        // speed 為?播速度
        var timer, speed = 6000, $next = $btn.find('.next');

        $this.hover(function () {
            clearTimeout(timer);
        }, function () {
            timer = setTimeout(auto, speed);
        });
        // 自動?播使用
        function auto() {
            $next.click();
            timer = setTimeout(auto, speed + _speed);
        }
        // 啟動?時器
        timer = setTimeout(auto, speed + _speed);
    });


    $(".gotop").bind('click', function () { $('body,html').animate({ scrollTop: 0 }, 800); });
    $(".portfolio-thumb").css("background", "#000");
    $(".portfolio-thumb img").css({ height: '122px' });

    $("div.blog-post").hover(
    function () {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function () {
        $(this).find("div.content-hide").slideToggle("fast");
    });
    $('.flexslider').flexslider({
        prevText: '',
        nextText: ''
    });

    // Instantiate MixItUp:
    $('#Container').mixItUp();
    $(document).ready(function () {
        $(".fancybox").fancybox();
    });
});
function mouseOut() { //v3.0
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function findObj(n, d) { //v4.01
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n); return x;
}
function mouseOver() { //v3.0
    var i, j = 0, x, a = mouseOver.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}
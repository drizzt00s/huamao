$(function () {
    var _img = $('.slides img');
    var _len = _img.length;
    var _index = 0;
    var _moving;
    //插入图片索引数字
    var _btn = $("#hdfSlides").val();
    var _ul = '<ul>'
    for (var i = 0; i<_len; i++) {
        _ul = _ul + '<li style="background-image: url(' + _btn.split("|")[i] + ');">&nbsp;</li>';
        //                _ul = _ul + '<li>' + i + '</li>';
    }
    _ul = _ul + '</ul>';
    $('div.ico').append(_ul);
    var _ico = $('.ico li');
    //划过数字
    _ico.mouseover(function () {
        _index = _ico.index(this);
        _img.filter(':visible').fadeOut(300, function () {
            _img.eq(_index).fadeIn(300);
        })
        $('div.info').html(_img.eq(_index).attr('title'));
        $(this).addClass('high').siblings().removeClass('high');
    }).eq(_len - 1).mouseover();
    //自动渐变
    _moving = setInterval(autoShow, 5000);
    _img.hover(function () { clearInterval(_moving) }, function () {
        _moving = setInterval(autoShow, 5000);
    })
    function autoShow() {
        _index--;
        if (_index < 0) _index = _len - 1;
        _ico.eq(_index).trigger('mouseover');
    };
});

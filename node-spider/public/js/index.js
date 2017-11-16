(function () {
    var spider = (function () {
        return {
            search: function () {
                $('.search').click(function () {
                    var words = $.trim($('.search-words').val());
                    var num = $.trim($('.search-num').val());
                    if (words == "" || num == "") {
                        return;
                    } else {
                        $('.run').show();
                        $.ajax({
                            type: "GET",
                            url: $('.search').data('url'),
                            data: {
                                words: words,
                                num: num
                            },
                            success: function (result) {
                                if (result.result) {
                                    alert('爬取完成');
                                    $('.run').hide();
                                    $('.search-words').val('');
                                    $('.search-num').val('');
                                    var url = $('.download').data('href');
                                    $('.download').attr({ 'href': url, "download":"爬取结果"});
                                }
                            }
                        })
                    }
                })
            }
        }
    })()
    spider.search();
})()
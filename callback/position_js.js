$(function(){

    window.bodyJs = (function(){

        let div_header , div_body , div_scroll , winInnerHeight, eleHeight, content;
        let screenHeight;

        function init() {
            contents = $('.contents');
            divHeader = $('.div_header');
            divBody = $('.div_body');
            divScroll = $('.div_scroll');
            active = $('.active');
            
            setTimeout(function() {
                childHeight();
            },500);   
        }

        function eventHandler() {
            eleHeight = $('body').attr('data-Ihh', window.innerHeight);

            return eleHeight.attr('data-Ihh');
        }

        function childHeight() {
            winInnerHeight = eventHandler();

            // console.log('%c KMS : JAVASCRIPT : ', 'font-size:20px;border:1px solid #000;color:#000;', 'test', winInnerHeight);
            contents.css({
                'height': winInnerHeight
            });
            divBody.css('height', winInnerHeight - divHeader.innerHeight());
            // console.log('%c KMS : ','font-size:16px;color:red;', divHeader , divHeader.innerHeight);
            divBody.css('margin-top', divHeader.innerHeight());
        }
        
        return {
            init : init,
            eventHandler : eventHandler,
        }

    })();

    bodyJs.init();

});
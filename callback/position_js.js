$(function(){

    window.bodyJs = (function(){

        let div_header , div_body , div_scroll , winInnerHeight, eleHeight, content;
        
        function init() {
            contents = $('.contents');
            divHeader = $('.div_header');
            divBody = $('.div_body');
            divScroll = $('.div_scroll');
            active = $('.active');
            
            setTimeout(function() {
                let screenHeight;

                winInnerHeight = eventHandler();

                // console.log('%c KMS : JAVASCRIPT : ', 'font-size:20px;border:1px solid #000;color:#000;', 'test', winInnerHeight);
                contents.css('height', winInnerHeight);
                console.log(divHeader);
                console.log('%c KMS : ','font-size:16px;color:red;', divHeader , divHeader.innerHeight);
                divBody.css('marginTop,', winInnerHeight - divHeader.innerHeight);
            },500);   
        }

        function eventHandler() {
            eleHeight = $('body').attr('data-Ihh', window.innerHeight);

            return eleHeight.attr('data-Ihh');
        }

        function childHeight() {

        }
        
        return {
            init : init,
            eventHandler : eventHandler,
        }

    })();

    bodyJs.init();

});
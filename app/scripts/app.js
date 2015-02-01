$(function () {

    var $project = $('.project');

    $previousTarget = null;

    var windowHeight = $(window).innerHeight();
    $('.sections .product-shot').height(windowHeight);
    $('.hero').height(windowHeight);

    $(window).resize(function () {
        windowHeight = $(window).innerHeight();
        $('.sections .product-shot').height(windowHeight);
        $('.hero').height(windowHeight);
    });

    $('.toggle-link').click(function(e) {
        var $target = $(e.target);
        var $block = $('.toggle-block');
        $block.toggleClass('active');
        if ($block.hasClass('active')) {
            var position = $(window).scrollTop();
            $(e.target).text('less...');
            $target.data('old-position', position);
            var scrollHandler = function () {
                var height = $block.outerHeight();
                if ($(window).scrollTop() > $block.position().top + height) {
                    $target.text('more...');
                    $block.removeClass('active');
                    $target.removeData('old-position');
                    $.scrollTo('-='+height);
                    $(window).off('scroll', scrollHandler);
                    // $block.css('background', 'red');
                }
            }
            $(window).scroll(scrollHandler);
            // $.scrollTo(position + 10, 400);
        } else {
            $target.text('more...');
            var oldPosition = parseInt($target.data('old-position'));
            $target.removeData('old-position');
            $.scrollTo(oldPosition + 10).scrollTo(oldPosition, 400);
        }
    });

    $('.js-auto-width').each(function(index) {
        $(this).css('display', 'inline-block');
        $(this).css('width', $(this).outerWidth()+1);
        $(this).css('display', '');
    });

    $(document).foundation({
      orbit: {
        animation: 'slide',
        timer: false,
        animation_speed: 400,
        navigation_arrows: true,
        slide_number: false,
        bullets: true,
        variable_height: false
      }
    });

    $(".sections").on("before-slide-change.fndtn.orbit", function(event) {
        var $currentProject = $(event.target).closest('.project');
        $.scrollTo($currentProject, 200);
        if ($currentProject.find('.product-shot.active').index() == 0) {
            $currentProject.closest('.orbit-container').find('.orbit-prev').addClass('hidden');  
            $currentProject.closest('.orbit-container').find('.orbit-next').addClass('big-arrow');
        } else {
            $currentProject.closest('.orbit-container').find('.orbit-prev').removeClass('hidden');  
            $currentProject.closest('.orbit-container').find('.orbit-next').removeClass('big-arrow');
        }
    });

    var $currentProject = $('.project');
    if ($currentProject.find('.product-shot.active').index() == 0) {
        $currentProject.closest('.orbit-container').find('.orbit-prev').addClass('hidden');  
        $currentProject.closest('.orbit-container').find('.orbit-next').addClass('big-arrow');
    }

    // $(document).scrollsnap({
    //     snaps: '.project',
    //     proximity: $(window).innerHeight()/5,
    // });

    // $(window).scroll(function () {
    //     var slides = 4;
    //     var totalHeight = windowHeight * slides;
    //     var currentSlideIndex = Math.floor(($(document).scrollTop() / totalHeight) * slides);
    //     // console.log(currentSlideIndex);
    //     $('.portfolio-page > .orbit-container').css('margin-bottom', '0');
    //     $('.portfolio-page > .orbit-container').removeClass('foreground-section');
    //     $('.portfolio-page > .orbit-container').removeClass('background-section');
    //     if (currentSlideIndex >= 0 && currentSlideIndex < 3) {
    //         // $('.portfolio-page > .orbit-container:eq('+currentSlideIndex+')').css('border-right', '20px solid red');
    //         $('.portfolio-page > .orbit-container:eq('+currentSlideIndex+')').addClass('foreground-section');

    //         // 0 to 1 for each slide
    //         var time = ($(document).scrollTop() / totalHeight) * slides - currentSlideIndex;
    //         var marginTop = (1 - time) * windowHeight;
    //         console.log(marginTop);
    //         // $('.portfolio-page > .orbit-container:eq('+(currentSlideIndex+1)+')').css('margin-top', windowHeight);
    //         $('.portfolio-page > .orbit-container:eq('+(currentSlideIndex)+')').css('margin-bottom', windowHeight);
    //         // $('.portfolio-page > .orbit-container:eq('+(currentSlideIndex+1)+')').css('top', (windowHeight - marginTop));
    //         // $('.portfolio-page > .orbit-container:eq('+(currentSlideIndex+1)+')').css('transform', 'translateY('-);
    //         $('.portfolio-page > .orbit-container:eq('+(currentSlideIndex+1)+')').addClass('background-section');
    //     }
    // });

    // $('.sticky-contact').hide();
    // $(window).scroll(function () {
    //     $('.sticky-contact').fadeIn();
    // });

});
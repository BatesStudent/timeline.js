// JavaScript source code
(function ($) {

    $.fn.timeline = function (options) {

        var points = [];

        $(this).addClass("bar");

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            min: 0,
            max: 100,
            step: 10,
            numberOfPoints: 10,
            ptWidth: 30,
            ptHeight: 30,
            ptBackgroundColor: '#808080',
            ptBorderWidth: 10,
            ptBorderStyle: ' solid #000',
            ptBorderRadius: '50%',
            height: 20
        }, options);

        this.css({
            width: '100%',
            height: settings.height,
            left: (settings.ptWidth / 2 + settings.ptBorderWidth)
        });

        for (i = 0; i < settings.numberOfPoints; i++) {
            var point = { pos: i };
            points.push(point);
        }

        this.pointsBlocks = [];

        $("<span></span>")
            .addClass("point")
            .css({
                left: ((($(this).width()/ settings.step) * points[0].pos -  (settings.ptWidth / 2 + settings.ptBorderWidth)) / $(this).width() * 100).toString() + '%',
                top : -(settings.ptHeight/2), 
                width: settings.ptWidth,
                height: settings.ptHeight,
                'background-color': settings.ptBackgroundColor,
                border: settings.ptBorderWidth.toString() + 'px' + settings.ptBorderStyle,
                'border-radius': settings.ptBorderRadius
            })
            .appendTo(this);

        for (i = 1; i < points.length; i++) {
            pos = points[i].pos;
            
            $("<span></span>")
            .addClass("point")
            .css({
                left: ((($(this).width()/ settings.step) * pos -  (settings.ptWidth / 2 + settings.ptBorderWidth)) / $(this).width() * 100).toString() + '%',
                top : -(settings.ptHeight/2), 
                width: settings.ptWidth,
                height: settings.ptHeight,
                'background-color': settings.ptBackgroundColor,
                border: settings.ptBorderWidth.toString() + 'px' + settings.ptBorderStyle,
                'border-radius': settings.ptBorderRadius
            })
            .appendTo(this);
        }
        /*
        $(this.points).each(function (index, value) {

        });*/


        return this;

    };

} (jQuery));
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
            width: '100%',
            height: 20
        }, options);

        this.css({
            width: settings.width,
            height: settings.height,
            left: (settings.ptWidth / 2 + settings.ptBorderWidth)
        });

        for (i = 0; i < settings.numberOfPoints; i++) {
            var point = { pos: i };
            points.push(point);
        }

        this.pointsBlocks = [];

        for (i = 0; i < points.length; i++) {
            pos = points[i].pos;
            console.log(parseInt(settings.width).toString());
            console.log(((($(this).width()/ settings.step) * pos - ((settings.ptWidth + (settings.ptBorderWidth * 2)) * i) - (settings.ptWidth / 2 + settings.ptBorderWidth)) / $(this).width() * 100).toString() + '%');
            $("<span></span>")
            .addClass("point")
            .css({
                left: ((($(this).width()/ settings.step) * pos - ((settings.ptWidth + (settings.ptBorderWidth * 2)) * i) - (settings.ptWidth / 2 + settings.ptBorderWidth)) / $(this).width() * 100).toString() + '%',
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
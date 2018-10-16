$.fn.set_font_size = function(){
    $('h1').css('font-size',
        25 + $(this).width() / 25
    );
    $('h3').css('font-size',
        6 + $(this).width() / 50
    );
    $('p').css('font-size',
        6 + $(this).width() / 90
    );
    $('p').css('text-align', 'justify');
    $('.sections').css('height',
        $(window).height() * 0.90
    );
};

$.fn.valign_center = function(){
    $(this).css('margin-top',
        ($(this).parent().height() - $(this).height()) / 2
    );
};

$.fn.hide = function(){
    $(this).css('display', 'none');
}

$.fn.show = function(){
    $(this).css('display', 'inline-block');
}

$.fn.align_left = function(){
    $(this).valign_center();
    $(this).css('left', '10px');
    $(this).css('width', '50%');
    $(this).css('text-align', 'left');
    $(this).show();
};

$.fn.align_right = function(){
    $(this).valign_center();
    $(this).css('right', '10px');
    $(this).css('width', '50%');
    $(this).css('text-align', 'right');
    $(this).show();
};

$.fn.home = function(){
    $('#main').css('height', $(this).height());
    $('#content').css('top',
        ($(this).height() - $('#content').height()) / 2
    );
    $('#title').align_left();
    $('#links').align_right();
    $('.sections').hide();
    $(window).set_font_size();
    document.getElementById("misc_actions_text").textContent="useless link";
};

$.fn.view_content = function(){
    $('#main').css('height', $(this).height());
    $('#content').css('top',
        ($(this).height() - $('#content').height()) / 2
    );
    $('#title').hide();
    $('#links').align_right();
    $(window).set_font_size();
    document.getElementById("misc_actions_text").textContent="< return";
}

$(document).ready(function(){
    $(window).set_font_size();
    window.current_view = "home";
    $(window).home();
});

$(window).resize(function(){
    $(window).set_font_size();
    if (window.current_view == "home") {
        $(window).home();
    } else {
        $(window).view_content();
        if (window.current_view == "sec1") {
            $('#sec1_content').align_left();
        }
    }
});

$('#sec1').click(function() {
    window.current_view = "sec1";
    $(window).view_content();
    $('#sec1_content').align_left();
    $('#sec2_content').hide();
    $('#sec3_content').hide();
})

$('#sec2').click(function() {
    window.current_view = "sec2";
    $(window).view_content();
    $('#sec1_content').hide();
    $('#sec2_content').align_left();
    $('#sec3_content').hide();
})

$('#sec3').click(function() {
    window.current_view = "sec3";
    $(window).view_content();
    $('#sec1_content').hide();
    $('#sec2_content').hide();
    $('#sec3_content').align_left();
})

$('#misc_actions').click(function() {
    if (window.current_view != "home") {
        window.current_view = "home";
        $(window).home();
    }
})
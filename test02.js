// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//     });
// })(jQuery,window);

// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//         $('h1').addClass('title');
//         $('#index').removeClass('list'); 
//     });
// })(jQuery,window);

// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//         $('h2').show();
//         $('#index').find('li').eq(0).hide();
//     });
// })(jQuery,window);

// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//         $('#index').find('li').eq(0).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
//     });
// })(jQuery,window);

// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//         var title = $('h1').html('jQueryの<span class="title">htmlメソッド</span>で書き換え');
//         alert(title);
//     });
// })(jQuery,window);

// (function($,window) {
//     $(function() {
//         //この中に処理を書く
//         $('#index').find('li').each(function() {
//             //ループ内の処理
//             alert($(this).text());
//         });
//     });
// })(jQuery,window);

// 課題

(function($,window) {
    $(function() {
       $('h2').remove();
       $('#index1').text('jQueryのtextメソッドで書き換え');
       $('#index2').html('jQueryのhtmlメソッドで書き換え');
       $('#index1').append('<li>メソッド</li>');
    });
})(jQuery,window);

  $(function() {
    $('#index').find('li:eq(0)').each(function() {
      alert($(this).text());
    });
    
    $('#index').find('li:eq(1)').each(function() {
       alert($(this).text()); 
    });
    
    $('#index').find('li:eq(2)').each(function() {
        alert($(this).text());
    });
})(jQuery, window);


$(function(){
    $('#index').find('li:eq(0)').each(function() {
       $(this).text($(this).text()+"[11文字]"); 
    });
    
    $('#index').find('li:eq(1)').each(function() {
        $(this).text($(this).text()+"[4文字]");
    });
    
    $('#index').find('li:eq(2)').each(function() {
        $(this).text($(this).text()+"[3文字]");
    });

})(jQuery,window);
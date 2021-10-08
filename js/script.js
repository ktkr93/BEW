// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeInTrigger').each(function() { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 20; //要素より、30px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeIn'); // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeIn'); // 画面外に出たらfadeInというクラス名を外す
        }

    });

} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
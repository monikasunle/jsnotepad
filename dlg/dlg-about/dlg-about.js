/* exported $dlgAbout */
var $dlgAbout = (function() {
  var $dlg = $(''
        + '<div class="notepad-dlg-mask notepad-dlg-about">'
          +'<div class="dialogbox notepad-dlgbox">'
            + '<div class="notepad-dlg-titlebar">'
              + '<p class="title">关于“记事本”</p>'
              + '<span class="close-btn">✖</span>'
            + '</div>'
            + '<div class="main notepad-dlg-main">'
              + '<h1 class="slogan">JSNotepad</h1>'
              + '<hr>'
              + '<div class="info">'
                + '<p>作者：sl</p>'
                + '<p>QQ：2680655949</p>'
                + '<p>仓库地址：<a href="https://github.com/monikasunle/jsnotepad/" target="_blank">https://github.com/monikasunle/jsnotepad/</a></p>'
              + '</div>'
              + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
            + '</div>'
          + '</div>'
        + '</div>');

  var $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');

  function destory() { $dlg.remove(); }

  function show() {
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $titleBar});
    $btnOk.focus();

    $btnOk.click(destory);
    $btnClose.click(destory);
  }

  return {show: show};
}());

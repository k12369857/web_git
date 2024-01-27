
  // 添加点击文档的事件监听器
  document.addEventListener('click', function(event) {
    var expandToggle = document.getElementById('expand-toggle');
    var languageMenu = document.querySelector('.Language_Bar_Menu');

    // 检查点击的元素是否在 #expand-toggle 或 .language-menu 区域内
    if (!expandToggle.contains(event.target) && !languageMenu.contains(event.target)) {
      // 如果不是，则取消 #expand-toggle 的选中状态
      expandToggle.checked = false;
    }
  });

$(document).ready(function() {
  // 获取轮播项和指示点
  var items = $('.carousel-item');
  var points = $('.carousel-nav button');

  // 定义轮播函数
  function carousel() {
    // 获取当前轮播项
    var activeItem = $('.carousel-item.active');
    // 获取下一轮播项
    var nextItem = activeItem.next();

    console.log(nextItem.length)

    // 如果下一轮播项不存在，则从头开始轮播
    if (!nextItem.length) {
      nextItem = items.first();
    }

    // 切换轮播项和指示点样式
    activeItem.removeClass('active');
    nextItem.addClass('active');
    points.eq(nextItem.index()).addClass('active').siblings().removeClass('active');
  }

  // 定义定时器，每隔5秒切换一次轮播项
  var timer = setInterval(carousel, 2000);

  // 当鼠标悬停在轮播容器上时，清除定时器
  $('.carousel').hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(carousel, 3000);
  });

  // 当点击指示点时，跳转至相应的轮播项
  points.click(function() {
    var index = $(this).index();
    var activeItem = $('.carousel-item.active');
    var nextItem = items.eq(index);

    // 如果当前轮播项和下一个轮播项相同，则不执行任何操作
    if (activeItem.index() == nextItem.index()) {
      return;
    }

    // 切换轮播项和指示点样式
    activeItem.removeClass('active');
    nextItem.addClass('active');
    points.eq(nextItem.index()).addClass('active').siblings().removeClass('active');
  });
});
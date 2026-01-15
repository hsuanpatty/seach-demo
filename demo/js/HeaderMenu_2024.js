$(document).ready(function () {

  // -------------------------------
  // 主選單 hover → 顯示底線與整個子選單
  // -------------------------------
  $('.nav_box').hover(
    function () {
      // 隱藏其他 nav_box 的底線與子選單
      $(this).siblings('.nav_box').find('.under_line').removeClass('active');
      $(this).siblings('.nav_box').find('.sub_menu').removeClass('active');

      // 顯示當前 nav 的底線
      $(this).find('.under_line').addClass('active');

      // 顯示整個子選單區塊（如果有 sub_menu）
      $(this).find('.sub_menu').addClass('active');

      // 初始顯示第一個子選單區塊
      $(this).find('.sub_menu_box:first-child .sub_sub_menu_wrap').addClass('active');
      $(this).find('.sub_menu_box:first-child .sub_menu_title span').addClass('active');
    },
    function () {
      // 滑出 nav_box → 隱藏底線與整個子選單
      $(this).find('.under_line').removeClass('active');
      $(this).find('.sub_menu').removeClass('active');

      // 隱藏所有子選單區塊 active
      $(this).find('.sub_sub_menu_wrap').removeClass('active');
      $(this).find('.sub_menu_title span').removeClass('active');
    }
  );

  // -------------------------------
  // 子選單 hover → 切換子選單區塊
  // -------------------------------
  $('.sub_menu_box').hover(
    function () {
      // 顯示當前子選單區塊
      $(this).find('.sub_sub_menu_wrap').addClass('active');
      $(this).find('.sub_menu_title span').addClass('active');

      // 隱藏同層其他子選單區塊
      $(this).siblings('.sub_menu_box').find('.sub_sub_menu_wrap').removeClass('active');
      $(this).siblings('.sub_menu_box').find('.sub_menu_title span').removeClass('active');
    }
  );

  // -------------------------------
  // 根據 li 數量自動加 class
  // -------------------------------
  $('.sub_menu_list').each(function () {
    const listItems = $(this).find('li').length;
    const containerSpan = $(this).find('span');
    $(this).removeClass('if-over-8 if-over-16 if-over-24');
    containerSpan.removeClass('if-over-8-span');

    if (listItems >= 8 && listItems <= 16) {
      $(this).addClass('if-over-8');
      containerSpan.addClass('if-over-8-span');
    } else if (listItems > 16 && listItems <= 24) {
      $(this).addClass('if-over-16');
      containerSpan.addClass('if-over-8-span');
    } else if (listItems > 24) {
      $(this).addClass('if-over-24');
      containerSpan.addClass('if-over-8-span');
    }
  });

});




document.addEventListener('DOMContentLoaded', function () {
  var menuLists = document.querySelectorAll('.sub_menu_list');

  menuLists.forEach(function (menuList) {
    var listItems = menuList.querySelectorAll('li');
    var containerSpan = menuList.querySelector('span');
    if (listItems.length >= 8 && listItems.length <= 16) {
      //menuList.classList.add('if-over-8');
      containerSpan.classList.add('two_column');
    } else if (listItems.length>16) {
      //menuList.classList.add('if-over-16');
      containerSpan.classList.add('three_column');
    }
  });
});

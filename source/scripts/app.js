$(document).ready(() => {
  // Main Navigation
  $('.nav-item').on('click', (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('href').substring(1);
    $('.panel').removeClass('is-active');
    $('#container').removeClass();
    if ($this.hasClass('is-active')) {
      $this.removeClass('is-active');
      $('.panel.content-hero').addClass('is-active');
      $('#container').addClass('active-hi-there');
    } else {
      $(`.panel[data-section-name="${target}"]`).addClass('is-active');
      $('#container').addClass(`active-${target}`);
      $('.nav-item').removeClass('is-active');
      $this.addClass('is-active');
    }
  });
});
$(window).load(() => {
  $('body').addClass('is-loaded');
});

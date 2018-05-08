$(document).ready(() => {
  // Main Navigation
  $('.nav-item, .inline-link').on('click', (e) => {
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
      $(`.nav-item[href="#${target}"]`).addClass('is-active');
    }
  });

  // Contact Security Question
  let checkDiv = '';
  $('.check-answer').on('click', (e) => {
    const magicNumber = 666;
    const mailPre = 'info';
    const mailAt = '@';
    const mailSuf = 'domesticjones.com';
    const phone = '208.371.9234';
    const thisVal = $(e.currentTarget).data('val');
    $('#contact-pass').addClass('is-answered').slideDown();
    $('#contact-check').slideUp(1500, () => {
      checkDiv = $('#contact-check').detach();
    });
    if (magicNumber === thisVal) {
      $('body').addClass('is-human');
      $('#contact-fail').remove();
      const mailString = `<li><a href="mailto:${mailPre}${mailAt}${mailSuf}" target="_blank"><i><img src="images/social-mail.svg" alt="icon for email" /></i><span>${mailPre}${mailAt}${mailSuf}</span></a></li>`;
      const phoneString = `<li><a href="tel:${phone}" target="_blank"><i><img src="images/social-phone.svg" alt="icon for telephone" /></i><span>${phone}</span></a></li>`;
      $('#contact-personal').append(`${mailString}${phoneString}`).slideDown();
    }
  });
  // Contact Try Again
  $('#contact-try').on('click', (e) => {
    e.preventDefault();
    $('.contact-info h1').after(checkDiv);
    $('#contact-check').slideDown();
    $('#contact-pass').slideUp();
  });
});
$(window).load(() => {
  $('body').addClass('is-loaded');
});

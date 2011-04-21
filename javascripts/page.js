$(function () {
  if ($('.twitter').length) {
    $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=james_an&count=4&trim_user=1&include_rts=1&callback=?', function (data) {
      $.each(data, function () {
        var date = new Date((this.created_at).replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/, "$1 $2 $4 $3 UTC"));
        var timeAgo = $.timeago(date);
        var dateISOString = date.toISOString();
        var text = (this.text).parseTwitter();
        $('.twitter nav').before('<article class="small">' + text + '<time pubdate datetime="' + dateISOString + '" class="smaller">' + timeAgo + '</time></article>');
        $('.twitter > :nth-last-child(2)').hide().slideDown('slow');
      });
    });
  }

  $('.gallery').tinyLightbox({animation: 'parallel', speed: 400});

  $('a[href^=http]').click( function() {
    window.open(this.href);
    return false;
  });

  $('.glance .icons img, body > footer img').load(function() {
    $(this).each(function() {
      var alt = $('<span/>').text($(this).attr('alt'));
      
      $(alt)
        .addClass('alt')
        .css('left', $(this).offset().left)
        .css('top', $(this).offset().top)
        .insertAfter($(this))
        .contents().stretch().end();
    })
    .mouseenter(function() {
      $(this).fadeTo('fast', 0.5)
        .next('span').css('z-index', '0');
    })
    .next('span').mouseleave(function() {
      $(this).css('z-index', '-1')
        .prev('img').fadeTo('fast', 1);
    });
  });

  $('#content .project').each(function() {
    $(this)
      .mouseenter(function() {
        $(this)
          .css('border', '#F7931E solid 3px')
          .css('margin', '0')
          .children('span')
            .fadeTo('fast', 1)
            // Workaround for Webkit browsers that can't stretch text on ready.
            .contents().stretch();
      })
      .mouseleave(function() {
        $(this)
          .css('border', 'none')
          .css('margin', '3px')
          .children('span')
            .fadeTo('fast', 0.01);
      })
      .children('span').fadeTo(0, 0.01).contents().stretch();
  });

/*
  $('#contact form img').load(function () {
    //$(this).pixastic("invert");
  });

  $('#contact form').submit(function () {
    $.getJSON({
      url: "http://kontactr.com/euser.php",
      data: $(this).serialize() + '&callback?',
      success: function(data) {
        alert(data);
        $('##contact form').html("<div id='message'></div>");
        $('#message').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          //$('#message').append("<img id='checkmark' src='images/check.png' />");
        });
      }
    });
    return false;
  });
*/
});
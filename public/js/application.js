$(document).ready(function() {
  $(".thumbnail").on('click', function(e){
    e.preventDefault();
    console.log(this);

  })

  $(".next").on("click", function(e){
    e.preventDefault();
    var $this = $(this)
    var step = parseInt($this.data('step-id'))
    if (step < 29){
      step++;
      $this.find("img").replaceWith('<img class="main_image" src="/images/crane' + step + '.jpg">');
      $this.data('step-id', step);
    }
    else {
      $this.find("img").replaceWith('<img class="main_image" src="/images/start.jpg">');
      $this.data('step-id', 0);
    }
  });

  $(".back").on("click", function(e){
    e.preventDefault();
    var step = parseInt($('.next').data('step-id'));
    console.log(step);
    if (step >= 2 && step <= 29) {
      step--;
      console.log(step)
      $('.next').find("img").replaceWith('<img class="main_image" src="/images/crane' + step + '.jpg">');
      $('.next').data('step-id', step);
    }
    else if (step == 1) {
      step = 0;
      $('.next').find("img").replaceWith('<img class="main_image" src="/images/start.jpg">');
      $('.next').data('step-id', step);
    }
    else {
       $('.next').find("img").replaceWith('<img class="main_image" src="/images/crane29.jpg">')
       $('.next').data('step-id', 29)
    }
  });

  $(".fa-home").on("click", function(e){
    e.preventDefault();
    var step = parseInt($('.next').data('step-id'));
    $('.next').find("img").replaceWith('<img class="main_image" src="/images/start.jpg">');
    $('.next').data('step-id', 0);
  });

});

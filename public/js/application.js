$(document).ready(function() {

  var currentOrigamiType = 'origami-type';

  $(".thumbnail").on('click', function(e){
    e.preventDefault();
    // console.log($(this).closest('a').attr('name'));
    var choice = $(this).closest('a').attr('name');
    var num_of_img = $(this).closest('a').attr('number');
    $('.next').data('num-of-img', num_of_img);
    // console.log($('.next').data('origami_type'));
    $.ajax({
      url: '/',
      method: 'get',
      data: { origami_type: choice }
    })
    .done(function(response){
    $('.next').data(currentOrigamiType, response);
    // console.log($('.next').data(currentOrigamiType));
    })
  })

  $(".next").on("click", function(e){
    e.preventDefault();
    var $this = $(this);
    var step = parseInt($this.data('step-id'));
    // debugger;
    var type = $this.data(currentOrigamiType);
    var total_num_of_img = parseInt($this.data('num-of-img'));
    if (step < total_num_of_img){
      step++;
      $this.find("img").replaceWith('<img class="main_image" src="/images/' + type + step + '.jpg">');
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
    var type = $('.next').data(currentOrigamiType)
    var total_num_of_img = parseInt($('.next').data('num-of-img'));
    // console.log(step);
    if (step >= 2 && step <= total_num_of_img) {
      step--;
      // console.log(step)
      $('.next').find("img").replaceWith('<img class="main_image" src="/images/'+ type + step + '.jpg">');
      $('.next').data('step-id', step);
    }
    else if (step == 1) {
      step = 0;
      $('.next').find("img").replaceWith('<img class="main_image" src="/images/start.jpg">');
      $('.next').data('step-id', step);
    }
    else {
       $('.next').find("img").replaceWith('<img class="main_image" src="/images/' + type + total_num_of_img + '.jpg">');
       $('.next').data('step-id', total_num_of_img);
    }
  });

  $(".fa-home").on("click", function(e){
    e.preventDefault();
    var step = parseInt($('.next').data('step-id'));
    $('.next').find("img").replaceWith('<img class="main_image" src="/images/start.jpg">');
    $('.next').data('step-id', 0);
  });

});

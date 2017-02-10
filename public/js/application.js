$(document).ready(function() {
  $(".next").on("click", function(e){
    e.preventDefault();
    console.log(this);
    var $this = $(this)
    var step = parseInt($this.data('step-id'))
    if (step < 29){
    step++;
    console.log(step)
    $this.find("img").replaceWith('<img src="/images/crane' + step + '.jpg">');
    $this.data('step-id', step);
    }
    else {
      $this.find("img").replaceWith('<img src="/images/start.jpg">');
      $this.data('step-id', 0);
    }
  })

  $(".back").on("click", function(e){
    e.preventDefault();
    console.log(this);
    var $this = $(this);
    var step = parseInt($this.siblings('a').data('step-id'));
    console.log(step);
    if (step >= 2 && step <= 29) {
    step--;
    console.log(step)
    $this.siblings('a').find("img").replaceWith('<img src="/images/crane' + step + '.jpg">');
    $this.data('step-id', step);
    }
    else if (step == 1) {
      step = 0;
      $this.siblings('a').find("img").replaceWith('<img src="/images/start.jpg">');
      $this.data('step-id', step);
    } else {
       $this.siblings('a').find("img").replaceWith('<img src="/images/crane29.jpg">')
    }
  })


});

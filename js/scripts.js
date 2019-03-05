$(document).ready(function(){
  $('.zoom').on('click', function() {
    rocketcss(this,'.boxOne', 'rocketPulse');
    $('.boxOne').addClass('targetPulse');
      event.preventDefault();
  });
});

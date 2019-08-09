new Dragdealer('src-simple-slider');

$(function() {
  var carousel = new Dragdealer('image-carousel', {
    steps: 4,
    speed: 0.3,
    loose: true
  });

  document.querySelector('.feedback-container .button-next').onclick = function() {
    const currentStep = carousel.getStep()[0];
    if (currentStep < 4){
    carousel.setStep(currentStep + 1)}
    else {
      carousel.setStep(1)
    }
  }

  document.querySelector('.feedback-container .button-prev').onclick = function() {
  const currentStep = carousel.getStep()[0];
  if (currentStep <= 1){
  carousel.setStep(3)}
  else {
  carousel.setStep(currentStep - 1)}
  }
})

$(function() {
  var carousel = new Dragdealer('smi-carousel', {
    steps: 4,
    speed: 0.3,
    loose: true
  });

  document.querySelector('.smi-container .button-next').onclick = function() {
    const currentStep = carousel.getStep()[0];
    if (currentStep < 4){
    carousel.setStep(currentStep + 1)}
    else {
      carousel.setStep(1)
    }
  }
  document.querySelector('.smi-container .button-prev').onclick = function() {
    const currentStep = carousel.getStep()[0];
    if (currentStep <= 1){
    carousel.setStep(3)}
    else {
    carousel.setStep(currentStep - 1)}
  }
})


menu.onclick = function myFunction() {
  var x = document.getElementById("topnav");

  if(x.className === "navigations") {
    x.className += " responsive";
  }  else {
    x.className = "navigations";
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm5ldyBEcmFnZGVhbGVyKCdzcmMtc2ltcGxlLXNsaWRlcicpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICB2YXIgY2Fyb3VzZWwgPSBuZXcgRHJhZ2RlYWxlcignaW1hZ2UtY2Fyb3VzZWwnLCB7XG4gICAgc3RlcHM6IDQsXG4gICAgc3BlZWQ6IDAuMyxcbiAgICBsb29zZTogdHJ1ZVxuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2stY29udGFpbmVyIC5idXR0b24tbmV4dCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IGNhcm91c2VsLmdldFN0ZXAoKVswXTtcbiAgICBpZiAoY3VycmVudFN0ZXAgPCA0KXtcbiAgICBjYXJvdXNlbC5zZXRTdGVwKGN1cnJlbnRTdGVwICsgMSl9XG4gICAgZWxzZSB7XG4gICAgICBjYXJvdXNlbC5zZXRTdGVwKDEpXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLWNvbnRhaW5lciAuYnV0dG9uLXByZXYnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGN1cnJlbnRTdGVwID0gY2Fyb3VzZWwuZ2V0U3RlcCgpWzBdO1xuICBpZiAoY3VycmVudFN0ZXAgPD0gMSl7XG4gIGNhcm91c2VsLnNldFN0ZXAoMyl9XG4gIGVsc2Uge1xuICBjYXJvdXNlbC5zZXRTdGVwKGN1cnJlbnRTdGVwIC0gMSl9XG4gIH1cbn0pXG5cbiQoZnVuY3Rpb24oKSB7XG4gIHZhciBjYXJvdXNlbCA9IG5ldyBEcmFnZGVhbGVyKCdzbWktY2Fyb3VzZWwnLCB7XG4gICAgc3RlcHM6IDQsXG4gICAgc3BlZWQ6IDAuMyxcbiAgICBsb29zZTogdHJ1ZVxuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc21pLWNvbnRhaW5lciAuYnV0dG9uLW5leHQnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBjYXJvdXNlbC5nZXRTdGVwKClbMF07XG4gICAgaWYgKGN1cnJlbnRTdGVwIDwgNCl7XG4gICAgY2Fyb3VzZWwuc2V0U3RlcChjdXJyZW50U3RlcCArIDEpfVxuICAgIGVsc2Uge1xuICAgICAgY2Fyb3VzZWwuc2V0U3RlcCgxKVxuICAgIH1cbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc21pLWNvbnRhaW5lciAuYnV0dG9uLXByZXYnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSBjYXJvdXNlbC5nZXRTdGVwKClbMF07XG4gICAgaWYgKGN1cnJlbnRTdGVwIDw9IDEpe1xuICAgIGNhcm91c2VsLnNldFN0ZXAoMyl9XG4gICAgZWxzZSB7XG4gICAgY2Fyb3VzZWwuc2V0U3RlcChjdXJyZW50U3RlcCAtIDEpfVxuICB9XG59KVxuXG5cbm1lbnUub25jbGljayA9IGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BuYXZcIik7XG5cbiAgaWYoeC5jbGFzc05hbWUgPT09IFwibmF2aWdhdGlvbnNcIikge1xuICAgIHguY2xhc3NOYW1lICs9IFwiIHJlc3BvbnNpdmVcIjtcbiAgfSAgZWxzZSB7XG4gICAgeC5jbGFzc05hbWUgPSBcIm5hdmlnYXRpb25zXCI7XG4gIH1cbn0iXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

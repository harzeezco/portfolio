
const header = document.querySelector('.header__burger');
const headerWrapper = document.querySelector('.header__wrapper')
const headerImg = document.querySelector('.header-img')
const html = document.getElementById('html')
const body = document.getElementById('body')
const wrapper = document.querySelector('.js-header-wrapper')

// const img = document.createElement('img');
// img.src = `img/Menu icon.png`;
// img.classList.add('header-img');
// header.appendChild(img)

header.addEventListener('click', () => {
    headerWrapper.classList.toggle('visible')
     
    if (headerWrapper.classList.contains('visible')) {
        headerImg.src =  `img/Menubar.png` 
    }
    else {
       headerImg.src = `img/Menu icon.png`
    }



    //  img.src ? mg.src =  `img/Menubar.png` : ``
  
    
     html.classList.toggle('no-scroll')
     body.classList.add('no-scroll')
     
    
    
})





// function parallax() {
//   var parallax = document.querySelectorAll('.js-parallax');
  
//   if (parallax.length) {
//     for (var i = 0; i < parallax.length; i++) {
//       var _this = parallax[i];
//       var scale = _this.getAttribute('data-scale');
//       var orientation = _this.getAttribute('data-orientation');

//       _this, {
//         scale: scale,
//         orientation: orientation,
//         delay: 10,
//         overflow: true,
//         transition: 'cubic-bezier(0,0,0,1)'
//       };
      
      
//     }
    
//   }
// };
// parallax()



function parallax() {
  var parallax = document.querySelectorAll('.js-parallax');

  if (parallax.length) {
    for (var i = 0; i < parallax.length; i++) {
      var _this = parallax[i];
      var scale = _this.getAttribute('data-scale');
      var orientation = _this.getAttribute('data-orientation');

      // Apply the parallax effect to the element
      _this.style.backgroundPosition = `${orientation} ${scale * 100}%`;
        _this.style.overflow = "true";
        _this.style.transition = "cubic-bezier(0,0,0,1)";
        // console.log( _this);
    }
  }
  
}

// Call the function to apply the parallax effect
parallax();




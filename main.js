const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    autoplay: {
        delay:2000,
        disableOneInteraction: false,
    },
    effect: 'cube',
    // cubeEffect: {    
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowSlide: 0.94,
    // }

  });
  swiper.on("slideChange" , () =>{
    const slideRRaqam = swiper.activeIndex;
    if(slideRRaqam === 0){
        document.body.style.backgroundColor = "#FFDEC2"
    }
    if(slideRRaqam === 1){
        document.body.style.backgroundColor = "#ADB0B0"
    }
    if(slideRRaqam === 2){
        document.body.style.backgroundColor = "#75E39A  "
    }
    if(slideRRaqam === 3){
        document.body.style.backgroundColor = "#FFA895"
    }
  })
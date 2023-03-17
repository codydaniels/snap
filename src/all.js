
// gsap.registerPlugin(ScrollTrigger);

// //Mobile mobileHamburger menu toggle
// // const mobileHamburger = $('#mobileHamburger');
// // const close = $('#close');
// // const mobileNav = $('#mobile-nav')

// // mobileHamburger.on('click',()=>{
// //   mobileNav.toggle()
// // })
// // close.on('click',()=>{
// //   mobileNav.toggle()
// // })

// // //Build share links
// // const share = $('.js-share');
// // if(share.length > 0){
// //   share.each(function(){
// //     const link = $(this).data('share');
// //     $(this).attr('href',link+window.location.href);
// //   })
// // }

// //Temp redirect TODO: Remove
// // if ( window.location.href.includes("#confirmed") ){
// //   window.location.replace("/confirmed")
// // }else if( window.location.href.includes("#done") ){
// //   window.location.replace("/done")
// // }
// gsap.registerPlugin(ScrollTrigger);
//   //Remove / Add shadow
//   // gsap.to("#js-nav, #js-dropdown-bg", {
//   //   backgroundColor: '#030102',
//   //   boxShadow: '0 .125rem .25rem rgba(0,0,0,.5)',
//   //   ease: "none",
//   //   scrollTrigger: {
//   //     trigger: "html",
//   //     start: "top top",
//   //     end: "+=140px top",
//   //     scrub:false
//   //   }
//   // });




// //Counters

// //let elements = document.querySelectorAll("li")



// //GSDevTools.create()


// //review
// //Animation
// const review = document.getElementById("js-review-section")
// const reviewMobile = document.getElementById("js-review-section-mobile")
// if(review || reviewMobile){

//   var tReview = gsap.timeline({ paused:true })
//   .to(review,{x:-50,opacity:0,duration:.15})
//   .to(review,{duration: .05})
//   .pause()
//   .to(review,{duration: .05})
//   .to(review,{x:50,opacity:0, duration: 0})
//   .to(review,{x:0,opacity:1,duration:.15})
//   var tReviewMobile = gsap.timeline({ paused:true })
//   .to(reviewMobile,{x:-50,opacity:0,duration:.15})
//   .to(reviewMobile,{duration: .05})
//   .pause()
//   .to(reviewMobile,{duration: .05})
//   .to(reviewMobile,{x:50,opacity:0, duration: 0})
//   .to(reviewMobile,{x:0,opacity:1,duration:.15})

//   //Pagination
//   //todo - Cody by size call ./reveiw-list or ./review-list-mobile
//   fetchReview('/review-list/');
//   function fetchReview(path){
//     fetch(path)
//       .then((res)=>res.text())
//       .then((data)=>{
//         review.innerHTML = data;
//         //Review open/close
//         let reviewText = $(".js-review-text")
//         let reviewTextBtn = $(".js-review-text-btn")
//         let tReviewText = []
//         if(reviewText[0]){ for(let i=0; i<reviewText.length; i++) {
//           if ($(reviewText[i]).innerHeight() < 100){ 
//             $(reviewTextBtn[i]).html("&nbsp;")
//             $(reviewText[i]).innerHeight(100) 
//           }else{
//             addReviewToggle(i,reviewText,reviewTextBtn,tReviewText);
//           }
//         }}
//       })
//   }
//   function addReviewToggle(i,reviewText,reviewTextBtn,tReviewText){
//     tReviewText[i] = gsap.timeline()
//     .add(()=>{$(reviewTextBtn[i]).html("Close ↑")})
//     .to(reviewText[i],{height:100})
//     .add(()=>{$(reviewTextBtn[i]).html("... Read more")})
//     .addLabel("end")
//     .seek("end")
//     $(reviewTextBtn[i]).on('click',()=>{ 
//       tReviewText[i].reversed() ?  tReviewText[i].play() : tReviewText[i].reverse();
//     })
//   }
//   fetchReviewMobile('/review-list-mobile/');
//   function fetchReviewMobile(path){
//     fetch(path)
//     .then((res)=>{
//       return res.text()
//     })
//     .then((data)=>{
//       reviewMobile.innerHTML = data;
//       let reviewText = $(".js-review-text")
//       let reviewTextBtn = $(".js-review-text-btn")
//       let tReviewText = []
//       if(reviewText[0]){ for(let i=0; i<reviewText.length; i++) {
//         if ($(reviewText[i]).innerHeight() < 100){ 
//           $(reviewTextBtn[i]).html("&nbsp;")
//           $(reviewText[i]).innerHeight(100) 
//         }else{
//           addReviewToggle(i,reviewText,reviewTextBtn,tReviewText);
//         }
//       }}
//     })
//   }
//   function fetchNextReview(path, rightArrow){
//     if (rightArrow == true){
//       tReview.seek(0).play()
//       setTimeout(()=>{
//         fetch(path).then((res)=>res.text()).then((data)=>{
//           review.innerHTML = data;
//           tReview.play()
//         })
//       },150)
//     }else{
//       tReview.seek(tReview.duration()).reverse()
//       setTimeout(()=>{
//         fetch(path).then((res)=>res.text()).then((data)=>{
//           review.innerHTML = data;
//           tReview.reverse()
//         })
//       },150)
//     }
//   }
//   function fetchNextReviewMobile(path, rightArrow){
//     if (rightArrow == true){
//       tReview.seek(0).play()
//       setTimeout(()=>{
//         fetch(path).then((res)=>res.text()).then((data)=>{
//           reviewMobile.innerHTML = data;
//           tReviewMobile.play()
//         })
//       },150)
//     }else{
//       tReview.seek(tReview.duration()).reverse()
//       setTimeout(()=>{
//         fetch(path).then((res)=>res.text()).then((data)=>{
//           reviewMobile.innerHTML = data;
//           tReviewMobile.reverse()
//         })
//       },150)
//     }
//   }

// }



// //Header Nav BG color toggle on scroll - Switch to jquery for better compatibility with simultaneous animations
// var onscrollTimeout;
// $(window).scroll(function() {    

//   //Set polling frequency
//   if (onscrollTimeout) {
//     clearTimeout(onscrollTimeout);
//   }
//   onscrollTimeout = setTimeout(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 10) {
//       $("#js-nav, #js-dropdown-bg").addClass("js-nav-bg-black");
//     } else {
//         $("#js-nav, #js-dropdown-bg").removeClass("js-nav-bg-black");
//     }
//   }, 250);

// });
// //Encryption by R13
// //jQuery demo
// const unencrypt = $(".js.unencrypt")
// for (let i=0;i<unencrypt.length;i++){
//   $(unencrypt[i]).html( decryptR13(unencrypt[i].innerHTML) )
// }


// function decryptR13(encrypted){  

//   let encryptedArr = encrypted.split("");
  
//   let decrypted = encryptedArr.map(s=>s.replace(/[a-zA-Z]/g, function(char){return String.fromCharCode(
//     char.charCodeAt(0) + (char.toLowerCase() >= 'n' ? -13 : 13));
//   })).map(s=>s.replace(/[0-9*]/g, function(num){
//     return num == "*" ? 9 : parseInt(num)-1 })).join('');
  
//   return decrypted
// }

// //Animate Header Navigation Sub-menus
// const dropdownBg = $("#js-dropdown-bg");
// const dropdownTitle = $(".js-dropdown-title")
// const dropdown = $(".js-dropdown")
// var dropdownHeight = []
// var dropdownSpeed = []
// var dropdownData = []
// //Combine data
// for (i=0; i<dropdown.length; i++){
//   dropdownHeight[i] = $(dropdown[i]).outerHeight()
//   //if(dropdownHeight[i] < 1){ dropdownHeight = 124; }//Set minimum height when tablet hamburger is hidden on larger screens
//   dropdownData[i] = {height:  dropdownHeight[i], time: undefined, timeFromStart: undefined, title: dropdownTitle[i], menu: dropdown[i] }
// }
// //Sort by height
// dropdownData.sort(function(a,b){return a.height > b.height})
// //Calculate times using height difference
// var prevHeight = 0
// var prevTime = 0
// for (i=0; i<dropdown.length; i++){
//   dropdownData[i].time = (dropdownData[i].height  - prevHeight)*.0015
//   prevHeight = dropdownData[i].height;
//   dropdownData[i].timeFromStart = dropdownData[i].time + prevTime
//   prevTime = dropdownData[i].timeFromStart;

// }

// //Timelines and listeners
// tDropdownBg = gsap.timeline({ paused:true })
// tDropdown = []
// for (i=0; i<dropdownData.length; i++){
  
//   //Build timelines
//   tDropdownBg.to(dropdownBg, {height:dropdownData[i].height, duration:dropdownData[i].time, ease:"none"})
//     .addLabel(i)

//   gsap.set(dropdownData[i].menu, {autoAlpha:0})
//   tDropdown[i] = gsap.timeline({ paused:true })
//     .to({}, {duration:dropdownData[i].timeFromStart})
//     .to(dropdownData[i].menu, {autoAlpha:1, ease:"none",duration:.25})

//   //Add listeners
//   let index = i
//   $(dropdownData[i].title).on('mouseenter',()=>{
//     tDropdownBg.tweenTo(index.toString())
//     for (j=0; j<tDropdown.length; j++){
//       if(index == j){ tDropdown[j].play();}
//       else{ tDropdown[j].pause(0) }
//     }
//     $("#js-nav, #js-dropdown-bg").addClass("js-nav-bg-black");
//   })

//   $(".js-close-dropdown").on('mouseenter',()=>{
//     tDropdownBg.reverse()
//     for (j=0; j<tDropdown.length; j++){
//       tDropdown[j].pause(0)
//     }
//     if ($(window).scrollTop() <= 10) {
//       $("#js-nav, #js-dropdown-bg").removeClass("js-nav-bg-black");
//     }
//   })

//   $("#js-nav").on('mouseleave',()=>{
//     tDropdownBg.reverse()
//     for (j=0; j<tDropdown.length; j++){
//       tDropdown[j].pause(0)
//     }
//     if ($(window).scrollTop() <= 10) {
//       $("#js-nav, #js-dropdown-bg").removeClass("js-nav-bg-black");
//     }
//   })

// }


// // const eventsMenu = $("#js-events-menu");
// // const eventsMenuH = eventsMenu.outerHeight();
// // const eventsMenuSpeed = eventsMenuH*.0015
// // const servicesMenu = $("#js-services-menu");
// // const servicesMenuH = servicesMenu.outerHeight();
// // const servicesMenuSpeed = eventsMenuH*.0015
// // const eventsIsLarger = eventsMenuH > servicesMenuH ? true : false;
// // const dropdownBg = $("#js-dropdown-bg");

// // tDropdownBg = gsap.timeline({ paused:true })
// // if (eventsIsLarger){
// //   tDropdownBg.to(dropdownBg, {height:servicesMenuH, duration:servicesMenuSpeed, ease:"none"})
// //     .add("services")
// //     .to(dropdownBg, {height:eventsMenuH, duration:eventsMenuSpeed, ease:"none"})
// //     .add("events");
// // }else{
// //   tDropdownBg.to(dropdownBg, {height:eventsMenuH, duration:eventsMenuSpeed, ease:"none"})
// //     .add("events")
// //     .to(dropdownBg, {height:servicesMenuH, duration:servicesMenuSpeed, ease:"none"})
// //     .add("services");
// // }


// // gsap.set(eventsMenu,{opacity:0})

// // tEventsMenu = gsap.timeline({ paused:true })
// //   .to({}, {duration:eventsMenuSpeed})
// //   .to(eventsMenu, {opacity:1, ease:"none"})

// // gsap.set(servicesMenu,{opacity:0})
// // tServicesMenu = gsap.timeline({ paused:true })
// //   .to({}, {duration:servicesMenuSpeed})
// //   .to(servicesMenu, {opacity:1, ease:"none"})



// // $("#js-services").on('mouseenter',()=>{
// //   tDropdownBg.tweenTo("services")
// //   tEventsMenu.pause(0)
// //   tServicesMenu.play()
// //   $("#js-nav, #js-dropdown-bg").addClass("js-nav-bg-black");
// // })

// // $(".js-close-dropdown").on('mouseenter',()=>{
// //   tDropdownBg.reverse()
// //   tEventsMenu.pause(0)
// //   tServicesMenu.pause(0)
// //   if ($(window).scrollTop() <= 10) {
// //     $("#js-nav, #js-dropdown-bg").removeClass("js-nav-bg-black");
// //   }
// // })

// // $("#js-nav").on('mouseleave',()=>{
// //   tDropdownBg.reverse()
// //   tEventsMenu.pause(0)
// //   tServicesMenu.pause(0)
// //   if ($(window).scrollTop() <= 10) {
// //     $("#js-nav, #js-dropdown-bg").removeClass("js-nav-bg-black");
// //   }
// // })




// // Slide mobile navigation menu
// gsap.set('#mobile-nav', {duration:0,yPercent:-100,ease:Power1.easeInOut})
// var tMobileHamburger = gsap.timeline({ paused:true })
//   .to('#mobile-nav', {duration:0,yPercent:-100,ease:Power1.easeInOut})
//   .to('#mobile-nav', {duration:0.3,yPercent:0,ease:Power1.easeInOut})

// //tMobileHamburger.play()
// // Close mobile navigation menu on resize
// $(window).on('resize', ()=> {
//   tMobileHamburger.reverse()
// });
// // Setup click listeners for mobile mobileHamburger navigation
// $(document).on('click', function(event) {
//   var $target = $(event.target);
//   // Check for on-target clicks
//   if( $target.is($("#js-mobile-hamburger, #js-mobile-close")) ) {
//     tMobileHamburger.time() == 0 ? tMobileHamburger.play() : tMobileHamburger.reverse()
//   // Check for off-target clicks
//   }
  
//   // else if( $target.closest('#js-mobile-hamburger, #mobile-nav').length === 0 && tMobileHamburger.reversed() ) {
//   //   tMobileHamburger.play()
//   // }
// });

// //Add dropdown animation
// const mobileDropdown = {
//   title: $(".js-mobile-dropdown-title"),
//   menu:  $(".js-mobile-dropdown"),
//   caret: $(".js-mobile-dropdown-caret")
// }

// var tMobileDropdown = []
// for(let i=0;i<mobileDropdown.title.length;i++){
//   //Timelines
//   tMobileDropdown[i] = gsap.timeline({ paused:true })
//     .from(mobileDropdown.menu[i], {duration:.5,height:0,ease:Power1.easeInOut})
//     .to(mobileDropdown.caret[i], {duration:.5,rotate:90,ease:Power1.easeInOut},"-=.5")

//   //Listeners
//   $(mobileDropdown.title[i]).on('click',()=>{
//     tMobileDropdown[i].time() == 0 ? tMobileDropdown[i].play() : tMobileDropdown[i].reverse()
//   })
// }



// //--Check availability form--//

// //Connect run check availability form
// const checkForm = {
//   date:   $('.js-check-form-date'),
//   year:   $('.js-check-form-year'),
//   month:  $('.js-check-form-month'),
//   day:    $('.js-check-form-day')
// }
// //Add up-to-date year options
// for (let i=0;i<checkForm.year.length;i++){
//   var x = new Date().getFullYear();
//   for(var j=0;j<5;j++){
//     var o = document.createElement("OPTION");
//     o.text = j+x;o.value = j+x;
//     checkForm.year[i].options.add(o);
//   }
// }
// //Use modern date selector to update old gigbuilder form
// function updateForm(i){
//   let date = checkForm.date[i].value
//   let year = date.substring(0, 4)
//   let month = parseInt(date.substring(5, 7), 10) 
//   let day = parseInt(date.substring(8, 10), 10) 
//   checkForm.year[i].value = year
//   checkForm.month[i].value = month
//   checkForm.day[i].value = day
// }
// //Set listeners
// for (let i=0;i<checkForm.date.length;i++){
//   //Set initial state (looks like default saves in local storage)
//   updateForm(i)
//   //Update on change
//   $(checkForm.date[i]).change(()=>{
//     updateForm(i)
//   })
// }
// //Animate - reveal date input on hover
// const selectDates = $(".js-select-dates")
// const selectDatesIcons = $(".js-select-dates-icon")
// const selectDatesSpacers = $(".js-select-dates-spacer")
// const datePicker = $(".js-datepicker")
// for (i=0; i<selectDates.length; i++){
//   let text = selectDates[i]
//   let icon = selectDatesIcons[i]
//   let spacer = selectDatesSpacers[i]
//   let picker = datePicker[i];
//   $(selectDates[i]).on('mouseenter',()=>{
//     $(text).addClass("hidden")
//     $(icon).addClass("hidden")
//     $(spacer).addClass("hidden")
//     $(picker).removeClass("accessibly-hidden")
//   })
// }




// // Reset pre-rendered animations in case of resize
// var currSize = $("#getSize").css("animation-name")
// function getSize(){
//   try{
//     prevSize = currSize
//     currSize = $("#getSize").css("animation-name")
//     return [prevSize, currSize];
//   }finally{
//     prevSize = currSize;
//   }
// }


// //On-resize reset functions
// $(window).on('resize', ()=> {
//   let size = getSize()
//   if (size[0] != size[1]){
//     centerSubnav();
//   }
// });

// function centerSubnav(){
//   tSubNav.pause(.5)
// }

// //--Sub-nav animation --//
// const subNav = {
//   wrapper: $("#js-sub-nav-wrapper"),
//   link: $(".js-sub-nav-link"),
//   img:  $(".js-sub-nav-link").find("img"),
//   control: $("#js-sub-nav-control"),
//   left: $("#js-sub-nav-left-arrow"),
//   right: $("#js-sub-nav-right-arrow"),
// }


//   var tSubNavHover = []
//   for(let i=0; i<subNav.link.length; i++) {
//     //Initial state
//     gsap.set(subNav.link[i],{scale:.9})
//     gsap.set(subNav.img[i],{objectPosition:"25% 50%"})
//     //Timeline
//     tSubNavHover[i] = gsap.timeline({paused:true})
//       .to(subNav.link[i],{scale:1,duration:.5, ease:"power2.inOut"},"-=.5")
//       .to(subNav.img[i],{objectPosition:"50% 50%"},"-=.5")
//       .seek(0)
//     //Listener
//     $(subNav.link[i]).on('mouseenter',()=>{
//       for(let j=0; j<subNav.link.length; j++) {
//         if(i==j){tSubNavHover[j].play();}
//         else{tSubNavHover[j].reverse();}
//       }
//     }).on('mouseleave',()=>{
//       tSubNavHover[i].reverse();
//     })
//   }

//   //Mobile - Timeline
//   gsap.set(subNav.wrapper,{xPercent:-33,duration:0, ease: "power2.inOut"})
//   var tSubNav = gsap.timeline()
//     .to(subNav.wrapper,{xPercent:-33,duration:0, ease: "power2.inOut"})
//     .to(subNav.link[2],{filter:"drop-shadow(0 0 #fff)",duration:0})
//     .addPause()
//     .to(subNav.wrapper,{xPercent:0,duration:.5, ease: "power2.inOut"})
//     .to(subNav.link[2],{filter:"drop-shadow(0 0 #fff)",duration:.5},"-=.5")
//     .addPause()
//     .to(subNav.wrapper,{xPercent:+33, duration:.5, ease:"power2.inOut"})
//     .pause(.5) //Start in middle
//   //Mobile - Listeners
//   $(subNav.left).on('click',()=>{
//     tSubNav.play();
//   })
//   $(subNav.right).on('click',()=>{
//     tSubNav.reverse();
//   })







// //-- On Scroll - visual animations--//
//   //--Parallax--//
//   const parallaxHeaderCtr = $(".js-parallax-header-ctr");
//   const parallaxHeader = $(".js-parallax-header"); 
//   const parallaxHeaderHeight = $(".js-parallax-header").outerHeight()
//   const yMove = parallaxHeaderHeight/1.5

//   if(parallaxHeader[0]){ for(let i=0; i<parallaxHeader.length; i++) {
//     gsap.set(parallaxHeader[i], {y: 0 })
//     gsap.to(parallaxHeader[i], {
//       y: yMove,
//       ease: "none",
//       scrollTrigger: {
//         trigger: parallaxHeaderCtr[i],
//         start: "top top", 
//         end: "bottom top",
//         scrub: true,
//       }
//     });
//   }};

//   const parallaxLiteCtr = $(".js-parallax-lite-ctr");
//   const parallaxLite = $(".js-parallax-lite"); 

//   if(parallaxLite[0]){ for(let i=0; i<parallaxLite.length; i++) {
//     gsap.set(parallaxLite[i], {yPercent: -65 })
//     gsap.to(parallaxLite[i], {
//       yPercent: -35,
//       ease: "none",
//       scrollTrigger: {
//         trigger: parallaxLiteCtr[i],
//         start: "top bottom", 
//         end: "bottom top",
//         scrub: true,
//       }
//     });
//   }};
  


//   //--Animate stat numbers on view//
// const gsapStat = $("#js-stat");
// const stat = gsapStat.find(".stat");
// const num = gsapStat.find(".num");
// let numEnd = [];
// let numIncrement = [];
// let numTime = [];
// if(num[0]){ for(let i=0; i<num.length; i++) {
//   numEnd[i] = $(num[i]).data('end')
//   numIncrement[i] = $(num[i]).data('increment')
//   numTime[i] = $(num[i]).data('time')
// }}

// gsap.registerEffect({
// 	name:"counter",
// 	extendTimeline:true,
// 	defaults:{
// 		end:0,
// 		duration:0.5,
// 		ease:"power1",
// 		increment:1,
// 	},
// 	effect: (targets, config) => {
// 	  let tl = gsap.timeline()
// 	  let num = targets[0].innerText.replace(/\,/g,'')
// 	  targets[0].innerText = num
// 	  tl.to(targets, {
//       duration:config.duration, 
// 	  	innerText:config.end, 
// 	  	//snap:{innerText:config.increment},
// 	  	modifiers:{
// 	  		innerText:function(innerText){
// 	  			return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B  (?=(\d{3})+(?!\d))/g, ",");
// 	  			}
// 	  	},
// 	  	ease:config.ease
//     }, 0)
	
// 	return tl
//   }
// })



// // tStat[0] = gsap.timeline({paused:true})
// // .from($(stat[i]), {opacity:0}) 
// // .counter($(num[i]), {end:numEnd[i], increment:numIncrement[i], duration:numDuration[i], ease:"linear"}, "-=0.5");

// // tStat[1] = gsap.timeline({paused:true})
// // .from($(stat[i]), {opacity:0})
// // .counter($(num[i]), {end:numEnd[i], increment:numIncrement[i], duration:numDuration[i], ease:"linear"}, "-=0.5");

// // tStat[2] = gsap.timeline({paused:true})
// // .from($(stat[i]), {opacity:0}, "+=0.5")
// // .counter($(num[i]), {end:numEnd[i], increment:numIncrement[i], duration:numDuration[i], ease:"linear"}, "-=0.5")

// var tStat = []
// let  modifier = ['-=0','-=0','-=0']
// let overlap = [1.5,1.5,1.5]

// if(stat[0]){ for(let i=0; i<stat.length; i++) {
//   //Setup timelines
//   tStat[i] = gsap.timeline({paused:true})
//     .from($(stat[i]), {opacity:0, duration: 1},`+=${i*overlap[i]}`) 
//     .counter($(num[i]), {
//       end:numEnd[i],
//       increment:numIncrement[i],
//       duration:numTime[i],
//       ease:"power1.out"
//     }, "-=1")

//   //Setup scroll triggers
//   ScrollTrigger.create({
//       trigger: stat[i],
//       start: `top${modifier[i]} center`, 
//       end: `top${modifier[i]} center`,
//       toggleActions:"play none none none",
//       animation:tStat[i],
//   });

// }}



// // if(stat[1]){ 
// //   ScrollTrigger.create({
// //       trigger: stat[1],
// //       start: "top+=10px center", 
// //       end: "top+=10px  center",
// //       toggleActions:"play none none none",
// //       animation:tl,
// //       markers:true
// //     });
// // };
// // if(stat[2]){ 
// //   ScrollTrigger.create({
// //       trigger: stat[2],
// //       start: "top+=20px  center", 
// //       end: "top+=20px  center",
// //       toggleActions:"play none none none",
// //       animation:tl,
// //       markers:true
// //     });
// // };
// //Recalculate when DOM is populated
// // $( document ).ready(function() {
// //   ScrollTrigger.refresh()
// // });

// //--Slide in on view--//
// const slideIn = {
//   right: $(".js-scroll-slide-to-right"),
//   left: $(".js-scroll-slide-to-left")
// }
// //To Right
// if(slideIn.right[0]){ for(let i=0; i<slideIn.right.length; i++) {
//   gsap.from(slideIn.right[i], {
//     opacity: .7,
//     xPercent: -5,
//     scrollTrigger: {
//       trigger: slideIn.right[i],
//       start: `top center`, 
//       end: `top+=100 center`,
//       scrub:.5
//     }
//   });
// }}
// //To Left
// if(slideIn.left[0]){ for(let i=0; i<slideIn.left.length; i++) {
//   gsap.from(slideIn.left[i], {
//     opacity: .7,
//     xPercent: 5,
//     scrollTrigger: {
//       trigger: slideIn.left[i],
//       start: `top center`, 
//       end: `top+=100 center`,
//       scrub:.5
//     }
//   });
// }}

// // if(parallax[0]){ for(let i=0; i<parallax.length; i++) {
// //   gsap.set(parallax[i], {objectPosition: `50% 0vw` })
// //   gsap.to(parallax[i], {
// //     objectPosition: `50% 40vw`,
// //     ease: "none",
// //     scrollTrigger: {
// //       trigger: parallax[i],
// //       start: "top top", 
// //       end: "bottom top",
// //       scrub: true
// //     }
// //   });
// // }};

// // if(slideIn.left[0]){ for(let i=0; i<slideIn.left.length; i++) {
// //   console.log(i)
// //   //Setup timelines
// //   tSlideInLeft[i] = gsap.timeline({paused:true})
// //     .from(slideIn.left[i], {opacity:.7, xPercent: 5})

// //   //Setup scroll triggers
// //   ScrollTrigger.create({
// //       trigger: slideIn.left[i],
// //       start: `top center`, 
// //       end: `top center`,
// //       toggleActions:"play none none reverse",
// //       animation:tSlideInLeft[i],
// //   });

// // }}



// //How to trigger a timeline separately
// // if(slideIn.right[0]){ for(let i=0; i<slideIn.right.length; i++) {


// //   //Setup timelines
// //   tSlideInRight[i] = gsap.timeline({paused:true})
// //     .from(slideIn.right[0], {opacity:.7, xPercent: -5})

// //   //Setup scroll triggers
// //   ScrollTrigger.create({
// //       trigger: slideIn.right[i],
// //       start: `top center`, 
// //       end: `top center`,
// //       toggleActions:"play none none reverse",
// //       animation:tSlideInRight[i],
// //   });

// // }}



//   //--Parallax--//
//   const fadein = $(".js-fadein");

//   if(fadein[0]){ for(let i=0; i<fadein.length; i++) {
//     gsap.set(fadein[i], {opacity: .4 })
//     gsap.to(fadein[i], {
//       opacity: 1,
//       duration: .3,
//       ease: "Power2.inOut",
//       scrollTrigger: {
//         trigger: fadein[i],
//         start: "top center+=100px", 
//         end: "top center+=100px",
//       }
//     });
//   }};



//   function mountMailToLink(target, email){
//     $(target).attr('href', `mailto:${ $(email).html() }?subject=From PowerPlayDJ Website`)
//   }

//   function mountTelLink(target, num){
//     $(target).attr('href', `tel:${ $(num).html() }`)
//   }




//   //TODO: On resize from large to small, hidden tablet hamburger menu isn't measured correctly
//   //On resize, parallax effects break
//   //Click listener shoudl watch entire select dates parent, not just the text


// //Fade in page - optional
// // const loader = $("#js-loader");
// // const page = $("#js-fade-in-on-load");
// // const body = $("body");
// // $(window).on('load', ()=>{
// //   page.addClass("js-fade-in")
// //   body.removeClass("js-overflow-hidden")
// //   loader.addClass("js-hidden")
// // });








// window.wow = new WOW.WOW({
//   live: false,
// });

// window.wow.init({
//   offset: 50,
// });

// //========= glightbox
// const lightbox = GLightbox({
//   href: 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
//   type: 'video',
//   source: 'youtube', //vimeo, youtube or local
//   width: 900,
//   autoplayVideos: true,
// });

// (function () {
//   'use strict';

//   // ==== darkToggler
//   const darkTogglerCheckbox = document.querySelector('#darkToggler');
//   const html = document.querySelector('html');

//   const darkModeToggler = () => {
//     darkTogglerCheckbox.checked ? html.classList.remove('dark') : html.classList.add('dark');
//   };
//   darkModeToggler();

//   darkTogglerCheckbox.addEventListener('click', darkModeToggler);

//   // ======= Sticky
//   window.onscroll = function () {
//     const ud_header = document.querySelector('.header');
//     const sticky = ud_header.offsetTop;

//     if (window.pageYOffset > sticky) {
//       ud_header.classList.add('sticky');
//     } else {
//       ud_header.classList.remove('sticky');
//     }

//     // show or hide the back-top-top button
//     const backToTop = document.querySelector('.back-to-top');
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       backToTop.style.display = 'flex';
//     } else {
//       backToTop.style.display = 'none';
//     }
//   };

//   // ===== responsive navbar
//   let navbarToggler = document.querySelector('#navbarToggler');
//   const navbarCollapse = document.querySelector('#navbarCollapse');

//   navbarToggler.addEventListener('click', () => {
//     navbarToggler.classList.toggle('navbarTogglerActive');
//     navbarCollapse.classList.toggle('hidden');
//   });

//   //===== close navbar-collapse when a  clicked
//   document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
//     e.addEventListener('click', () => {
//       navbarToggler.classList.remove('navbarTogglerActive');
//       navbarCollapse.classList.add('hidden');
//     })
//   );

//   // ===== Sub-menu
//   const submenuItems = document.querySelectorAll('.submenu-item');
//   submenuItems.forEach((el) => {
//     el.querySelector('a').addEventListener('click', () => {
//       el.querySelector('.submenu').classList.toggle('hidden');
//     });
//   });

//   // ===== Faq accordion
//   const faqs = document.querySelectorAll('.single-faq');
//   faqs.forEach((el) => {
//     el.querySelector('.faq-btn').addEventListener('click', () => {
//       el.querySelector('.icon').classList.toggle('rotate-180');
//       el.querySelector('.faq-content').classList.toggle('hidden');
//     });
//   });

//   // ====== scroll top js
//   function scrollTo(element, to = 0, duration = 500) {
//     const start = element.scrollTop;
//     const change = to - start;
//     const increment = 20;
//     let currentTime = 0;

//     const animateScroll = () => {
//       currentTime += increment;

//       const val = Math.easeInOutQuad(currentTime, start, change, duration);

//       element.scrollTop = val;

//       if (currentTime < duration) {
//         setTimeout(animateScroll, increment);
//       }
//     };

//     animateScroll();
//   }

//   Math.easeInOutQuad = function (t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   document.querySelector('.back-to-top').onclick = () => {
//     scrollTo(document.documentElement);
//   };
// })();

// // Document Loaded
// document.addEventListener('DOMContentLoaded', () => {});




  //Remove / Add shadow
  // gsap.to("header", {
  //   boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "#navbar",
  //     start: "top top",
  //     toggleClass: {targets: section, className: "is-active"}
  //     scrub:false
  //   }
  // });



var timer = 0;
var isFixed = false;
$(window).scroll( function() {
  console.log(timer)
    if(timer == 0){
      timer = setTimeout(function() {
        console.log("fire")
        let prevState = isFixed;
        $(window).scrollTop() > 0 ? isFixed = true : isFixed = false;
        if( prevState != isFixed && isFixed == true ){
            $("header").addClass("fixed-navbar");
            $("header").removeClass("absolute");
        } else if (prevState != isFixed) {
            $("header").addClass("absolute");
            $("header").removeClass("fixed-navbar");
        }
        timer = 0;
      }, 100);
    }else{
      
    }


});

/*navbar animation */
var timeLine = gsap.timeline()
timeLine.from("#navbar h1",{
    y: -30,
    duration: 0.5, 
    delay: 0.2, 
    opacity: 0,
    stagger: 0.2
})


timeLine.from("#icon",{
    y: -30,
    duration: 0.4, 
    delay: 0.1, 
    opacity: 0,
    stagger: 0.1
})

/*page1 animation */

timeLine.from("#text h2,h3",{
  x:-100,
duration:1,
delay:0.5,
opactiy:0,
scale:50,
rotate:45,
stagger: 0.1
})

timeLine.from("#page1 img",{
    y:40,
   duration:1,
   delay:0.5,
   opactiy:0,

  })
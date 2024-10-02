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
scale:6,
rotate:-45,
stagger: 0.1
})

timeLine.from("#page1 img",{
    y:40,
   duration:1,
   delay:0.5,
   opactiy:0,

  })

  /*page2 animation */

  var tl = gsap.timeline({scrollTrigger : 
    {
        trigger:"#page2",
        start:'50% 50%',
        end:'100% 50%',
        scrub:1,
        pin:true,
    }
  })

  tl.to("#top",{
    top:"-50%"
  },"a")

  tl.to("#bottom",{
    bottom:"-50%"
  },"a")

  tl.to("#top-h",{
    top:"80%"
  },"a")

  tl.to("#bottom-h",{
    bottom:"-80%"
  },"a")

  tl.from(".box1",{
    x:-20,
   
    duration:1,
    rotateZ:-90,
    opacity:0
  },"b")

  tl.from(".box3",{
    x:60,
    duration:1,
    rotateZ:90,
    opacity:0
  },"b")

  tl.from(".box2",{
    y:-60,
    duration:1,
   
    opacity:0
  },"b")
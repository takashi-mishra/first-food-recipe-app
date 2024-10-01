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
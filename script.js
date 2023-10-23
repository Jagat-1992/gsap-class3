gsap.from("#page1 #box",{
    scale: 0,
    delay:0.5,
    duration: 2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers: true,
        scrub: 2,
        
    }
    
})
gsap.from("#page2 #box",{
    scale: 0,
    delay:0.5,
    duration: 2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        scrub: 2,
    }
})
gsap.from("#page3 #box",{
    scale: 0,
    delay:0.5,
    duration: 2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers: true,
        scrub: 2,
        
    }
})
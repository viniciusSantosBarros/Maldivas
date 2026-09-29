gsap.registerPlugin(ScrollTrigger);

// Função declarada fora para que possa ser usada tanto no Desktop quanto no Mobile
const sliderContainer = document.querySelector(".sliders");
const getScrollAmount = () => {return -(sliderContainer.scrollWidth - window.innerWidth);
};

const mm = gsap.matchMedia();

/* Desktop */

mm.add("(min-width: 992px)", () => {

    /* Hero */
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=900",
            pin: true,
            scrub: 2
    }});

    tl.fromTo(".hero", 
        {maskSize: "80vw", maskPosition: "52.1% 50%"}, 
        {maskSize: "6000vw", maskPosition: "51% 50%", duration: 3})

    tl.fromTo(".reserva", 
        {scale: 1, opacity: 0, filter: "blur(2px)"}, 
        {scale: 1.5, opacity: 1, filter: "blur(0px)"}, "<0.7")

    /* Sliders */
    const tml = gsap.timeline({
        scrollTrigger:{
            trigger:".sliders",
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 2,
            invalidateOnRefresh: true
        }});

    tml.to(".sliders", {x: () => getScrollAmount(), ease: "none"})
})

/* Tablet e Mobile */

mm.add("(max-width: 991px)", () => {

    /* Hero */
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".hero",
            start: "top top",
            end: "+=900",
            pin: true,
            scrub: 2
        }});

    tl.fromTo(".hero", 
        {maskSize: "85vw", maskPosition: "52.1% 50%"},
        {maskSize: "5000vw", maskPosition: "51.1% 50%", duration: 3})

    tl.fromTo(".reserva", 
        {opacity: 0, scale: 1, filter: "blur(2px)"}, 
        {opacity:1, scale: 2, filter: "blur(0px)"}, "<0.7")
    
    /* Sliders */

    const tml = gsap.timeline({
        scrollTrigger:{
            trigger: ".sliders",
            start:"top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 2,
            invalidateOnRefresh: true
        }});
    
        tml.to(".sliders", {x: () => getScrollAmount(), ease: "none"})
})

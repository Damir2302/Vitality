

document.addEventListener("DOMContentLoaded", () => {
   const heroText = document.querySelector('.hero__inner')
	gsap.config({
		nullTargetWarn: false,
		trialWarn: false
	});

	// GSAP ANIMATION ON LOAD PAGE
	const tl = new TimelineMax();
    const tl2 = new TimelineMax();
	if ($('body').hasClass('main-page')) {

        function myFunc() {
            $('.preloader').css('display', 'none')
            $('body').removeClass('overflow-hidden')
        }

		tl
        .staggerFromTo('.preload-right', 0.3, {
            width: '100%',
            opacity:1 },{ opacity:0,    width: 0,}
        )
        
        .staggerFromTo('.preload-left', 0.3, {
           width: '100%',
            autoAlpha: 1,
            opacity: 0,
           
        }, {
           autoAlpha: 0,
            width: 0,
            opacity: 1,
            ease: Back.easeInOut
        },
        0.1
    )
        .staggerFromTo('.preload-middle', 0.3, {
            width: '100%',
            autoAlpha: 1,   
            
        
        }, {
        autoAlpha: 0,
            width: 0,
            
            ease: Back.easeInOut
        },
        0.1
            )
        .staggerFromTo('.preload-circle', 0.3, {
            opacity: 1,
            autoAlpha: 1,    
            
        
        }, {
            autoAlpha: 0,
            opacity:0,
            // width: '100%',
            
            ease: Back.easeInOut
        },
        0.1
        )
        
        .staggerFromTo('.preload-right', 0.3, {
        
            width: 0
           
        }, {
           
            width: '100%',
           
            ease: Back.easeInOut
        },
        0.1
        )
        TweenLite.delayedCall(1, reverse)
        // tl.reverse(3, false);
//         .staggerFromTo('.preload-left', 0.3, {
//             from: "center",
//             autoAlpha: 0,
//             width: 0
           
//         }, {
           
//             width: '100%',
//             autoAlpha: 1,
//             ease: Back.easeInOut
//         },
//         0.1
//         )
//         .staggerFromTo('.preload-middle', 0.3, {
            
//             autoAlpha: 0,
//             width: 0
        
//         }, {
        
//             width: '100%',
//             autoAlpha: 1,
//             ease: Back.easeInOut
//         },
//         0.1
// )
// .staggerFromTo('.preload-circle', 0.3, {
           
//     autoAlpha: 0,
//     opacity:0
   
// }, {
//     // width: '100%',
//     opacity: 1,
//     autoAlpha: 1,
//     ease: Back.easeInOut
// },
// 0.1
// )
tl2
.to(".preloader", 4, {opacity: 0}, "+=0.5")
.add('start')
.fromTo(heroText, 1, {
    autoAlpha: 0,
    x:'100%'
   
}, {
    // width: '100%',
    x:0,
   
    autoAlpha: 1,
    ease: Back.easeInOut
}, 'start')
.fromTo('.header', 1, {
    autoAlpha: 0,
    y:'-100%'
   
}, {
    // width: '100%',
    y:0,
   
    autoAlpha: 1,
    ease: Back.easeInOut
}, 'start')
.fromTo('.hero__picture-hand', 1, {
    autoAlpha: 0,
    x:'-100%'
}, {
    // width: '100%',
    x:0,
    autoAlpha: 1,
    ease: Back.easeInOut
},'start')
.fromTo('.hero__circle', 1, {
    autoAlpha: 0,
  
    // width: 0,
    // height: 0
}, {
  
    // width: '100%',
    width: 1020,
    height: 1020,
    autoAlpha: 1,
    ease: Back.easeInOut
},'start')
.fromTo('.hero__picture-right', 1, {
    autoAlpha: 0,
    // x:'-100%'
    scale: 0
}, {
    // width: '100%',
    // x:0,
    scale:1,
    autoAlpha: 1,
    ease: Back.easeInOut
},'start')
.fromTo('.hero__picture-left', 1, {
    autoAlpha: 0,
    scale: 0
    // x:'-100%'
}, {
    // width: '100%',
    // x:0,
    scale:1,
    autoAlpha: 1,
    ease:Back.easeInOut
},'start')
.fromTo('.hero__picture-logo-left', 1, {
    autoAlpha: 0,
    // x:'-100%'
    scale: 0
}, {
    // width: '100%',
    // x:0,
    scale:1,
    autoAlpha: 1,
    ease: Back.easeInOut
},'start')
.fromTo('.hero__picture-logo-right', 1, {
    autoAlpha: 0,
    scale: 0
    // x:'-100%'
}, {
    // width: '100%',
    // x:0,
    scale:1,
    autoAlpha: 1,
    ease:Back.easeInOut
},'start')
.fromTo('.hero__partners-wrapper', 1, {
    autoAlpha: 0,
    y:'100%'
}, {
    // width: '100%',
    y:0,
    autoAlpha: 1,
    ease: Back.easeInOut
},'start'
)

.to(".preloader", 1, {myFunc}, "+=0.5")
        
		// .to(".preload-logo", 0.2, {left: 50 + '%'}, "+=0.5")
		// .to(".preload-logo", 1, {scale: 3, opacity: 0}, "+=2")
		

function reverse() {

    tl.reverse();
}
	}


      


});
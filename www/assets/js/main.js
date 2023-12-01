document.addEventListener("DOMContentLoaded", () => {
 
   


        // INPUT MASK PHONE NUMBER


        let anchors = document.querySelectorAll('.js-anchor')
        if (anchors.length > 0) {
            anchors.forEach(anchor => {
                anchor.onclick = function (e) {
                    e.preventDefault();
                    document.querySelector(`#${anchor.href.split('#')[1]}`).scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                    })
                }
            })
        }


        // openMenu() 
    initTabs()
    initClicks()
    initBurger()
    // let vh = window.innerHeight * 0.01;

    // document.documentElement.style.setProperty('--vh', `${vh}px`);
//    init()
}) 


const init = () => {
    const marquee = document.querySelectorAll('.marquee')
    
    if(!marquee) return
  
    marquee.forEach(item => {
      const marqueeInner = item.querySelector('.marquee__inner')
      const marqueeContent = marqueeInner.querySelector('.marquee__content')
      
      // Duration
      const duration = item.getAttribute('data-marquee-duration')
      
      // Element Clone
      const marqueeContentClone = marqueeContent.cloneNode(true)
      marqueeInner.append(marqueeContentClone)
      
      // Marquee animation
      const marqueeContentAll = marqueeInner.querySelectorAll('.marquee__content')
      marqueeContentAll.forEach(element => {
        gsap.to(element, {
            x: "-101%",
            repeat: -1,
            duration: duration,
            ease: 'linear'
        })
      })
    })
  }
  
 
    function initClicks() {
        
        document.addEventListener("click", (event) => {
      
            if (event.target.closest(".js-search-btn")) {
                
                let search = document.querySelector('.header__search')
                search.classList.toggle('active')
            }
            // кнопка открытия списка на карте,
            if (event.target.closest(".contacts__btn-arrow ")) {
              let clicked = event.target.closest(".contacts__btn-arrow ")
            
              clicked.classList.toggle('active')
         }
         if (event.target.closest(".contacts__tabs-btn")) {
           
          document.querySelector('.contacts__content').classList.toggle('active')
            
       }
        })
        

    }

  

//табы
function initTabs() {
    document.addEventListener("click", (event) => {

        const tabsItems = document.querySelectorAll('.tabs__item');
        let clicked;
        const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
        if (event.target.closest(".tabs__nav-btn")) {

            let thisEl = event.target.closest(".tabs__nav-btn"),
                index = `tab_${thisEl.dataset.tab}` ,

                activeElements = document.querySelector('.tabs').querySelectorAll(".active")
            if(!thisEl.classList.contains('active')) {

                activeElements.forEach((el) => {
                    el.classList.remove('active');
                })
                let clickedTab = document.getElementById(index)
                clickedTab.classList.add('active')
                thisEl.classList.add('active');
               

            }

        }

    })

}



    function initBurger() {
        const body = document.querySelector("body");
        const button = document.querySelector(".header__burger");
        const menu = document.querySelector(".header");
        const page = document.querySelector('#page')

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".header")) {
                menu.classList.remove("opened-menu");
                page.classList.remove('bg-overlay')
            }
            if (event.target.closest(".header__burger")) {
                menu.classList.toggle("opened-menu");
                page.classList.add('bg-overlay')
                body.classList.toggle("overflow-hidden");
            
            }
            if (event.target.closest(".close-btn")) {
                menu.classList.remove("opened-menu");
                body.classList.remove("overflow-hidden");
                page.classList.remove('bg-overlay')
              
            }
        });
     
    
    }
 


  
 








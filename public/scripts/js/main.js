// 🍦 Vanilla JavaScript [JS] language
// DOM + BOM + Function + Immediatly invoked function expression - using arrow function

/* ================== [🧪] TEST TEMPLATE [🧪] ==================== */

// (()=>{
//     const testClick = document.querySelector("");

//     testClick.addEventListener("click", (event) => {
//         console.log("Clicked"); // event.target || event.target.hash || "Clicked"
//     });
// })();

/* ============================================================== */

// ---------------------- Navigation menu ------------------------
(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu() {
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect() {
      document.querySelector(".fade-out-effect").classList.add("active");
      setTimeout(() =>{
        document.querySelector(".fade-out-effect").classList.remove("active");
      },300)
    }

    // attach an event handler to document
    document.addEventListener("click", (event) =>{
        // console.log(event.target);
        if(event.target.classList.contains('link-item')){
        //    console.log("event.target contains 'link-item' class");
        //    console.log(event.target.hash);
        /* make sure event.target.hash has a value before overridding default behavior */
            if(event.target.hash !==""){
               event.preventDefault();
               const hash = event.target.hash;
               // deactivate existing active 'section'
               document.querySelector(".section.active").classList.add("hide");
               document.querySelector(".section.active").classList.remove("active");
               // activate new 'section'
               document.querySelector(hash).classList.add("active");
               document.querySelector(hash).classList.remove("hide");
               // deactivate existing active navigation menu 'link-menu'
               navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
               navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
               // if clicked 'link-item is contained withing the navigation menu'
                if(navMenu.classList.contains("open")){
                 // activate new navigation menu 'link-item'
                 event.target.classList.add("active","inner-shadow");
                 event.target.classList.remove("outer-shadow","hover-in-shadow");
                 // hide navigation menu
                 hideNavMenu();
                //  console.log("if clicked 'link-item' is contained within the navigation menu")
                }
                else{
                  //    console.log("if clicked 'link-item' isn't contained withing the navigation menu")
                  let navItems = navMenu.querySelectorAll(".link-item");
                  navItems.forEach((item) =>{
                      if(hash === item.hash){
                      // activate new navigation menu 'link-item'
                      item.classList.add("active","inner-shadow");
                      item.classList.remove("outer-shadow","hover-in-shadow");
                      }
                  })
                  fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
        }
    })

})();

/*====================== ABOUT SECTION TABS =====================*/
(() =>{
    // console.log('hello world')
    const aboutSection = document.querySelector(".about-section"), tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        // if event.target contains 'tab-item' class and not contains
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");

            // Verifying ... It's working?
            // console.log("event.target contains 'tab-item' class and not contains 'active' class ");
            // console.log(event.target);

            // deactive existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new "tab-content"
            aboutSection.querySelector(target).classList.add("active");
        }
    });
})();

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

//=================== PORTFOLIO FILTER AND POPUP ======================
(()=>{
   const filterContainer = document.querySelector(".portfolio-filter"),
   portfolioItemsContainer = document.querySelector(".portfolio-items"),
   portfolioItems = document.querySelectorAll(".portfolio-item"), // console.log(portfolioItems)
   popup = document.querySelector(".portfolio-popup"),
   prevBtn = popup.querySelector(".pp-prev"),
   nextBtn = popup.querySelector(".pp-next"),
   closeBtn = popup.querySelector(".pp-close"),
   projectDetailsContainer = popup.querySelector(".pp-details"),
   projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
//    moreAboutMeBtn = popup.querySelector(".more-about-me-btn");
//    javascriptIconSvg = popup.querySelector(".more-about-me-btn");
//    htmlAndCssIconSvg = popup.querySelector(".more-about-me-btn");
//    frontEndIconSvg = popup.querySelector(".more-about-me-btn");

   let itemIndex, slideIndex, screenshots;

   //  Filter Portfolio Items

   filterContainer.addEventListener("click", (event) => {
    //    console.log(event.target);
    if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
        //  console.log("true");

        // deactivate existing active 'filter-item'

        filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");

        // activate new 'filter item'

        event.target.classList.add("active", "outer-shadow");
        const target = event.target.getAttribute("data-target");
        // console.log(target);

        portfolioItems.forEach((item) => {
            // console.log(item)
            if(target === item.getAttribute("data-category") || target === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
    /*else{
        console.log("false");
    } */
    // console.log(event.target);
   })

   // Portfolio Items Container

   portfolioItemsContainer.addEventListener("click", (event) => {
    //  console.log(event.target.closest(".portfolio-item-inner"))

     if(event.target.closest(".portfolio-item-inner")){

        const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
        // console.log(portfolioItem);

          // Get the portfolioItem index

          itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
        //   console.log(itemIndex);

          screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
        //   console.log(screenshots)

          // Convert screenshots into array

          screenshots = screenshots.split(",");
          if(screenshots.length === 1){
              prevBtn.style.display = "none";
              nextBtn.style.display = "none";
          }
          else{
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
          }
        //   console.log(screenshots)
          slideIndex = 0;
          popupToggle();
          popupSlideshow();
          popupDetails();
       }
   })

   closeBtn.addEventListener("click", () => {
       popupToggle();
       if(projectDetailsContainer.classList.contains("active")){
           popupDetailsToggle();
       }
   })

   function popupToggle() {
       popup.classList.toggle("open");
       bodyScrollingToggle();
   }

   function popupSlideshow(){
    // console.log("working!");
    const imgSrc = screenshots[slideIndex];
    // console.log(imgSrc);
    const popupImg = popup.querySelector(".pp-img");

    // Activate loader until the popupImg loaded
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src=imgSrc;
    popupImg.onload = () => {
        // Deactivate loader after the popupImg loaded
        popup.querySelector(".pp-loader").classList.remove("active");
    }
    popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
   }

   // Next Slide
   nextBtn.addEventListener("click", () => {
       if(slideIndex === screenshots.length-1){
           slideIndex = 0;
       }
       else{
           slideIndex++;
       }
       popupSlideshow();
    //    console.log("slideIndex:" + slideIndex);
   })

    // Prev Slide
    prevBtn.addEventListener("click", () => {
        if(slideIndex === 0){
            slideIndex = screenshots.length-1;
        }
        else{
            slideIndex--;
        }
        popupSlideshow();
        // console.log("slideIndex:" + slideIndex);
    })

    // Pop-Up Details
    function popupDetails(){
        // if portfolio-item-details not exists
        if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
            projectDetailsBtn.style.display = "none";
            return;
        }
        projectDetailsBtn.style.display = "block";
        // get the project details
        const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
        // set the project details
        popup.querySelector(".pp-project-details").innerHTML = details;
        // get the project title
        const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
        // console.log(title);
        // set the project title
        popup.querySelector(".pp-title h2").innerHTML = title;
        // get the project category
        const category = portfolioItems[itemIndex].getAttribute("data-category");
        // console.log(category);
        // set the project category
        popup.querySelector(".pp-project-category").innerHTML = category; // .split("-").join(" ")
    }

    // Project Details +
    projectDetailsBtn.addEventListener("click", () => {
        popupDetailsToggle();
    })

    function popupDetailsToggle(){
        // console.log("hi");
        if(projectDetailsContainer.classList.contains("active")){
            // console.log("true");
            projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
            projectDetailsBtn.querySelector("i").classList.add("fa-plus");
            projectDetailsContainer.classList.remove("active");
            projectDetailsContainer.style.maxHeight = 0 + "px";
        }
        else{
            // console.log("false");
            projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
            projectDetailsBtn.querySelector("i").classList.add("fa-minus");
            projectDetailsContainer.classList.add("active");
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.
                scrollHeight + "px";
            popup.scrollTo(0,projectDetailsContainer.onsetTop);
        }
    }
})();

/* ---------------- Hide all sections except active ---------------- */
(()=>{
    // console.log("hi");
    const sections = document.querySelectorAll(".section");
    // console.log(sections);
    sections.forEach((section) => {
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

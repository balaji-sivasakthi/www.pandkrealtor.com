//scroll top
window.onscroll = function () {
    if (document.documentElement.scrollTop > 630) {
      $("#scrollTopId").css({
        transform: "scale(1)",
        border: "solid 2px var(--blu)",
      });
    } else {
      $("#scrollTopId").css({
        transform: "scale(0)",
        border: "transparent",
      });
    }
  };


  setTimeout(() => {
    const sectionAll = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log("ANI", entry);
          // console.log('test',entry.target.classList);
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll_ani");
          }
          // if (entry.target.classList.contains("nearest_places_sec")) {
          //   // entry.target.classList.add("scroll_ani");
          //   entry.target.classList.add("testani");

          //   console.log('test',entry.target.classList);
            
          // }
        });
      },
      {
        rootMargin: "-50px",
      }
    );
    sectionAll.forEach((section) => {
      observer.observe(section);
    });
     const nearest = document.querySelectorAll(".nearest_places_sec");
      const observer11 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('called',entry.isIntersecting)
          if (entry.isIntersecting) {
            // entry.target.classList.add("scroll_ani");
            observer11.unobserve(entry.target);
           entry.target.classList.add("testani");
            console.log('test new',entry.target.classList);
            
          }
        });
      },
      {
        rootMargin: "-100px",
      }
    );
    nearest.forEach((section) => {
      observer11.observe(section);
    });
    // console.log("COMMMON3");




 // const nearest_places_secClass=document.querySelector(".nearest_places_sec");
  // const observer11 = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //          // console.log("ANI", entry);
  //          // console.log('test',entry.target.classList);
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("scroll_ani");
  //         }
  //        // if (entry.target.classList.contains("nearest_places_sec")) {
  //           //entry.target.classList.add("scroll_ani");
  //           console.log('test');
            
  //        // }
  //       });
  //     },
  //     {
  //       rootMargin: "-100px",
  //     }
  //   );
  //   nearest_places_secClass.forEach((section) => {
  //     observer11.observe(section);
  //   });


  });

  

    


  document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });





function countUp(selector) {
  const numbArr = document.querySelectorAll(selector);
  //console.log(numbArr);
  numbArr.forEach((numb) => {
    let totalNum = numb.textContent;

    const interval = 2000 / totalNum;

    const numRange =
      totalNum > 10000
        ? 10
        : totalNum > 5000
        ? 6
        : totalNum > 1000
        ? 4
        : totalNum > 100
        ? 2
        : 1;
    //  console.log({ totalNum, interval, numRange });
    let counter = 0;
    console.log("0*****", { totalNum });
    const setInter = setInterval(() => {

     if(numRange==1 && counter==totalNum){

  clearInterval(setInter);

}

else if (counter < totalNum + numRange && counter > totalNum - numRange) {

  console.log("1*****", { a: totalNum });

  numb.textContent = totalNum;

  clearInterval(setInter);

  console.log("2*****", { a: totalNum });

} else {

  counter += numRange;

  numb.textContent = counter;

}
    }, interval * numRange);
  });
}
var divAll = document.querySelectorAll("section");
var observerDiv = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.classList,'vaithi');
       
        if (entry.target.classList.contains("about_sec")) {
          countUp(".counts p >span");
          observerDiv.unobserve(entry.target);
        }
     
      }
    });
  },
  {
    rootMargin: "-100px",
  }
);
divAll.forEach((div) => {
  observerDiv.observe(div);
});

 //For Country code Jquery Plugin




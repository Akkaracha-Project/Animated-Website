// side bar start
const openNav = () => {
  "use strict";
  const sidepanel = document.querySelector("#mySidepanel");
  if (sidepanel) {
    sidepanel.style.right = "0";
  } else {
    console.error("error: side pannel not found");
  }
};

const closeNav = () => {
  "use strict";
  const sidepanel = document.querySelector("#mySidepanel");
  if (sidepanel) {
    sidepanel.style.right = "-320px";
  } else {
    console.error("error: side pannel not found");
  }
};

// searchbar
const openSearch = () => {
  "use strict";
  const searchpanel = document.querySelector("#search-bar");
  if (searchpanel) {
    searchpanel.style.height = "100vh";
    searchpanel.style.borderRadius = "0";
  } else {
    console.error("error: search pannel not found");
  }
};

const closeSearch = () => {
  "use strict";
  const searchpanel = document.querySelector("#search-bar");
  if (searchpanel) {
    searchpanel.style.height = "0";
    searchpanel.style.borderTopLeftRadius = "100%";
    searchpanel.style.borderTopRightRadius = "100%";
  } else {
    console.error("error: search pannel not found");
  }
};

// sidebar
const openSidebar = () => {
  const openSidebar = document.getElementById("right_side");
  openSidebar.style.right = "0";
};
const closeSidebar = () => {
  const closeSidebar = document.getElementById("right_side");
  closeSidebar.style.right = "-355px";
};

// resoponsive logoipsum slider

$(".sliderlogo").slick({
  arrows: false,
  dots: false,
  infinite: false,
  autoplay: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//portfolio gallary tab

const open_img = (evt, cityName) => {
  let i, tabcontent, tablinks;

  //hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // remove active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // show the selected tab content and mark the corresponding tab link as active
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
};

// responsive team slider
$(".team-slider").slick({
  arrows: false,
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//faq section

document.addEventListener("DOMContentLoaded", () => {
  let accordionButtons = document.querySelectorAll(".accordion-button");
  let acoimg = document.querySelectorAll(".accordion-button img");

  accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let collapse = button.parentElement.nextElementSibling;
      // close all the other accordion items
      accordionButtons.forEach((otherButton, otherIndex) => {
        if (otherButton !== button) {
          let otherCollapse = otherButton.parentElement.nextElementSibling;
          otherCollapse.style.maxHeight = null;

          //reset this image source and rotation for other accordian items
          acoimg[otherIndex].src = "Images/icon/plus.png";
          acoimg[otherIndex].style.transform = "rotate(0deg)";
          otherButton.style.backgroundColor = "#fff";
        }
      });

      //toggle the clicked according item
      if (collapse.style.maxHeight) {
        collapse.style.maxHeight = null;
        //reset the image source, rotation, and background color when collapsing
        acoimg[index].src = "Images/icon/plus.png";
        acoimg[index].style.transform = "rotate(90deg)";
        button.style.backgroundColor = "";
      } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        //change the image source, set rotation, and background color when expanding
        acoimg[index].src = "Images/icon/menus.png";
        acoimg[index].style.transform = "rotate(180deg)";
        button.style.backgroundColor = "#828282";
      }
    });
  });
});

// footer validation start
const fom = document.getElementById("footer-form");
const footerMessage = document.getElementById("footer-message");

fom.addEventListener("submit", (event) => {
  event.preventDefault();
  footerMessage.innerHTML = "~ Form Submitted success fully";
  footerMessage.style.display = "flex";
  fom.reset();
  setTimeout(() => {
    footerMessage.style.display = "none";
  }, 3000);
});

// backToTop button Scroll
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  const btnToTop = document.getElementById("backToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

const scrollToTop = () => {
  console.log("Scroll to top clicked");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

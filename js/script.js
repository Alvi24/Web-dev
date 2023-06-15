// Importing the HTML for banners
import {
  banner1HTML,
  banner2HTML,
  banner3HTML,
  banner4CardBackFace,
  banner4HTML,
} from "./bannersHTMLProvider.mjs";

const banner = document.querySelector(".banner");
function animateBanner1() {
  banner.innerHTML = banner1HTML;
  banner.classList.add("No1");
  const headerText = document.querySelector(".headerText");
  const titleContainer = document.querySelector(".titleContainer");
  const particles = document.querySelectorAll(".particle");

  headerText.classList.add("animateIn");

  headerText.onanimationend = () => {
    titleContainer.classList.add("animateIn");
    particles.forEach((particle) => {
      particle.classList.add("animateParticle");
    });
  };
  titleContainer.onanimationend = () => {
    banner.classList.add("animateOut");
    banner.onanimationend = (e) => {
      if (e.target.classList.contains("banner")) {
        banner.classList.remove("No1", "animateOut");

        banner.innerHTML = "";
        animateBanner2();
      }
    };
  };
}

function animateBanner2() {
  banner.innerHTML = banner2HTML;
  banner.classList.add("No2");
  const headerTextBanner2 = document.querySelector(".banner.No2 .headerText");
  const usb = document.querySelector(".usb");
  const subTextBanner2 = document.querySelector(".banner.No2 .subHeaderText");
  const checkWraps = document.querySelectorAll(".checkWrap");
  headerTextBanner2.onanimationend = () => {
    subTextBanner2.classList.add("animateIn");
  };
  subTextBanner2.onanimationend = () => {
    usb.classList.add("banner2AnimationUsb");
  };
  usb.onanimationend = () => {
    checkWraps.forEach((checkWrap) =>
      checkWrap.style.setProperty("--animation", "fadeIn 1s forwards")
    ); // animate pseudo element

    checkWraps.forEach(
      (checkWrap) => (checkWrap.innerHTML += `<span class="check"></span>`)
    );
  };
  checkWraps[0].onanimationend = (e) => {
    if (banner.innerHTML != "") {
      banner.classList.add("animateOut");
      banner.onanimationend = (e) => {
        if (e.target.classList.contains("banner")) {
          banner.classList.remove("No2", "animateOut");
          banner.innerHTML = "";
          // animateBanner3(); next banner (to be added)
          animateBanner3();
        }
      };
    }
  };
}

function animateBanner3() {
  banner.innerHTML = banner3HTML;

  banner.classList.add("No3");
  const headerTextBanner3 = document.querySelector(".banner.No3 .headerText");
  const subTextBanner3 = document.querySelector(".banner.No3 .subHeaderText");
  const bracelet1 = document.querySelector(".bracelet1");
  const bracelet2 = document.querySelector(".bracelet2");
  headerTextBanner3.classList.add("animate");
  headerTextBanner3.onanimationend = () => {
    subTextBanner3.classList.add("animateIn");
  };
  subTextBanner3.onanimationend = () => {
    bracelet1.classList.add("animate");
    bracelet2.classList.add("animate");
  };

  bracelet2.onanimationend = (e) => {
    if (banner.innerHTML != "") {
      setTimeout(() => {
        banner.classList.add("animateOut");
        banner.onanimationend = (e) => {
          if (e.target.classList.contains("banner")) {
            banner.classList.remove("No3", "animateOut");
            banner.innerHTML = "";
            animateBanner4();
          }
        };
      }, 500);
    }
  };
}
function animateBanner4() {
  banner.innerHTML = banner4HTML;
  const bannerCard = document.querySelector(".bannerCard");
  const secondPage = document.querySelector(".secondPage");
  console.log(bannerCard);
  banner.classList.add("No4");
  banner.classList.add("animateIn");
  banner.onanimationend = () => {
    bannerCard.classList.add("animateCard1");
    secondPage.classList.add("open");
  };
  bannerCard.onanimationend = () => {
    bannerCard.innerHTML = banner4CardBackFace;
    bannerCard.classList.add("animateCard2", "open");
    setTimeout(() => {
      banner.classList.add("animateOut");
      banner.onanimationend = (e) => {
        if (e.target.classList.contains("banner")) {
          banner.classList.remove("No4", "animateOut");
          banner.innerHTML = "";
          // animateFinishBanner(); next banner (to be added)
        }
      };
    },800);
  };

  // banner.onanimationend = () => {
  //   banner.classList.remove("No3", "animate");
  //   // animateBanner5(); next banner (to be added)
  // };
}
animateBanner1();
// animateBanner2();
// animateBanner3();
// animateBanner4();

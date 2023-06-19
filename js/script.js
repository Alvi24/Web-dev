// Importing the HTML for banners
import {
  banner1HTML,
  banner2HTML,
  banner3HTML,
  banner4FristPage,
  banner4HTML,
} from "./bannersHTMLProvider.mjs";
function isUserOnMobile() {
  return /webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
const container = document.querySelector(".container");
if (isUserOnMobile()) {
  container.style.scale = "0.6";
  container.classList.add("mobile");
}

const banner = document.querySelector(".banner");
const initBanner = banner.innerHTML;
function animateInitBanner() {
  setTimeout(() => {
    banner.classList.add("animateOut");
    banner.onanimationend = (e) => {
      if (e.target.classList.contains("banner")) {
        banner.classList.remove("No0", "animateOut");
        banner.innerHTML = "";
        animateBanner1();
      }
    };
  }, 500);
}
function animateBanner1() {
  banner.innerHTML = banner1HTML;
  banner.classList.add("No1");
  const headerText = document.querySelector(".headerText");
  const title = document.querySelector(".title");
  const confettis = document.querySelectorAll(".confetti");
  headerText.classList.add("animateIn");

  headerText.onanimationend = () => {
    title.classList.add("animateIn");
    confettis.forEach((confetti) => {
      confetti.classList.add("animateConfetti");
    });
  };
  title.onanimationend = () => {
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
      checkWrap.style.setProperty("--animation", "fadeIn .5s forwards")
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
    bracelet1.style.opacity = "1";
    setTimeout(() => {
      bracelet2.style.opacity = "1";
      bracelet1.innerHTML = `<p class="braceletText"><span class="first-letters">#ALL</span>INfor<span class="last-letters">LN</span></p>`;

      const bracelet1Text = document.querySelectorAll(".braceletText")[0];

      bracelet1Text.classList.add("animate");
      bracelet1Text.onanimationend = () => {
        bracelet2.innerHTML = `<p class="braceletText"><span class="first-letters">#ALL</span>INora<span class="last-letters">nge</span></p>`;
        bracelet1.classList.add("animate");
        bracelet2.classList.add("animate");
      };
      bracelet2.onanimationend = (e) => {
        if (
          banner.innerHTML != "" &&
          e.target.classList.contains("bracelet2")
        ) {
          setTimeout(() => {
            banner.classList.add("animateOut");
            banner.onanimationend = (e) => {
              if (e.target.classList.contains("banner")) {
                banner.classList.remove("No3", "animateOut");
                banner.innerHTML = "";
                animateBanner4();
              }
            };
          }, 100);
        }
      };
    }, 150);
  };
}
function animateBanner4() {
  banner.innerHTML = banner4HTML;
  const cover = document.querySelector(".cover");
  const secondPage = document.querySelector(".secondPage");
  const confettis = document.querySelectorAll(".confetti");
  banner.classList.add("No4");
  banner.classList.add("animateIn");
  banner.onanimationend = () => {
    cover.classList.add("animateCard1");
    secondPage.classList.add("open");
    setTimeout(() => {
      cover.innerHTML = banner4FristPage;
    }, 150);
  };
  cover.onanimationend = () => {
    cover.classList.add("animateCard2", "open");
    confettis.forEach((confetti) => {
      confetti.classList.add("animateConfetti");
    });
    setTimeout(() => {
      banner.classList.add("animateOut");
      banner.onanimationend = (e) => {
        if (e.target.classList.contains("banner")) {
          banner.classList.remove("No4", "animateOut");
          banner.innerHTML = initBanner;
          banner.classList.add("No0", "animateIn");
        }
      };
    }, 500);
  };
}
animateInitBanner();
// animateBanner1();
// animateBanner2();
// animateBanner3();
// animateBanner4();

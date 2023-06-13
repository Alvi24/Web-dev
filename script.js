const banner = document.querySelector(".banner");
function animateBanner1() {
  banner.innerHTML = `<span
  class="particle halfCircleAqua"
  style="left: 60%; top: 30%"
></span>
<span
  class="particle halfCircleBlue"
  style="left: 10%; top: 80%"
></span>
<span
  class="particle circlePurple"
  style="left: 70%; top: 70%"
></span>
<span
  class="particle halfCircleAqua"
  style="left: 81%; top: 65%"
></span>
<span
  class="particle halfCircleBlue"
  style="left: 57%; top: 74%"
></span>
<span
  class="particle rectangleDark"
  style="left: 68%; top: 81%"
></span>
<span class="particle circleAqua" style="left: 70%; top: 40%"></span>
<span
  class="particle rectangleAqua"
  style="left: 20%; top: 35%"
></span>
<span
  class="particle rectangleDark"
  style="left: 34%; top: 73%"
></span>
<span
  class="particle circlePurple"
  style="left: 25%; top: 62%"
></span>

<span class="particle circleAqua" style="left: 21%; top: 70%"></span>
<span
  class="particle rectangleAqua"
  style="left: 20%; top: 35%"
></span>
<span
  class="particle rectangleDark"
  style="left: 10%; top: 47%"
></span>
<h2 class="headerText">Learn more about lupus nephritis with</h2>
<div class="titleContainer">
  <p>A FREE</p>
  <p>AWARENESS</p>
  <p>KIT</p>`;
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
  banner.innerHTML = `<h2 class="headerText">It includes</h2>
          <h3 class="subHeaderText">
            Information about living with managing LN
          </h3>
          <div class="usb">
            <div class="textContainer">
              <span class="arrow"></span>
              <span>
                <p class="usbText one">AL</p>
                <p class="usbText two">I</p>
                <p class="subText">Lorem ipsum dolor sit, amet conse</p>
              </span>
            </div>
          </div>
          <div class="checkContainer">
          <span class="checkWrap"></span>
          <span class="checkWrap"></span>
          <span class="checkWrap"></span>
          <span class="checkWrap"></span>
          </div>
        </div>`;

  banner.classList.add("No2");
  const headerTextBanner2 = document.querySelector(".banner.No2 .headerText");
  const usb = document.querySelector(".usb");
  const checkWraps = document.querySelectorAll(".checkWrap");
  headerTextBanner2.onanimationend = () => {
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
        }
      };
    }
  };
}
// animateBanner2();
animateBanner1();

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navStrip = document.querySelector(".exhibition-nav-strip");

  if (!header || !navStrip) return;

  const navStartY = navStrip.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollY >= navStartY - headerHeight) {
      navStrip.classList.add("js-fixed-nav-strip");
      navStrip.style.top = `${headerHeight}px`;
    } else {
      navStrip.classList.remove("js-fixed-nav-strip");
      navStrip.style.top = "";
    }
  });
});

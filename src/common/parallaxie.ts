export default function parallaxie(selector: any) {
  const elementBg = document.querySelector(selector);
  const image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * 0.55;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${position}px`;

  window.onscroll = () => {
    const elements = document.querySelectorAll('.parallaxie[data-background]');

    elements.forEach(element => {
      position = element.getBoundingClientRect().top * 0.55;
      // @ts-ignore
      element.style.backgroundPosition = `center ${position}px`;
    });
  }
}
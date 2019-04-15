import lozad from 'lozad';

export default function setLazy() {
  const $imgs = $('.js-lazy');

  $imgs.each((i, img) => {
    const observer = lozad(img);
    observer.observe();
  });  
}

export default function toggleVideoBg() {
  const $blocks = $('.js-video-bg');

  $blocks.each((i, block) => {
    $(block).on('mouseenter', (e) => {
      const video = $(e.currentTarget).find('video')[0];
      video.play();
    });

    $(block).on('mouseleave', (e) => {
      const video = $(e.currentTarget).find('video')[0];
      video.pause();
    });
  });
}

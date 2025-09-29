document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('[data-motion-visible]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.1) {
        entry.target.setAttribute('data-motion-visible', 'true');
        // 카운트업 처리
        if (
          entry.target.hasAttribute('data-countup') &&
          entry.target.getAttribute('data-countup-done') === 'false'
        ) {
          const start = parseFloat(entry.target.getAttribute('data-countup-start')) || 0;
          const end = parseFloat(entry.target.getAttribute('data-countup-end')) || 100;
          const duration = parseInt(entry.target.getAttribute('data-countup-duration')) || 1500;
          const suffix = entry.target.getAttribute('data-countup-suffix') || '';
          countUp(entry.target, start, end, duration, suffix);
          entry.target.setAttribute('data-countup-done', 'true');
        }
      } else if (entry.intersectionRatio <= 0.1) {
        entry.target.setAttribute('data-motion-visible', 'false');
        // 카운트업 리셋
        if (entry.target.hasAttribute('data-countup')) {
          entry.target.setAttribute('data-countup-done', 'false');
        }
      }
    });
  }, {
    threshold: [0, 0.1]
  });

  targets.forEach(target => observer.observe(target));

  // 카운트업 대상 요소
  const countUpTargets = document.querySelectorAll('[data-countup]');
  countUpTargets.forEach(el => {
    el.setAttribute('data-countup-done', 'false');
  });

  countUpTargets.forEach(target => observer.observe(target));
});

// 카운트업 함수
function countUp(el, start, end, duration, suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + (end - start) * progress;
    el.textContent = value.toFixed(1) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end.toFixed(1) + suffix;
    }
  };
  window.requestAnimationFrame(step);
}

/*비디오 스크롤 자동재생설정*/
function handleVideoVisibility(entries) {
  entries.forEach(entry => {
    const video = entry.target;
    if (!(video instanceof HTMLVideoElement)) return;

    if (entry.intersectionRatio >= 0.2) {
      if (video.paused) {
        video.currentTime = 0;
        video.play();
      }
      video.setAttribute('data-autoPlayVideo', 'true');
    } else {
      if (!video.paused) {
        video.pause();
      }
      video.currentTime = 0;
      video.setAttribute('data-autoPlayVideo', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const autoPlayVideos = document.querySelectorAll('video[data-autoPlayVideo]');
  const observer = new IntersectionObserver(handleVideoVisibility, {
    threshold: [0, 0.2]
  });

  autoPlayVideos.forEach(video => observer.observe(video));
});

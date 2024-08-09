// script.js
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    window.addEventListener('scroll', onScroll);
}

function onScroll() {
    const videoContainer = document.querySelector('.video-container');
    const rect = videoContainer.getBoundingClientRect();
    const isVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);

    if (isVisible) {
        player.playVideo();
        player.unMute();
    } else {
        player.pauseVideo();
        player.mute();
    }
}

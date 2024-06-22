document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.addEventListener('ended', function() {
        // Check if the video is in the viewport
        if (isInViewport(videoPlayer)) {
            // Play the video again
            videoPlayer.play();
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
});
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,

});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider_item').forEach(item => {
    item.addEventListener('click', e => {
        const isOpened = item.classList.contains('opened');
        document.querySelectorAll('.slider_item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('opened')) {
                otherItem.classList.remove('opened');
            }
        });
        if (!isOpened) {
            item.classList.add('opened');
        }
        e.stopPropagation(); // Prevent click event propagation to document
    });
});

document.addEventListener('click', e => {
    document.querySelectorAll('.slider_item').forEach(item => {
        if (!item.contains(e.target)) {
            item.classList.remove('opened');
        }
    });
});

let desc = document.querySelector('.desc');

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});


// Function called when the YouTube Iframe API is ready
function onYouTubeIframeAPIReady() {
    // Create a new YouTube player object
    const player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'kTCOQSHohsE', // Video ID of the YouTube video
        playerVars: {
            'autoplay': 1, // Autoplay the video
            'loop': 1, // Loop the video
            'controls': 0, // Hide player controls
            'rel': 0, // Hide related videos at the end
            'showinfo': 0, // Hide video title and uploader info
            'mute': 1, // Mute the video initially
            'playlist': 'kTCOQSHohsE' // Required for looping
        },
        events: {
            'onReady': onPlayerReady
        }
    });

    // Function called when the player is ready to receive API calls
    function onPlayerReady(event) {
        // Set the volume to a low level (value between 0 and 100)
        event.target.setVolume(10); // Adjust volume as needed (10 is low volume)
        // Unmute the video after a delay (to allow the volume change to take effect)
        setTimeout(function () {
            event.target.unMute();
        }, 1000);
    }
}
var nsOptions = {
    sliderId: "ninja-slider",
    transitionType: "zoom",
    autoAdvance: true,
    rewind: true,
    delay: "default", //or integer value such as: 3500
    transitionSpeed: "default", //eg. 500, 1200, or "default"
    aspectRatio: "9:6",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    keyboardNav: true,
    before: null,
    (...rarely used options)
    license: "(your license key)"
};
var nslider = new NinjaSlider(nsOptions);
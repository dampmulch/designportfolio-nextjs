import { Html, Head, Main, NextScript } from 'next/document'

// Helper function to handle asset paths with basePath
function assetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/designportfolio-nextjs' : '';
  return `${basePath}${path}`;
}

export default function Document() {
  return (
    <Html lang="en" style={{"--tmb-scrollbar-width": "0px"}}>
      <Head />
      <body className="bg-dark navbar-show" data-new-gr-c-s-check-loaded="14.1010.0" data-gr-ext-installed="">
        <Main />
        <NextScript />
        
        {/* Original scripts for maintaining functionality - in correct order */}
        <script src={assetPath("/dist/assets/vendor/object-fit-images/dist/ofi.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/popper.js/dist/umd/popper.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/bootstrap/dist/js/bootstrap.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/bootstrap-validator/dist/validator.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/swiper/dist/js/swiper.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/animejs/lib/anime.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/rellax/rellax.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/jquery-countdown/dist/jquery.countdown.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/moment/min/moment.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/moment-timezone/builds/moment-timezone-with-data.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/isotope-layout/dist/isotope.pkgd.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/isotope-packery/packery-mode.pkgd.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/jarallax/dist/jarallax.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/jarallax/dist/jarallax-video.min.js")}></script>
        <script src={assetPath("/dist/assets/vendor/fancybox/dist/jquery.fancybox.min.js")}></script>
        <script src={assetPath("/dist/assets/js/normal.min.js")}></script>
      </body>
    </Html>
  )
}
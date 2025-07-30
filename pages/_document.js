import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* jQuery - needed for existing scripts */}
        <script src="/dist/assets/vendor/jquery/dist/jquery.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Original scripts for maintaining functionality */}
        <script src="/dist/assets/vendor/object-fit-images/dist/ofi.min.js"></script>
        <script src="/dist/assets/vendor/popper.js/dist/umd/popper.min.js"></script>
        <script src="/dist/assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="/dist/assets/vendor/bootstrap-validator/dist/validator.min.js"></script>
        <script src="/dist/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="/dist/assets/vendor/swiper/dist/js/swiper.min.js"></script>
        <script src="/dist/assets/vendor/animejs/lib/anime.min.js"></script>
        <script src="/dist/assets/vendor/rellax/rellax.min.js"></script>
        <script src="/dist/assets/vendor/jquery-countdown/dist/jquery.countdown.min.js"></script>
        <script src="/dist/assets/vendor/moment/min/moment.min.js"></script>
        <script src="/dist/assets/vendor/moment-timezone/builds/moment-timezone-with-data.min.js"></script>
        <script src="/dist/assets/vendor/isotope-layout/dist/isotope.pkgd.min.js"></script>
        <script src="/dist/assets/vendor/isotope-packery/packery-mode.pkgd.min.js"></script>
        <script src="/dist/assets/vendor/jarallax/dist/jarallax.min.js"></script>
        <script src="/dist/assets/vendor/jarallax/dist/jarallax-video.min.js"></script>
        <script src="/dist/assets/vendor/fancybox/dist/jquery.fancybox.min.js"></script>
        <script src="/dist/assets/js/normal.min.js"></script>
      </body>
    </Html>
  )
}
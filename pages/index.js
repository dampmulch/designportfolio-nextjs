import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shehab. | Design Portfolio</title>
        <meta name="description" content="Collection of design work." />
        <meta name="author" content="Dexad" />
        <link rel="icon" type="image/png" href="/dist/assets/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap" rel="stylesheet" />
        
        {/* Styles */}
        <link rel="stylesheet" href="/dist/assets/vendor/swiper/dist/css/swiper.min.css" />
        <link rel="stylesheet" href="/dist/assets/vendor/fancybox/dist/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/dist/assets/css/normal.min.css" />
        <link rel="stylesheet" href="/dist/assets/css/custom.css" />
        <link rel="stylesheet" href="https://use.typekit.net/vbq8zim.css" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155083883-1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-155083883-1');
          `
        }} />
      </Head>

      <div className="bg-dark navbar-show">
        <Header />
        
        <div className="content-wrap">
          <div className="pt-160 position-relative">
            <div className="background"></div>
            <div className="container py-lg-2">
              <div className="row gh-1 gv-2 text-white">
                <div className="col-lg mr-xl-n30 show-on-scroll show-on-scroll-ready" data-show-duration="900" data-show-delay="150" style={{transitionDuration: '900ms', opacity: 1, transform: 'translateY(0px)'}}>
                  <p className="lead font-weight-normal front-type-prop">Shehab is currently designing onboarding experiences at American Express.</p>
                  <p className="lead font-weight-normal front-type-prop">He's a systems-oriented product designer with a strong technical foundation. His experience spans startups to large corporations, where he's tackled a wide range of challenges from AI-powered tooling and complex operating systems to reconceptualizing multi-brand design systems and crafting zero-to-one experiences.</p>
                  <p className="lead font-weight-normal front-type-prop">Check out his work below. <a className="animate">↓</a></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container">
            <div>
              <div className="col-12 col-lg-10">
                <div className="pt-70 pb-160">
                  <ul className="nav flex-column interactive-links interactive-links-style-2 text-white data-show-duration=900 datashow-delay= 150">
                    <li className="nav-item">
                      <img className="interactive-links-image" src="/dist/assets/images/single-portfolio/Axios Banner.jpg" alt="Axios news platform interface showing AI-powered digital news delivery tools" />
                      <a href="/axios-page" className="nav-link h1 links-new">Axios</a>
                      <p className="subtitle new-sub">Elevating digital news delivery through AI-powered tools for both consumers and newsrooms.</p>
                    </li>
                    <li className="nav-item">
                      <img className="interactive-links-image" src="/dist/assets/images/single-portfolio/quickbookscasestudybanner.png" alt="Intuit QuickBooks case study banner showing small business retail solutions" />
                      <a href="/quickbooks-casestudy" className="nav-link h1 links-new">Intuit</a>
                      <p className="subtitle new-sub">Extending the utility of small businesses to help them compete with major retailers.</p>
                    </li>
                    <li className="nav-item">
                      <img className="interactive-links-image" src="/dist/assets/images/single-portfolio/Prubanner.jpg" alt="Prudential PGIM financial services design work showcasing enterprise solutions" />
                      <a href="/prudentialdesign" className="nav-link h1 links-new">Prudential</a>
                      <p className="subtitle new-sub">A collection of work at the finance giant.</p>
                    </li>
                    <li className="nav-item">
                      <img className="interactive-links-image" src="/dist/assets/images/single-portfolio/EyeTrackingClip.gif" alt="Eye tracking visualization showing user gaze patterns for wayfinding design research" />
                      <a href="/wayfindingdesign" className="nav-link h1 links-new">Wayfinding Design</a>
                      <p className="subtitle new-sub">Enhancing the wayfinding experience of NJIT's Hillier Collage of Art+Design.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
        
        {/* Scripts */}
        <script src="/dist/assets/vendor/jquery/dist/jquery.min.js"></script>
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
      </div>
    </>
  )
}
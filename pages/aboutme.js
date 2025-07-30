import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About | Shehab Ibrahim</title>
        <meta name="description" content="About Shehab Ibrahim - Product Designer" />
        <link rel="icon" type="image/png" href="/dist/assets/images/favicon.png" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Styles */}
        <link rel="stylesheet" href="/dist/assets/vendor/swiper/dist/css/swiper.min.css" />
        <link rel="stylesheet" href="/dist/assets/vendor/fancybox/dist/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/dist/assets/css/normal.min.css" />
        <link rel="stylesheet" href="/dist/assets/css/custom.css" />
      </Head>

      <div className="bg-light">
        <Header />
        
        <div className="content-wrap">
          <div className="pt-160 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="display-4 mb-4">About Shehab</h1>
                  <p className="lead">Product designer currently working on onboarding experiences at American Express.</p>
                  <p>Systems-oriented product designer with a strong technical foundation. Experience spans startups to large corporations, tackling challenges from AI-powered tooling and complex operating systems to reconceptualizing multi-brand design systems and crafting zero-to-one experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
}
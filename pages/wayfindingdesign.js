import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function WayfindingDesign() {
  return (
    <>
      <Head>
        <title>Wayfinding Design Case Study | Shehab Ibrahim</title>
        <meta name="description" content="Wayfinding Design - Enhancing NJIT's Hillier College experience" />
        <link rel="icon" type="image/png" href="/dist/assets/images/favicon.png" />
        
        {/* Styles */}
        <link rel="stylesheet" href="/dist/assets/css/normal.min.css" />
        <link rel="stylesheet" href="/dist/assets/css/custom.css" />
      </Head>

      <div className="bg-dark navbar-show">
        <Header />
        
        <div className="content-wrap">
          <div className="pt-160 pb-160">
            <div className="container">
              <div className="row text-white">
                <div className="col-lg-8">
                  <h1 className="display-3 mb-4">Wayfinding Design</h1>
                  <p className="lead mb-4">Enhancing the wayfinding experience of NJIT's Hillier College of Art+Design.</p>
                  <img src="/dist/assets/images/single-portfolio/EyeTrackingClip.gif" alt="Wayfinding design case study" className="img-fluid mb-4" />
                  <p>Case study content coming soon...</p>
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
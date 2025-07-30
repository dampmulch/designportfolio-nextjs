import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AxiosPage() {
  return (
    <>
      <Head>
        <title>Axios Case Study | Shehab Ibrahim</title>
        <meta name="description" content="Axios - Elevating digital news delivery through AI-powered tools" />
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
                  <h1 className="display-3 mb-4">Axios</h1>
                  <p className="lead mb-4">Elevating digital news delivery through AI-powered tools for both consumers and newsrooms.</p>
                  <img src="/dist/assets/images/single-portfolio/Axios Banner.jpg" alt="Axios case study" className="img-fluid mb-4" />
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
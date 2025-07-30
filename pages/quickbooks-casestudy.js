import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function QuickBooksCase() {
  return (
    <>
      <Head>
        <title>Intuit Case Study | Shehab Ibrahim</title>
        <meta name="description" content="Intuit - Extending utility for small businesses" />
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
                  <h1 className="display-3 mb-4">Intuit</h1>
                  <p className="lead mb-4">Extending the utility of small businesses to help them compete with major retailers.</p>
                  <img src="/dist/assets/images/single-portfolio/quickbookscasestudybanner.png" alt="Intuit case study" className="img-fluid mb-4" />
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
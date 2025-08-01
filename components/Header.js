import Link from 'next/link'
import { assetPath } from '../utils/assetPath'

export default function Header() {
  return (
    <>
      <header className="navbar navbar-top navbar-expand-lg navbar-dark navbar-fixed">
        <div className="container">
          <Link href="/" className="nav-link active">
            <span className="nav-link-name title-top">Shehab.</span>
          </Link>
          <a className="navbar-toggle order-4" href="#navbar-mobile-style-2" data-fancybox="" data-base-class="fancybox-navbar" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul className="nav navbar-nav order-2">
            <li className="nav-item navbar-dropdown navbar-dropdown-mega">
              <Link href="/" className="nav-link active">
                <span className="nav-link-name">work</span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <div className="container">
                  <ul role="menu" className="navbar-nav row gh-1 gv-3">
                    <li className="nav-item col-md-6 col-lg-3 col-xl-2">
                      <Link href="/axios-page" className="nav-link">
                        <span className="nav-link-image">
                          <img src={assetPath("/dist/assets/images/single-portfolio/Axios Banner.jpg")} alt="Axios news platform interface showing AI-powered digital news delivery tools" />
                        </span>
                        <span className="nav-link-name">Axios</span>
                      </Link>
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-2">
                      <Link href="/quickbooks-casestudy" className="nav-link">
                        <span className="nav-link-image">
                          <img src={assetPath("/dist/assets/images/single-portfolio/AppConnect.jpg")} alt="Intuit QuickBooks AppConnect interface for small business retail solutions" />
                        </span>
                        <span className="nav-link-name">Intuit</span>
                      </Link>
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-2">
                      <Link href="/prudentialdesign" className="nav-link">
                        <span className="nav-link-image">
                          <img src={assetPath("/dist/assets/images/single-portfolio/Prubanner.jpg")} alt="Prudential PGIM financial services design work showcasing enterprise solutions" />
                        </span>
                        <span className="nav-link-name">Prudential/PGIM</span>
                      </Link>
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-2">
                      <Link href="/wayfindingdesign" className="nav-link">
                        <span className="nav-link-image">
                          <img src={assetPath("/dist/assets/images/single-portfolio/eyetracking.gif")} alt="Eye tracking visualization showing user gaze patterns for wayfinding design research" />
                        </span>
                        <span className="nav-link-name">Wayfinding Design</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item navbar-dropdown">
              <Link href="/aboutme" className="nav-link">
                <span className="nav-link-name">about</span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </li>
            <li className="nav-item navbar-dropdown">
              <a target="_blank" href={assetPath("/dist/resume.pdf")} className="nav-link">
                <span className="nav-link-name">resume</span>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="navbar navbar-mobile navbar-mobile-style-2 navbar-dark" id="navbar-mobile-style-2" style={{display: 'none'}}>
        <div className="shape justify-content-end">
          <svg data-rellax-speed="0" width="544" height="362" viewBox="0 0 544 362" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
            <circle cx="320.5" cy="41.5" r="320.5" fill=" #202020"></circle>
          </svg>
        </div>
        <div className="navbar-head">
          <div className="container">
            <Link href="/" className="nav-link active">
              <span className="nav-link-name title-top">Shehab.</span>
            </Link>
            <a className="navbar-toggle" href="#" data-fancybox-close="">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row gh-1 justify-content-center">
            <div className="col-12 col-md-7 col-lg-5 col-xl-4">
              <div className="navbar-body">
                <ul className="nav navbar-nav navbar-nav-collapse">
                  <li className="nav-item navbar-collapse active">
                    <Link href="/" className="nav-link collapsed" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="navbarCollapseHome">
                      <span className="nav-link-name">work</span>
                      <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </Link>
                    <div className="navbar-collapse-menu collapse" id="navbarCollapseHome">
                      <ul className="nav navbar-nav">
                        <li className="nav-item">
                          <Link href="/axios-page" className="nav-link">
                            <span className="nav-link-name">Axios</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/quickbooks-casestudy" className="nav-link">
                            <span className="nav-link-name">Intuit</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/prudentialdesign" className="nav-link">
                            <span className="nav-link-name">Prudential</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/wayfindingdesign" className="nav-link">
                            <span className="nav-link-name">Wayfinding Design</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item navbar-collapse">
                    <Link href="/aboutme" className="nav-link collapsed" aria-expanded="false" aria-controls="navbarCollapseProjects">
                      <span className="nav-link-name ">about</span>
                      <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="nav-item navbar-collapse">
                    <a target="_blank" href={assetPath("/dist/resume.pdf")} className="nav-link collapsed" aria-expanded="false" aria-controls="navbarCollapsePages">
                      <span className="nav-link-name">resume</span>
                      <svg className="collapse-icon" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1 d-none d-md-block"></div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-3">
              <div className="navbar-footer">
                <div className="mb-60 text-white">
                  <p className="lead mb-17 font-weight-medium">Contact info:</p>
                  <ul className="list-group borderless font-size-17">
                    <li className="list-group-item">Email: <a href="mailto:hey@shehab.io" className="text-white"> hey@shehab.io</a></li>
                    <li className="list-group-item">Phone: <a href="tel:2019127328" className="text-white">201-912-7328</a></li>
                  </ul>
                </div>
                <div className="mb-60 text-white">
                  <ul className="list-group borderless font-size-17">
                    <li className="list-group-item">Have a wonderful day!</li>
                  </ul>
                </div>
                <ul className="nav nav-gap-sm navbar-nav nav-social align-items-center mt-n10 text-white">
                  <li className="nav-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shehabaldenibrahim/" className="nav-link iconcolor">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/shehabxyz" className="nav-link">
                      <svg width="17" height="15" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0706 5.51356C22.086 5.73504 22.086 5.95656 22.086 6.17804C22.086 12.9334 17.0783 20.7172 7.92575 20.7172C5.10601 20.7172 2.48661 19.8787 0.283203 18.4232C0.683835 18.4707 1.069 18.4865 1.48505 18.4865C3.81167 18.4865 5.95347 17.6797 7.6638 16.3033C5.47581 16.2558 3.64221 14.7845 3.01046 12.7594C3.31865 12.8069 3.6268 12.8385 3.9504 12.8385C4.39723 12.8385 4.84411 12.7752 5.2601 12.6645C2.97968 12.1898 1.2693 10.1332 1.2693 7.64935V7.58609C1.93183 7.96579 2.70231 8.20309 3.5189 8.2347C2.17837 7.31709 1.30013 5.75086 1.30013 3.97894C1.30013 3.02972 1.54661 2.15959 1.97807 1.40019C4.42801 4.50103 8.11063 6.52604 12.24 6.74756C12.163 6.36787 12.1168 5.97239 12.1168 5.57687C12.1168 2.76076 14.3356 0.466797 17.0937 0.466797C18.5266 0.466797 19.8209 1.0838 20.73 2.0805C21.8548 1.85902 22.9334 1.43184 23.8887 0.846495C23.5189 2.03307 22.7331 3.02977 21.7008 3.66255C22.7023 3.55186 23.673 3.26702 24.5667 2.87155C23.8888 3.88403 23.0413 4.78577 22.0706 5.51356Z" fill="currentColor" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ShehabIbrahim" className="nav-link iconcolor">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
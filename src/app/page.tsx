import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-dark">
      <Navbar />
      
      {/* Red Splash */}
      <section id="index-one" className="index-on relative">
        <div className="scrolldown">
          <a href="#novothor-introduction">
            <span></span>
            <span></span>
          </a>
        </div>
      </section>
      
      <div className="bg-dark">
        {/* Introducing NovoTHOR */}
        <section id="novothor-introduction" className="container-fluid bg-dark red-background-glow text-light first-bg">
          <div className="container">
            <div className="row pt-8 pb-6">
              <div className="col-12 col-lg-5 z-1">
                <div className="w-100 h-100">
                  <div className="text-center text-lg-left">
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 offset-lg-2 z-1">
                <div className="w-100 h-100 text-center">
                  <Image src="/images/logos/novothor_white_r.svg" className="user-logos" alt="NovoTHOR Logo" width={500} height={120} style={{ maxWidth: '100%' }} />
                </div>
              </div>
              <div className="col-12 col-lg-8 offset-lg-2 my-6 my-lg-8 z-1 text-center">
                <h1 className="sub-head text-lh">NovoTHOR® full body red light therapy bed</h1>
                <h2 className="sub-head text-lh">Reduce your pain, improve your health, and increase your performance</h2>
              </div>
            </div>
          </div>

          <div className="container mb-6 text-light">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-thin text-uppercase mb-6">NovoTHOR Red Light Therapy (RLT) Health Benefits</p>
              </div>
            </div>
            <div className="row">
              {[
                { icon: 'sparkle', label: 'Relieve Pain' },
                { icon: 'muscle', label: 'Recover' },
                { icon: 'heartbeat', label: 'Health Span' },
                { icon: 'heart-regular', label: 'Perform better' },
                { icon: 'lightning', label: 'Recharge' },
                { icon: 'refresh', label: 'Increase Circulation' },
              ].map((item) => (
                <div key={item.icon} className="col-4 col-lg-2 my-4 text-center">
                  <Image src={`/images/icons/${item.icon}.svg`} className="user-logos" alt={item.label} width={80} height={80} />
                  <p className="text-uppercase our-users text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container my-auto text-light">
            <div className="row mb-6">
              <div className="col-12 col-lg-6 pb-4 text-left">
                <h2 className="topic-title">What is full body red light therapy?</h2>
                <p className="text-thin text-lh">Red light therapy stimulates the body's natural processes using a mix of wavelengths of scientifically determined red and near-infrared light</p>
              </div>
              <div className="col-12 col-lg-6 pb-4 text-left">
                <h2 className="topic-title">What does red light therapy do?</h2>
                <p className="text-thin text-lh">Red and infrared light improve circulation, pain relief, and muscle and joint relief. This leads to better function and performance</p>
              </div>
              <div className="col-12 col-lg-6 pb-4 text-left">
                <h2 className="topic-title">What is red led light therapy used for?</h2>
                <p className="text-thin text-lh">Red light therapy is used to relieve pain, relax muscles, relieve joint stiffness, and increase circulation. It is used by doctors, pain clinics, and sports professionals a treatment with no known side effects</p>
              </div>
              <div className="col-12 col-lg-6 pb-4 text-left">
                <h2 className="topic-title">How often can you use whole body light therapy?</h2>
                <p className="text-thin text-lh">To get the best benefits of red light, elite athletes use NovoTHOR every day. Many people get great results using red light therapy less frequently to support their health, wellness, and longevity goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sports */}
        <section id="novothor-sports" className="container-fluid bg-dark text-light text-left text-lg-center">
          <div className="container">
            <div className="row my-7">
              <div className="col-12 text-center pt-7 z-2">
                <span className="h-text-scale uppercase">
                  <span className="less-bench">Less bench</span><br />
                  <span className="more-game">More game</span>
                </span>
              </div>

              <div className="col-lg-6 col-12 text-center">
                <Image 
                  src="/images/2024-001/dunk/dunk_1086.jpg"
                  alt="Basketball player dunking"
                  width={1086}
                  height={1920}
                  className="img-fluid rellax z-0"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="col-12 offset-lg-0 col-lg-6 text-left pt-5">
                <div className="vc w-100 h-100 z-1">
                  <div>
                    <p className="sub-head mt-5">Half of NBA 2024 playoff semi-finalists use NovoTHOR</p>
                    <p className="lead">Train harder, stay in the game longer, and return to play sooner. Used by olympic athletes, players, and teams in MLB, NBA, NHL, NFL, MLS.</p>
                    <p className="pt-4"><a href="#contact-now" className="cta-button">Talk sports</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Logos */}
        <section id="novothor-sports-teams" className="container-fluid bg-dark text-light text-left text-lg-center">
          <div className="row pb-0">
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/buffalo-bills.svg" className="user-logos" alt="Buffalo Bills logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Buffalo Bills</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/arizona-cardinals.svg" className="user-logos" alt="Arizona Cardinals logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Arizona Cardinals</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/caronlina-panthers.svg" className="user-logos" alt="Carolina Panthers logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Carolina Panthers</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/detroit-lions.svg" className="user-logos" alt="Detroit Lions logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Detroit Lions</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/indiana-pacers.svg" className="user-logos" alt="Indiana Pacers logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Indiana Pacers</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/la-clippers.svg" className="user-logos" alt="LA Clippers logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">LA Clippers</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/nd-hawks.svg" className="user-logos-small" alt="North Dakota Hawks logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">North Dakota Hawks</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/ohio-state.svg" className="user-logos" alt="The Ohio State logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">The Ohio State</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center">
              <Image src="/images/logos/phoenix-suns.svg" className="user-logos" alt="Phoenix Suns logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Phoenix Suns</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center z-1">
              <Image src="/images/logos/toronto-raptors.svg" className="user-logos" alt="Toronto Raptors logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Toronto Raptors</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center z-1">
              <Image src="/images/logos/utah-jazz-white.svg" className="user-logos" alt="Utah Jazz logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Utah Jazz</p>
            </div>
            <div className="col-4 col-lg-3 my-4 text-center z-1">
              <Image src="/images/logos/wa-commanders.svg" className="user-logos-small" alt="Washington Commanders logo" width={100} height={100} />
              <p className="text-uppercase our-users text-white">Washington Commanders</p>
            </div>
          </div>
        </section>

        {/* Military */}
        <section id="novothor-military" className="bg-dark text-light text-left container-fluid d-inline-flex">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center pt-7 order-first z-1">
                <span className="h-text-scale uppercase">Elite<br /><span className="military">Military</span><br />Forces</span>
              </div>

              <div className="col-12 col-lg-6 order-last order-lg-second z-1">
                <div className="vc w-100 h-100">
                  <div>
                    <p className="sub-head mt-5">Perform better<br />with the press of a button</p>
                    <p className="lead">NovoTHOR is widely used by the US Military forces to "increase operational readiness" through performance enhancement, injury prevention, and improved recovery in the military training setting</p>
                    <p className="pt-4"><a href="#contact-now" className="cta-button">Improve performance</a></p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-center order-second order-lg-last">
                <Image
                  src="/images/2024-001/military/novothor-military-us_800.jpg"
                  alt="US Military using NovoTHOR"
                  width={800}
                  height={1200}
                  className="img-fluid w-100 rellax z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Military Logos */}
        <section id="novothor-military-logos" className="text-light text-left container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-6 offset-0 col-lg-3 offset-lg-0 mt-6 mb-4 my-lg-4 text-center">
                <Image src="/images/logos/us-special-forces.png" className="user-logos" alt="US Army Special Forces logo" width={100} height={100} />
                <p className="text-uppercase our-users text-white">US Army Special Forces</p>
              </div>
              <div className="col-6 col-lg-3 mt-6 mb-4 my-lg-4 text-center">
                <Image src="/images/logos/us-navy-special-warfare.png" className="user-logos" alt="US Navy SEALs logo" width={100} height={100} />
                <p className="text-uppercase our-users text-white">US Navy SEALs</p>
              </div>
              <div className="col-6 col-lg-3 my-4 text-center z-1">
                <Image src="/images/logos/us-navy-reserve.svg" className="user-logos" alt="US Navy logo" width={100} height={100} />
                <p className="text-uppercase our-users text-white">US Navy</p>
              </div>
              <div className="col-6 col-lg-2 my-4 text-center z-1">
                <Image src="/images/logos/us-af.svg" className="user-logos" alt="US Airforce" width={100} height={100} />
                <p className="text-uppercase our-users text-white">US Airforce</p>
              </div>
            </div>
          </div>
        </section>

        {/* Take Control */}
        <section id="take-control" className="container-fluid bg-dark take-control text-light">
          <div className="container-fluid container-sm">
            <div className="row text-center">
              <div className="col-12 col-lg-8 offset-lg-2 vc h-100 pt-8">
                <div>
                  <h2 className="sub-head">Take control of your health</h2>
                  <p className="lead text-thin text-lh">NovoTHOR makes it easy to optimize your health span, helping you maintain or regain an active lifestyle. It uses clinically proven doses and wavelengths, delivering reliable treatments without unnecessary complexity</p>
                  <p><a href="#contact-now" className="cta-button my-4">Take control</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Effective */}
        <section id="measured-tested-proven" className="container-fluid bg-dark text-light">
          <div className="container-fluid container-sm">
            <div className="row text-center pt-8">
              <div className="col-12 col-lg-10 offset-lg-1 text-glow-blue-container">
                <span className="h-text-scale text-uppercase"><span className="text-glow-blue">Proven.<br />Effective.</span></span><br />
                <p className="sub-head pt-2 text-lh my-4">NovoTHOR is the only light bed with independently researched and published clinical results</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid bg-dark d-inline-flex text-center text-white blue-background-glow">
          <div className="container my-auto">
            <div className="row py-4 py-lg-6">
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h3 className="topic-title">Independent Evidence</h3>
                <p className="text-thin text-lh">It can be hard to know who to trust, which is why we don't need to say "trust us", instead we say "trust the evidence"</p>
              </div>
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h3 className="topic-title">Reliable Results</h3>
                <p className="text-thin text-lh">5 independent clinical studies came to the same conclusion about the effectiveness of the NovoTHOR</p>
              </div>
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h3 className="topic-title">Intensely Effective</h3>
                <p className="text-thin text-lh">Higher quality LEDs powered by bespoke drivers deliver the proven effective light intensity over the whole body</p>
              </div>
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h3 className="topic-title">Red Light Therapy Dose</h3>
                <p className="text-thin text-lh">NovoTHOR's focus is on delivering the best dose over the entire treatment area for reliable outcomes</p>
              </div>
              <div className="col-12">
                <p className="text-center"><a href="#contact-now" className="cta-button my-4">Red Light Therapy Bed for Sale</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Section */}
        <section className="container-fluid d-inline-flex text-center text-white index-wellness">
          <div className="container my-auto">
            <div className="row">
              <div className="col-10-12 col-lg-10 offset-lg-1 pb-4 text-left text-lg-center">
                <div className="vc w-100 h-100 z-2">
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Science not magic */}
        <section className="container-fluid bg-dark text-light">
          <div className="container-fluid container-sm">
            <div className="row text-center pt-8">
              <div className="col-12 col-lg-10 offset-lg-1">
                <span className="h-text-scale text-uppercase">Science.<br />not magic.</span><br />
                <p className="sub-head pt-2 text-lh my-4">THOR is widely acknowledged as the world's leading authority on red and infrared light therapy dose and treatment parameters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid bg-dark d-inline-flex text-center text-white red-background-glow">
          <div className="container my-auto">
            <div className="row py-4 py-lg-6">
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h2 className="topic-title">Red Light Therapy Parameters</h2>
                <p className="text-thin text-lh">Harvard, St. Jude Children's Research Hospital, MIT, and the US Military consult THOR on mechanisms, treatment parameters and dose</p>
              </div>
              <div className="col-12 col-lg-6 py-4 px-lg-6 py-lg-5 text-left">
                <h3 className="topic-title">Knowledge, experience, reputation</h3>
                <p className="text-thin text-lh">We briefed Congress, the White House, and the United Nations on medical light therapy as a result of our research collaborations with 50 academic institutions</p>
              </div>
              <div className="col-12">
                <p className="text-center"><a href="#contact-now" className="cta-button my-4">Get expert advice</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Built to Last */}
        <section id="built-to-last" className="bg-dark text-light container-fluid pt-1 pt-lg-6 pb-7">
          <div className="container">
            <div className="row text-left">
              <div className="col-12 text-center mt-8 z-1">
                <span className="h-text-scale uppercase">Designed to perform<br />Built to last</span>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12 col-lg-6 offset-lg-3">
                <div className="text-center w-100 h-100">
                  <Image src="/images/2024-001/thor_o_construction.jpg" className="img-fluid z-0 rellax" alt="THOR logo construction" width={800} height={600} style={{ width: '90%' }} />
                </div>
              </div>
            </div>
            <div className="row text-left red-background-glow">
              {[
                { title: 'Better components', text: 'NovoTHOR is engineered with the highest-performing narrow-band red and infrared light emitting diodes (LEDs), each rigorously tested for wavelength accuracy, forward voltage, and power efficiency' },
                { title: 'Overengineered', text: 'We use LED technology that can put out 3x the light intensity required and driving them at 35% of their maximum capacity for better sustained performance' },
                { title: 'Cooling', text: 'Eight internal fans circulate 50 cubic feet of air per minute. This ensures optimal cooling to maintain peak LED and light technology function over a session and NovoTHOR\'s lifetime' },
                { title: 'Built to last', text: 'There are NovoTHOR red light beds built over a decade ago are still used today by medical professionals, delivering a great treatment in a wide variety of settings' },
                { title: '5 year warranty', text: 'NovoTHOR comes with a 5 year warranty and THOR engineers are ready if anything ever goes wrong' },
                { title: 'Meticulously built', text: 'This meticulous attention to detail is applied to the design and manufacture of every THOR product' },
              ].map((item) => (
                <div key={item.title} className="col-12 col-lg-4">
                  <h2 className="topic-title mt-5">{item.title}</h2>
                  <p className="text-thin text-lh">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red Light Therapy Near me */}
        <section className="bg-dark text-light container-fluid">
          <div className="container">
            <div className="row py-8">
              <div className="col-12 col-lg-8 offset-lg-2 text-center">
                <p className="text-scale-medium py-3">Need a session?</p>
                <p className="topic-title text-thin py-3">NovoTHOR is approved or cleared as a medical device in over 30 countries</p>
                <p><a href="/locations" className="cta-button my-3">Red light bed near me</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory */}
        <section className="bg-dark text-light container-fluid">
          <div className="container">
            <div className="row py-6">
              <div className="col-12 col-lg-6 offset-lg-3">
                <p className="text-thin">NovoTHOR is intended to be used for the temporary relief of minor muscle and joint pain and stiffness, minor arthritis pain, or muscle spasm; the temporary increase in local blood circulation; and/or the temporary relaxation of muscle.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section id="index-contact" className="container-fluid text-white text-left" style={{ background: 'url(/images/index-contact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh' }}>
        <div className="container py-6">
          <div className="row my-6">
            <div className="col-12 offset-md-2 col-md-8 text-center">
              <h2 className="usa pb-3">Want to learn more?</h2>
              <div style={{ textAlign: 'center' }} id="contactdiv">
                <div id="buttons">
                  <div id="menu" className="list-group text-black py-4">
                    <div style={{ width: '300px', margin: '0 auto' }} className="contact-big text-center">
                      <span>Enquire now</span>
                    </div>
                    <div className="mt-5 mb-1">
                      <span className="text-light small mt-2">Book a service or maintenance for your NovoTHOR</span>
                    </div>
                    <div style={{ width: '300px', border: '1px solid', margin: '0 auto' }} className="contact-big text-center mt-3 text-small small text-thin">
                      <span>NovoTHOR Services</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="contact-now"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

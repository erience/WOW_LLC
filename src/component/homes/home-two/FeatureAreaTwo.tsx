import Image from "next/image"


const FeatureAreaTwo = () => {
   return (
      <div className="pt-140 pb-140 overflow-hidden position-relative z-index-common" id="feature">
         <div className="bg-gradient-5"></div>
         <div className="feature-shape-3-1 alltuchtopdown"></div>
         <div className="feature-shape-3-2 alltuchtopdown"></div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 text-center">
                  <div className="feature-thumb-wrap">
                     <Image width={100} height={100} className="feature-thumb-3-1 alltuchtopdown" src={"/assets/img/update/normal/intro_1-1.png"} alt="img" />
                     <Image width={100} height={100} className="feature-thumb-3-2" src={"/assets/img/update/feature/feature-thumb-3-1.png"} alt="img" />
                     <div className="feature-thumb-circle spin"></div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="section-title mb-75">
                     <span className="sub-title text-white">FEATURES</span>
                     <h2 className="title style2">Blockchain spreads trust everywhere</h2>
                     <p className="mt-25">Our team has created blockchain solutions for over 400 companies, and we are still growing. From less paperwork and fewer disputes, to happier customers and entirely new business methods, <a className="text-decoration-underline text-white" href="#">a shared record of truth is invaluable.</a>
                     </p>
                  </div>
                  <div className="counter-grid-wrap">
                     <div className="counter-wrap">
                        <div className="counter-card">
                           <h3 className="counter-card_number">
                              63M
                           </h3>
                           <p className="counter-card_text">Blockchain users</p>
                        </div>
                     </div>
                     <div className="counter-wrap">
                        <div className="counter-card">
                           <h3 className="counter-card_number">
                              24%
                           </h3>
                           <p className="counter-card_text">Companies use blockchain</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FeatureAreaTwo

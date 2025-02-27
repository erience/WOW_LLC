import Image, { StaticImageData } from "next/image";


interface DataType {
   id: number;
   title: string;
   thumb: StaticImageData | string;
   desc_1: string;
   desc_2: string;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      title: "Transference",
      thumb: "/assets/img/update/feature/feature-card-thumb-2.png",
      desc_1: "We’ve worked with over 400 companies to build blockchain solutions for their business.",
      desc_2: "We’ve worked with over 400 companies to build",
   },
   {
      id: 2,
      title: "Secure & Safe",
      thumb: "/assets/img/update/feature/feature-card-thumb-3.png",
      desc_1: "We’ve worked with over 400 companies to build blockchain solutions for their business.",
      desc_2: "We’ve worked with over 400 companies to build",
   },
];

const FeatureArea = () => {
   return (
      <div className="feature-area-2 pt-110 pb-140 position-relative overflow-hidden" style={{ backgroundImage: `url(/assets/img/update/bg/feature-area-bg.png)`, backgroundSize: "cover", backgroundPosition: "center" }} id="blockchain">
         <div className="feature-area-shape">
            <Image width={100} height={100} className="feature-shape2-1 alltuchtopdown" src={"/assets/img/update/feature/feature-shape-2-1.png"} alt="img" />
            <Image width={100} height={100} className="feature-shape2-2 alltuchtopdown" src={"/assets/img/update/feature/feature-shape-2-2.png"} alt="img" />
            <Image width={100} height={100} className="feature-shape2-3 leftToRight" src={"/assets/img/update/feature/feature-shape-2-3.png"} alt="img" />
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5 col-lg-8">
                  <div className="section-title text-center mb-50">
                     <span className="sub-title">ABOUT BLOCKCHAIN</span>
                     <h2 className="title style2">Why blockchain?</h2>
                     <p className="sec-text">We’ve worked with over 400 companies to build blockchain solutions for their business, and we are still growing.
                     </p>
                  </div>
               </div>
            </div>
            <div className="feature-grid-wrap">
               <div className="feature-card-grid">
                  <div className="feature-card-details">
                     <h3 className="feature-card-title">Flexibility</h3>
                     <p className="feature-card-text">We’ve worked with over 400 companies to build blockchain solutions for their business.</p>
                     <div className="checklist">
                        <ul>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                        </ul>
                     </div>
                  </div>
                  <div className="feature-card-img">
                     <Image width={100} height={100} className="alltuchtopdown" src={"/assets/img/update/feature/feature-card-thumb-1.png"} alt="img" />
                  </div>
               </div>
               {feature_data.map((item) => (
                  <div key={item.id} className="feature-card-grid">
                     <div className="feature-card-details">
                        <h3 className="feature-card-title">{item.title}</h3>
                        <p className="feature-card-text">{item.desc_1}</p>
                        <p className="feature-card-text">{item.desc_2}</p>
                     </div>
                     <div className="feature-card-img">
                        <Image width={100} height={100} src={item.thumb} alt="img" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default FeatureArea

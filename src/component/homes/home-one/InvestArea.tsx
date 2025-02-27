import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface DataType {
   id: number;
   icon: StaticImageData | string;
   title: string;
}

const invest_data: DataType[] = [
   {
      id: 1,
      icon: "/assets/img/update/invest/invest-icon-1.png",
      title: "Enclose BTC",
   },
   {
      id: 2,
      icon: "/assets/img/update/invest/invest-icon-2.png",
      title: "Enclose ETH",
   },
   {
      id: 3,
      icon: "/assets/img/update/invest/invest-icon-3.png",
      title: "Bank Transfer",
   },
   {
      id: 4,
      icon: "/assets/img/update/invest/invest-icon-4.png",
      title: "Enclose UXC",
   },
];

const InvestArea = () => {
   return (
      <div className="pt-130 overflow-hidden">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                     <h2 className="title style2">Invest in Our ecosystem shares today</h2>
                  </div>
               </div>
            </div>
            <div className="row gy-30">
               {invest_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="invest-card">
                        <div className="invest-card-icon">
                           <Image width={100} height={100} src={item.icon} alt="icon" />
                        </div>
                        <Link className="btn btn3" href="#">{item.title}</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default InvestArea

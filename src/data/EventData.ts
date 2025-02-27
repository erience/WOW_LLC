import { StaticImageData } from "next/image";


interface DataType {
   id: number;
   thumb: StaticImageData | string;
   title: string;
   country: string;
   date: string;
}[];

const event_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/update/event/1-1.png",
      title: "BlockVienna",
      country: "Venna",
      date: "August 17, 2024",
   },
   {
      id: 2,
      thumb: "/assets/img/update/event/1-2.png",
      title: "Summit Summits",
      country: "USA",
      date: "June 12, 2024",
   },
   {
      id: 3,
      thumb: "/assets/img/update/event/1-3.png",
      title: "Blockchain Summit",
      country: "America",
      date: "July 05, 2024",
   },
   {
      id: 4,
      thumb: "/assets/img/update/event/1-4.png",
      title: "Economy ICO 2024",
      country: "Costa Rica",
      date: "September 09, 2024",
   },
   {
      id: 5,
      thumb: "/assets/img/update/event/1-5.png",
      title: "Blockchain summit",
      country: "Brazil",
      date: "September 14, 2024",
   },
   {
      id: 6,
      thumb: "/assets/img/update/event/1-6.png",
      title: "Blockchain & bitcoin",
      country: "Argentina",
      date: "August 14, 2024",
   },
   {
      id: 7,
      thumb: "/assets/img/update/event/1-7.png",
      title: "Money conference",
      country: "Franch",
      date: "May 24, 2024",
   },
   {
      id: 8,
      thumb: "/assets/img/update/event/1-8.png",
      title: "Crypto Economy",
      country: "Saudi Arabia",
      date: "May 24, 2024",
   },
];

export default event_data;

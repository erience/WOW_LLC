import { StaticImageData } from "next/image";


interface DataType {
   id: number,
   category: string;
   team_data: {
      id: number;
      thumb: StaticImageData | string;
      name: string;
   }[];
}[];

const team_data: DataType[] = [
   {
      id: 1,
      category: "cat1",
      team_data: [
         {
            id: 1,
            thumb: "/assets/img/update/team/team-1-1.png",
            name: "Jacob Jones",
         },
         {
            id: 2,
            thumb: "/assets/img/update/team/team-1-2.png",
            name: "Albert Flores",
         },
         {
            id: 3,
            thumb: "/assets/img/update/team/team-1-3.png",
            name: "Devon Lane",
         },
         {
            id: 4,
            thumb: "/assets/img/update/team/team-1-4.png",
            name: "Jacob Jones",
         },
         {
            id: 5,
            thumb: "/assets/img/update/team/team-1-5.png",
            name: "Jacob Jones",
         },
         {
            id: 6,
            thumb: "/assets/img/update/team/team-1-6.png",
            name: "Jacob Jones",
         },
         {
            id: 7,
            thumb: "/assets/img/update/team/team-1-7.png",
            name: "Albert Flores",
         },
         {
            id: 8,
            thumb: "/assets/img/update/team/team-1-8.png",
            name: "Devon Lane",
         },
         {
            id: 9,
            thumb: "/assets/img/update/team/team-1-9.png",
            name: "Jacob Jones",
         },
         {
            id: 10,
            thumb: "/assets/img/update/team/team-1-10.png",
            name: "Jacob Jones",
         },
      ]
   },
   {
      id: 2,
      category: "cat2",
      team_data: [
         {
            id: 1,
            thumb: "/assets/img/update/team/team-1-4.png",
            name: "Jacob Jones",
         },
         {
            id: 2,
            thumb: "/assets/img/update/team/team-1-3.png",
            name: "Devon Lane",
         },
         {
            id: 3,
            thumb: "/assets/img/update/team/team-1-5.png",
            name: "Jacob Jones",
         },
         {
            id: 4,
            thumb: "/assets/img/update/team/team-1-6.png",
            name: "Jacob Jones",
         },
         {
            id: 5,
            thumb: "/assets/img/update/team/team-1-7.png",
            name: "Albert Flores",
         },
         {
            id: 6,
            thumb: "/assets/img/update/team/team-1-2.png",
            name: "Albert Flores",
         },
         {
            id: 7,
            thumb: "/assets/img/update/team/team-1-8.png",
            name: "Devon Lane",
         },
         {
            id: 8,
            thumb: "/assets/img/update/team/team-1-1.png",
            name: "Jacob Jones",
         },
         {
            id: 9,
            thumb: "/assets/img/update/team/team-1-9.png",
            name: "Jacob Jones",
         },
         {
            id: 10,
            thumb: "/assets/img/update/team/team-1-10.png",
            name: "Jacob Jones",
         },
      ]
   },
   {
      id: 3,
      category: "cat3",
      team_data: [
         {
            id: 1,
            thumb: "/assets/img/update/team/team-1-1.png",
            name: "Jacob Jones",
         },
         {
            id: 2,
            thumb: "/assets/img/update/team/team-1-2.png",
            name: "Albert Flores",
         },
         {
            id: 3,
            thumb: "/assets/img/update/team/team-1-3.png",
            name: "Devon Lane",
         },
         {
            id: 4,
            thumb: "/assets/img/update/team/team-1-4.png",
            name: "Jacob Jones",
         },
         {
            id: 5,
            thumb: "/assets/img/update/team/team-1-5.png",
            name: "Jacob Jones",
         },
         {
            id: 6,
            thumb: "/assets/img/update/team/team-1-6.png",
            name: "Jacob Jones",
         },
         {
            id: 7,
            thumb: "/assets/img/update/team/team-1-7.png",
            name: "Albert Flores",
         },
         {
            id: 8,
            thumb: "/assets/img/update/team/team-1-8.png",
            name: "Devon Lane",
         },
         {
            id: 9,
            thumb: "/assets/img/update/team/team-1-9.png",
            name: "Jacob Jones",
         },
         {
            id: 10,
            thumb: "/assets/img/update/team/team-1-10.png",
            name: "Jacob Jones",
         },
      ]
   },
];

export default team_data;
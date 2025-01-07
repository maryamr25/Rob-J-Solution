// import React from 'react'


// interface ITeamMember {
//     isAdmin?: boolean;
//     name: string;
//     designation: string;
//     image: string 
//     onDelete?: () => void;
//     id?: number;
//     onUpdate?: () => void;
// }

// export const OurTeamCard = ({
//     isAdmin = false,
//     name,
//     designation,
//     image,
//     id,
//     onUpdate,
// }
// : ITeamMember): React.ReactElement => {
//     // const [deleteTeamMember] = useDeleteTeamMemberMutation();


//     // export const OurTeam = (): React.ReactElement => {
//     //     const { data } = useGetTeamsMembersQuery();
//         return (
//             <section className="py-12">
//                 <div className="resContainer">
//                     <div className="w-full max-w-[962px] mx-auto flex flex-col gap-1.5 sm:gap-3 items-center">
//                         <div
                            
//                             className="text-center text-primary"
//                         >
//                             Our Team
//                         </div>
//                         <div  className="text-center">
//                             Meet Our Team
//                         </div>
//                     </div>
//                 </div>
    
//                 <div className="pt-12 resContainer grid grid-cols-1 justify-center sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,_23%)] m-auto ">
//                     {Array.isArray(data?.data?.teams) &&
//                         data?.data?.teams?.map((team, index) => (
//                             <OurTeamCard
//                                 key={index}
//                                 name={team?.name}
//                                 designation={team.job_title}
//                                 image={getImageUrl(team.team_image)}
//                                 id={team?.id}
//                             />
//                         ))}
//                 </div>
//             </section>
//         );
//     };
    


import React from "react";

interface ITeamMember {
  isAdmin?: boolean;
  name: string;
  designation: string;
  image: string;
  onDelete?: () => void;
  id?: number;
  onUpdate?: () => void;
}

interface ITeam {
  teams: {
    id: number;
    name: string;
    job_title: string;
    team_image: string;
  }[];
}

const getImageUrl = (imagePath: string): string => {
  return `/images/${imagePath}`; // Replace this with your actual logic for generating image URLs
};

export const OurTeamCard = ({
  isAdmin = false,
  name,
  designation,
  image,
  id,
  onUpdate,
}: ITeamMember): React.ReactElement => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-60 h-full  object-contain mb-4"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{designation}</p>
      {isAdmin && (
        <div className="mt-4 flex gap-2">
          <button
            onClick={onUpdate}
            className="px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export const OurTeam = (): React.ReactElement => {
  // Replace the mock data below with your actual API call, e.g., `useGetTeamsMembersQuery()`
  const data: ITeam = {
    teams: [
      {
        id: 1,
        name: "John Doe",
        job_title: "Software Engineer",
        team_image: "/cam.JPG",
      },
      {
        id: 2,
        name: "Jane Smith",
        job_title: "Product Manager",
        team_image: "/cam.JPG",
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="resContainer ">
        <div className="w-full max-w-[500px] mx-auto flex flex-col gap-1 sm:gap-3 items-center">
          <h2 className="text-center text-primary text-3xl font-bold">
            Our Team
          </h2>
          <p className="text-center text-gray-600">
            Meet the talented individuals behind our success.
          </p>
        </div>
      </div>

      <div className="pt-12 px-20 resContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6">
        {data.teams.map((team) => (
          <OurTeamCard
            key={team.id}
            name={team.name}
            designation={team.job_title}
            image={getImageUrl(team.team_image)}
            id={team.id}
          />
        ))}
      </div>
    </section>
  );
};

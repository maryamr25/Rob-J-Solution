import React from 'react'
import ExpertiseCard from '../ExpertiseCard'

function HomeOurExperties() {
  return (
    <section className="py-8 md:py-20">
            <div className="resContainer">
                <div className="w-full  max-w-[962px] mx-auto flex flex-col gap-4 items-center">
                    <div
                        
                        className="text-center font-serif text-1xl md:text-2xl  text-primary"
                    >
                        Our Expertise
                    </div>
                    <div
                       
                        className="text-center  font-semibold md:text-3xl text-2xl "
                    >
                        Our expertise lies in delivering tailored workforce
                        solutions, ensuring the right talent for every project
                        through our deep industry knowledge and commitment to
                        excellence
                    </div>
                </div>
            </div>
            {/* Expertise cards */}
            <div
                className="py-10 bg-no-repeat bg-cover bg-bottom"
                style={{ backgroundImage: `url("/images/expertiseBg.svg")` }}
            >


                <div
                    className={ `w-[1600px] max-w-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  transition-all duration-500 `}

                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      }}
                >
                    <ExpertiseCard/>
                    {/* {Array.isArray(data?.data?.services) &&
                        data?.data?.services?.map((service, index) => (
                            <ExpertiseCard key={index} data={service} />
                        ))} */}
                </div>
            </div>
        </section>
  )
}

export default HomeOurExperties
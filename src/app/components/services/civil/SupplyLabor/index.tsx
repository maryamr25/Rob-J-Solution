import React from 'react';


interface Data {
       
        
        image: string;
        description: string;
        title : string;
       
    }
    
    
    const CareerData: Data[] = [
        {
            image: '/images/supply1.png',
            title: 'Groundworkers',
            description:
                'Groundworkers specialised in safe and efficient ground support for construction and maintenance projects.',
        },
        {
            image: '/images/supply3.png',
            title: 'Plant Operators',
            description:
                'We supply digger drivers trained to operate machines of any size, wheeled or tracked, dumper drivers, roller drivers, telehandler drivers and any other plant specific trades.',
        },
        {
            image: '/images/services/civilExpertiese.png',
            title: 'Supervisors',
            description:
                'Supervisors ensure the smooth and safe execution of projects with expert oversight and leadership.',
        },
        
    ];


export const SupplyLabor = (): React.ReactElement => (
    <>
        <section
            className="bg-no-repeat bg-contain bg-center"
            style={{
                backgroundImage: `url("/images/whyChooseUsCareerImg/YchooseUsBg.png")`,
            }}
        >
            <div className="resContainer">
                <div className="flex flex-col max-w-[962px] m-auto pt-10 pb-4 md:pt-20 sm:pb-8">
                    <div
                       className='text-lg font-medium font-serif text-center text-primary'  >
                        Supply labour
                    </div>
                    <div
                    className='md:text-2xl  text-1xl font-semibold text-center py-4 !leading-relaxed font-serif'
                        // className="text-center py-4 !leading-relaxed"
                    >
                       We Supply Labours for Civil Engineering
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
                    {CareerData.map((data, index) => (
                        <div key={index} className="mb-3">
                            <img
                                src={data.image}
                                alt=""
                                width={300}
                                height={200}
                                className="w-full h-60"
                            />
                            <div className="pt-2">
                                <div
                                    
                                    className="text-secondary font-serif text-lg font-semibold py-2"
                                >
                                    {data.title}
                                </div>
                                <div className="text-sm md:text-lg ">
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

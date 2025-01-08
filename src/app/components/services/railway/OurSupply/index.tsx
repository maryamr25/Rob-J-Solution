import Image from 'next/image';
import React from 'react';


interface Data {
       
        
        image: string;
        description: string;
        title : string;
       
    }
    
    
    const CareerData: Data[] = [
        {
            image: '/images/supply1.png',
            title: 'PTS Labourers',
            description:
                'PTS Labourers provide skilled and certified personnel to ensure safe and efficient operations.',
        },
        {
            image: '/images/supply2.png',
            title: 'PTS Ground Workers',
            description:
                'PTS Ground Workers specialize in safe and efficient ground support for construction and maintenance projects..',
        },
        {
            image: '/images/supply3.png',
            title: 'Continuous Learning',
            description:
                'We empower employees through continuous learning with various training and development programs.',
        },
        {
            image: '/images/supply1.png',
            title: 'Compensation and Benefits',
            description:
                'We provide competitive salaries, comprehensive health insurance, company pension, and generous training programs.',
        },
        {
            image: '/images/supply1.png',
            title: 'PTS Labourers',
            description:
                'We foster a culture of collaboration and innovation, where every team members voice is valued.',
        },
        {
            image: '/images/supply2.png',
            title: 'Safety First',
            description:
                'We provide comprehensive training and prioritize a safe work environment for all employees.',
        },
    ];



export const RailwaySupplyLabor = (): React.ReactElement => (
    <>
        <section
          
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
                       We Supply Labours for Railway
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
                    {CareerData.map((data, index) => (
                        <div key={index} className="mb-3">
                            <Image
                                src={data.image}
                                alt=""
                                width={300}
                                height={200}
                                className="w-full h-70"
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

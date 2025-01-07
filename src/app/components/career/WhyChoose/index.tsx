import React from 'react';


interface Data {
       
        
        image: string;
        description: string;
        title : string;
       
    }
    
    
    const CareerData: Data[] = [
        {
            image: '/images/whyChooseUsCareerImg/YchooseUs1.png',
            title: 'Collaborative and Innovative',
            description:
                'We foster a culture of collaboration and innovation, where every team members voice is valued.',
        },
        {
            image: '/images/whyChooseUsCareerImg/YchooseUs2.png',
            title: 'Safety First',
            description:
                'We provide comprehensive training and prioritize a safe work environment for all employees.',
        },
        {
            image: '/images/whyChooseUsCareerImg/YchooseUs3.png',
            title: 'Continuous Learning',
            description:
                'We empower employees through continuous learning with various training and development programs.',
        },
        {
            image: '/images/whyChooseUsCareerImg/YchooseUs4.png',
            title: 'Compensation and Benefits',
            description:
                'We provide competitive salaries, comprehensive health insurance, company pension, and generous training programs.',
        },
    ];


export const WhyChooseCard = (): React.ReactElement => (
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
                        Why Choose Rob J Solutions?
                    </div>
                    <div
                    className='md:text-2xl  text-1xl font-semibold text-center py-4 !leading-relaxed font-serif'
                        // className="text-center py-4 !leading-relaxed"
                    >
                        We are passionate about building a{' '}
                        <span className="text-primary"> better future</span>,
                        and we offer a rewarding work environment to match
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {CareerData.map((data, index) => (
                        <div key={index} className="mb-3">
                            <img
                                src={data.image}
                                alt=""
                                width={269}
                                height={269}
                                className="w-full"
                            />
                            <div className="pt-2">
                                <div
                                    
                                    className="text-secondary font-serif text-lg font-semibold py-2"
                                >
                                    {data.title}
                                </div>
                                <div className=" ">
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

import Image from "next/image"


function Features() {
 const featuresData = [
    {icon: '/icons/quality.svg' , title : 'Quality' , description :  'We deliver top-notch quality, ensuring every project meets high standards' },
    {icon: '/icons/safety.svg' , title : 'Safety' , description :'Safety is paramount we prioritise well-being and follow strict protocols' },
    {icon: '/icons/innovation.svg' , title : 'Innovation' , description : 'We embrace innovation to improve methods and deliver cutting-edge solutions' }
 ]

  return (
    <>
   {/* Features section */}
<section className="sm:-mt-12 md:-mt-24 z-10 relative">
                <div className="resContainer"> 
                    <div className="bg-white  lg:mx-28 md:mx-24 mx-4 shadow-md  px-8 py-7 flex flex-row flex-wrap justify-center lg:flex-nowrap gap-8 lg:justify-between">
                        {featuresData.map((feature, index) => (
                            <>
                                <div
                                    className="flex flex-col items-center gap-3 w-full max-w-[308px]"
                                    key={index}
                                >
                                    <div className="w-[35px]">
                                        <Image
                                            src={feature.icon}
                                            alt="Gurantee"
                                            width={35}
                                            height={45}
                                            className="shrink-0"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div
                                         
                                            className="font-semibold font-serif md:text-2xl text-1xl text-center"
                                        >
                                            {feature.title}
                                        </div>
                                        <div
                                           
                                            className="bodyRegular  text-center"
                                        >
                                            {feature.description}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            </>

  )
}

export default Features
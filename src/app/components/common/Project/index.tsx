import Image from 'next/image'
import React from 'react'

function Project() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center pt-7 sm:pt-10">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-lg sm:text-xl md:text-[24px] leading-150 font-bold font-heading mb-4 sm:mb-7">
                      Wymondham Bridge Refurbishment
                    </h3>
                    <p className="text-sm sm:text-base leading-180 font-normal font-body undefined">
                      The 150 sqm bridge presented a significant challenge due
                      to its age and condition, demanding extensive attention
                      and meticulous work. We are pleased to report a successful
                      outcome and express our gratitude for the trust placed in
                      us to undertake this critical project. Our team undertook
                      a comprehensive process to restore the bridge, starting
                      with the complete removal of all rust. This was followed
                      by the application of a specialised epoxy primer, designed
                      to provide a strong and durable base. Finally, we applied
                      a high-quality paint to ensure a long-lasting and
                      resilient finish.The combination of these treatments not
                      only restored the bridges aesthetic appeal but also
                      significantly enhanced its structural integrity and
                      longevity. We are proud of the results and confident that
                      the bridge will continue to serve its purpose effectively
                      for many years to come.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 lg:ml-auto">
                    <Image
                      alt="Project"
                   
                      width={566}
                      height={369}
                
                    src='/images/services/railwayBg.png'
                      style={{ color: "transparent" , width:566 ,height:369}}
                    
                    />
                  </div>
                </div>
  )
}

export default Project
import React from 'react'
import Project from '../../common/Project'

function RecentProjects() {
  return (
    <section>
  <div className="resContainer">
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2 max-w-[360px]">
        <h6 className="text-base md:text-lg leading-150 font-normal font-heading text-primary">
          Recent Projects
        </h6>
      </div>
    </div>
 
         <Project/>       
         
  </div>
</section>

  )
}

export default RecentProjects

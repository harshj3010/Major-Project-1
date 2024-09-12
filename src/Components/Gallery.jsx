import React from 'react'
import Im1 from '../Assets/[fpdl.in]_esg-green-energy-sustainable-industry-concept-generative-ai_345906-2_normal.jpg'
import Im2 from '../Assets/[fpdl.in]_women-album-art-cover_927851-4246_normal.jpg'
import Im3 from '../Assets/[fpdl.in]_view-3d-woman_23-2150709978_normal.jpg'
import Im4 from '../Assets/bdeed31f-c7cc-4932-a123-3a856de2e15c.jpg'
import Im5 from '../Assets/[fpdl.in]_female-cleaning-worker-wearing-work-uniform-is-pictured-frontal-view_46383-11094_normal.jpg'

export default function Gallery() {
  return (
    <div className=' mt-12'>
      <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Im1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Im2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Im5} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Im4}alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={Im3} alt=""/>
        </div>
    </div>
      
    </div>
  )
}

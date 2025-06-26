import React from 'react'

function Sidebar() {
  return (
    <div className='glassscreen'>
      <search className='searchbar'>
        <input 
        type="text" 
        placeholder='Search your mate...' 
        className='flex-1 body-regular text-sky-blue-900 placeholder-grey-300 ' />
        <div className=' w-[24px] aspect-[1/1] cursor-pointer'>
          <span class="material-symbols-rounded">search</span>
        </div>
      </search>
      <section>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Sidebar

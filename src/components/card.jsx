 import React from 'react'

export default function Card({ image }) {

  return (
      //add a onhover style to the card to make it look like a hover effect
    <div className='max-w-screen-sm  w-96 m-2 max-h-fit rounded-lg overflow-hidden shadow-xl  transition ease-in-out delay-150 bg-slate-200 hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 '>
        <img 
        className='w-full rounded-lg'
         src={image.webformatURL} alt=""/>
        <div className='px-6 py-4'>
        <div className=' py-4 flex   justify-between'> 
        <div> <strong className='p-1'>
        User:
        </strong>{image.user}</div>
   {
       image.userImageURL && <img className='rounded-full  w-10 mr-2' src={image.userImageURL} alt=""/>
    
   }
</div>
            <div className='font-bold text-blue-800 text-xl mb-2'>
                
                </div>
                <ul>
                    <li>
                        <strong>Download:</strong>  {image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong> {image.likes}
                    </li>
                    <li>
                        <strong>Comment:</strong> {image.comments}
                    </li>
                    </ul>

                    </div>
 <div className='px-6 py-4'>
   {
//loop through the array of tags and display them
image.tags.split(',').map((tag) => (
    <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                    #{tag}
                </span>
))
   }
</div>
 {/* <span className='tag'>#photography</span>
    <span className='tag'>#ideas</span>
    <span className='tag'>vision</span> */}




        
    </div>
  )
}

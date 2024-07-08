import { Input } from 'postcss'
import React from 'react'

const Username = ({params}) => {
  return (
    <>
      <div className='cover w-full relative '>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1722729600&token-hash=uD8NWNHY4QogM8Eap1XAdek8mQQjgAm5opRSjBgVcA4%3D" alt="" />
        <div className='absolute  -bottom-7 right-[46%] border-2 border-white rounded-3xl'>
          <img className='rounded-3xl' width={90} height={150} src="https://i.etsystatic.com/37434135/r/il/80b0c7/4215982148/il_570xN.4215982148_bv2x.jpg" alt="" />
        </div>
      </div> 
      <div className='info flex justify-center items-center flex-col my-24 gap-2 mb-32'>
        <div className='font-bold text-lg'>
        @{params.username}
        </div>
        <div className='text-slate-400'>Creating Animated art for VTT's</div>
        <div className='text-slate-400'>12,008 members . 82 Posts . $15,820/release
 </div>
 <div className="payment flex gap-3 w-[80%] mt-11">
  <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
  <h2 className='text-2xl  my-5  text-center font-bold'>Supporters</h2>
     <ul className='mx-5 text-lg'><li className=' my-2 flex gap-2 items-center'>
      <img width={33} src="avatar.gif" alt="" />
      <span>Snehal donated <span className='font-bold '>$30</span> with a message "I support you bro. Lots of Love"</span></li>
      <li className=' my-2 flex gap-2 items-center'>
      <img width={33} src="avatar.gif" alt="" />
      <span>Snehal donated <span className='font-bold '>$30</span> with a message "I support you bro. Lots of Love"</span></li>
      <li className=' my-2 flex gap-2 items-center'>
      <img width={33} src="avatar.gif" alt="" />
      <span>Snehal donated <span className='font-bold '>$30</span> with a message "I support you bro. Lots of Love"</span></li>
     </ul>
  </div>
  <div className="makePayment w-1/2 bg-slate-900 rounded-lg  text-white p-10">
  <h2 className='text-2xl  my-5  text-center font-bold'>Make a Payment</h2>
  <div className='flex gap-2 flex-col'>
  <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'/>
  <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'/>
    <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'/>
    <button type="button" className="text-white bg-gradient-to-br from-purple-950 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
  </div>
  <div className='flex gap-2 mt-5'>
    <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
    <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
    <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
    </div>
  </div>
 </div>
</div>
    
    </>
  )
}

export default Username

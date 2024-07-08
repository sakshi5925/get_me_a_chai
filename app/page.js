import Image from "next/image";

export default function Home() {
  return (<>
         <div className="flex justify-center flex-col text-white items-center gap-4 h-[44vh] ">
          <div className=" justify-center items-center flex gap-2 font-bold text-5xl ">Buy Me A Chai <span><img src="/tea.gif" alt="" /></span></div>
           <p>A crowdfunding platform for creators. Get funded by your fans and followers.Start Now</p>
           <div className="mb-10">
           <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
           <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
           </div> 
           </div>
           <div className="bg-white h-1 opacity-10"></div>
            <div className=" text-white container mx-auto pb-32 pt-14">
              <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a chai</h2>
               <div className="flex gap-5 justify-around">
                <div className="item space-y-3 text-center flex flex-col items-center justify-center">
                  <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
                  <p className="font-bold">Fans want to help</p>
                  <p className="text-center">Your fans are available for you</p>
                </div>
                <div className="item space-y-3 text-center flex flex-col items-center justify-center">
                  <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
                  <p className="font-bold">Fans want to help</p>
                  <p className="text-center">Your fans are available for you</p>
                </div>
                <div className="item space-y-3 text-center flex flex-col items-center justify-center">
                  <img className=" bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
                  <p className="font-bold">Fans want to help</p>
                  <p className="text-center">Your fans are available for you</p>
                </div>
               </div>
            </div>
            <div className="bg-white h-1 opacity-10"></div>
            <div className=" text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SCLA80Jeh44?si=_PjtamAWVIpLJh7y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>
         </>
  );
}
 
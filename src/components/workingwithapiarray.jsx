import { useState } from "react";
import {dbDatas} from './dt'


// export const Workingwithapiarray =()=>{
// const [gProfileall, changeGprofileall] = useState(dbDatas)

//     return(
//         <>
//         <div className="flex  flex-col h-screen w-full justify-center items-center">
//             <div className="bg-blue-500 flex justify-center items-center flex-col">
//                 gProfileall.ma[]
//             {/* <p className="text-3xl font-bold text-red-500">{gUser.name}</p> */}
//             <img src={gProfileall[1].avatar_url} alt="" />
//             <p className="text-3xl font-bold text-red-500">{gProfileall[1].login}</p>
//             <button className=" bg-black text-white rounded-full w-[200px] h-[50px] flex justify-center items-center">
//             <a href={gProfileall[1].html_url}
//             rel="noreferrer"
//             target="_blank">visit my profile </a>
            
//             </button>
//         </div>
//         </div>
//         </>
//     )
// }
export const Workingwithapiarray =()=>{
    const [gProfileall, changeGprofileall] = useState(dbDatas)
    
        return(
            <>
            <div className="bg-white">
            <h1 className="text-3xl font-bold text-black text-center ">Working with Api</h1>
            </div>
            <div className="flex  flex-wrap w-full justify-center items-center gap-10 py-10 bg-white ">

                
                   {gProfileall.map((user) => {
                    return(
                    
                     <div key = {user.id} className="bg-white rounded-3xl" > 
                        <h1 className="text-xl text-center font-bold text-red-500"></h1>
                        <img src={user.avatar_url} alt="" className="w-[200px] h-[200px] rounded-3xl"/>
                        <p className="text-3xl font-bold text-red-500">{user.login}</p>
                        <button className=" bg-black text-white rounded-full w-[200px] h-[50px] flex justify-center items-center">
                        <a href={gProfileall[1].html_url}
                        rel="noreferrer"
                        target="_blank">visit my profile </a>
                    
                        </button>
                        </div>
                    )
                   })}
                
                  
            </div>
            </>   
        )
    }
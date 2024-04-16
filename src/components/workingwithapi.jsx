import { useState } from "react";
import {dbData} from './dt'


export const Workingwithapi =()=>{
const [gProfile, changeGprofile] = useState(dbData)

    return(
        <>
        <div className="flex  flex-col h-screen w-full justify-center items-center">
            <div className="bg-blue-500 flex justify-center items-center flex-col">
            {/* <p className="text-3xl font-bold text-red-500">{gUser.name}</p> */}
            <img src={gProfile.avatar_url} alt="" />
            <p className="text-3xl font-bold text-red-500">{gProfile.login}</p>
            <button className=" bg-black text-white rounded-full w-[200px] h-[50px] flex justify-center items-center">
            <a href={gProfile.url}
            rel="noreferrer"
            target="_blank">visit my profile </a>
            
            </button>
        </div>
        </div>
        </>
    )
}
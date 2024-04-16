// export const Art= [1,2,3,4,5,6,7,8,9,10]

// Art.map((item,ind)=>{
//     const somi = item ** 2
// console.log(somi)
// }
 


// )
const imgs = [
        "public/circle-img1.jpg",
        "public/circle-img2.jpg",
        "public/circle-img3.jpg",
        "public/circle-img4.jpg",
        "public/circle-img5.jpg",
    ]
    
export const Art =()=>{
    return(
        <>
        {
            imgs.map((item,index)=>{
                return <div className="h-[100px] w-[400px] flex flex-row"key={index} >
                <img src={item} alt="" />

            </div>

            })
        }
     
        
        </>
    )
    
}
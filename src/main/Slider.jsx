import React, { useEffect, useState } from 'react'

function Slider() {
    let collection =["https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P6-ShirtsTshirts-DNMXTS-Under299.jpg","https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P7-GoldDiamondJewellery-MalabarMelorra-Starting1999.jpg","https://assets.ajio.com/cms/AJIO/WEB/SK_1440x470.gif","https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P4-Shirtstshirts-DennislingoOrchidBlues-Flat70-1.jpg"]
    let [i,setI]=useState(0);
    let  [images,setImgages]=useState(collection[i]);
    useEffect(() => {   
      }, [images]);
    return (
        <div className="mt-4 w-full h-60 flex align-middle justify-center hover:cursor-pointer" >
            <i class="fa fa-angle-left flex mt-28 " aria-hidden="true" onClick={()=>{ 
                if(i>0)setI(i-1);
                else if(i<=0)
                    setI(3);
                setImgages(collection[i]);
                    console.log(i);
                }}></i> 
           <div id="card" className="w-11/12 h-60 bg-slate-600 ">
            <img className="w-full h-60 md:w-full sm:w-full"  src={images} alt="" />
           </div>
           <i class="fa fa-angle-right mt-28 hover:cursor-pointer" aria-hidden="true" onClick={()=>{ 
                if(i<3)setI(i+1);
                else if(i>=3)
                    setI(1);
                    setImgages(collection[i]);
                    console.log(i);
                }}></i>
        </div>
    )
}

export default Slider
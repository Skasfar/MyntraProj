import React, { useEffect, useState } from 'react'

function Slider() {
    let collection = ["https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P6-ShirtsTshirts-DNMXTS-Under299.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P7-GoldDiamondJewellery-MalabarMelorra-Starting1999.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/SK_1440x470.gif",
        "https://assets.ajio.com/cms/AJIO/WEB/08032023-UHP-D-Main-P4-Shirtstshirts-DennislingoOrchidBlues-Flat70-1.jpg"]
    let [i, setI] = useState(0);
    let decre = () => {
        if (i > 0) setI(i - 1);
        else if (i <= 0)
            setI(3);
    }
    let incre = () => {
        if (i < 3)
            setI(i + 1);
        else if (i >= 3)
            setI(1);
    }
    useEffect(() => {
        const interval = setInterval(() => { incre() ; }, 3000);
        return () => clearInterval(interval);
    }, [i]);


    return (
        <div className="mt-4 w-full h-2/6 flex align-middle justify-center hover:cursor-pointer" >
            <i className="fa fa-angle-left flex mt-28 w-5 h-6" aria-hidden="true" onClick={() => { decre() }}></i>
            <div id="card" className="w-11/12 h-full bg-slate-600 ">
                <img className="w-full h-full md:w-full sm:w-full" src={collection[i]} alt="" />
            </div>
            <i className="fa fa-angle-right mt-28 hover:cursor-pointer w-5 h-6" aria-hidden="true" onClick={() => { incre() }}></i>
        </div>
    )
}

export default Slider
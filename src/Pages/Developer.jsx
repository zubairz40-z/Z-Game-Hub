import React, { useEffect, useMemo } from "react";


const Developers =()=>{

    useEffect(()=>{
        document.title= "Gamehub | Developers"

    },[])

    return(

        <div className="max-w-6xl mx-auto p-10 bg-blue-200">
            <h1 className="text-3xl font-bold mb-4">Featured Developers</h1>
            <p className="text-gray-600">Meet the Creative Teams behind the top AAA titles.</p>

            <div className="space-y-4">
                 {[
  "Insomniac Games — Marvel's Spider-Man Remastered",
  "Naughty Dog — The Last of Us™ Part I",
  "Santa Monica Studio — God of War",
  "CD PROJEKT RED — Cyberpunk 2077",
  "KRAFTON, Inc. — PUBG: BATTLEGROUNDS",
  "Rockstar Games — Red Dead Redemption 2"
].map((name)=>(
          <div key={name} className="p-5  border bg-pink-200 hover:shadow transitionspace-y-">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm opacity-70 mt-2">Listed in the most popular AAA games Category.</p>
          </div>
        ))}
            </div>
        </div>
    )

}

export default Developers;
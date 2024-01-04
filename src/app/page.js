"use client"

import GetFetchData from "@/hooks/fetchData"

export default function Home() {

  return (
    <>
    <img className="h-screen w-screen" src="./images/night.png" alt="Nightsky Background" />
    <img className="absolute" src="./images/house.png" alt="House Middleground" />
    <img className="" src="./images/navbar.png" alt="" />
    <img className="" src="./images/substract.png" alt="" />
    </>
  )
  // const { response, error, loading } = GetFetchData("coord/lat")

  // if(error) {
  //   return loading ? <p>Loading...</p> : <p>Hov, noget gik galt. Prøv igen senere</p>
  // } else {
  //   return loading ? <p>Loading...</p> : (
  //     <>
  //       <section className="Magic">
  //         <p>{response?.coord.lat}</p>
  //       </section>
  //     </>
  //   )
  // }
}

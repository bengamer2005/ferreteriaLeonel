import { useEffect, useState } from "react"
import { Link } from "react-router"
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet"
import { useQuery } from "@tanstack/react-query"
// hooks
import { useSucursalPage } from "../hooks/useSucursalHook"
// componentes
import Layout from "../components/layout"
import LeonelLoader from "../components/loader"
// img
import FerreteriaImgDir from "../img/FerreteriaImgDir.png"

const SucursalPage = () => {
    // sacamos la info del hook
    const { ferreteriaInfo, ferreteriaTel } = useSucursalPage()

    if(!ferreteriaInfo.length ) return <p>Cargando ...</p>
    if(!ferreteriaTel.length ) return <p>Cargando ...</p>

    // if(!ferreteriaTel.length ) {
    //     return (
    //         <Layout>
    //             <LeonelLoader/>
    //         </Layout>
    //     )
    // }

    // coords de la ferreteria
    const coords = [ferreteriaInfo[0].lat, ferreteriaInfo[0].lon]
    const googleMaps = ferreteriaInfo[0].dirUrl

    return (
        <>
            <Layout>
                {/* mapa */}
                <div className="relative z-10 p-4 lg:p-10 sm:p-5">
                    <MapContainer center={coords} zoom={13} scrollWheelZoom={false} className="h-52 md:h-72 lg:h-80 w-full">
                        <TileLayer 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={coords}>
                            <Popup>
                                {ferreteriaInfo[0].nombre} <br /> <br />
                                Ver direccion en <a href={googleMaps} target="_blank">Google Maps</a>
                            </Popup>
                        </Marker>
                    </MapContainer>

                    {/* direccion */}
                    <div className="mt-4 sm:mt-5 lg:mt-10 bg-gray-100 rounded-lg flex flex-col md:flex-row items-stretch">

                        <img className="hidden md:block w-2/5 h-64 object-cover rounded" src={FerreteriaImgDir} alt="FerreteriaMaterialesLeonelDir" />

                        {/* informacion */}
                        <div className="p-5 flex flex-col items-center justify-center text-center flex-1">
                            <h2 className="text-orange-700 text-md lg:text-2xl font-semibold">{ferreteriaInfo[0].nombre}</h2>

                            <hr className="my-4 w-[95%] border-t-2 border-gray-300"/>

                            <h4 className="mb-4">
                                <span className="text-orange-500 text-md lg:text-lg font-semibold">Dirección: </span> <br/> 
                                <span className="text-gray-500 text-sm">{ferreteriaInfo[0].direccion}</span>
                            </h4>

                            <div>
                                <span className="text-orange-500 text-md lg:text-lg font-semibold">Telefonos:</span>
                                {ferreteriaTel.map((tel, index) => (
                                    tel.nombre === "fijo" ? (
                                        <div className="flex items-center gap-2 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                            </svg>
                                            <p className="text-gray-500 text-sm" key={index}>{tel.telefono}</p>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                            </svg>
                                            <p className="text-gray-500 text-sm" key={index}>{tel.telefono}</p>
                                        </div>
                                    )
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default SucursalPage
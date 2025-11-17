import pruebaImg from "../img/sin-foto.png"

const ProductCard = ({ nombre, descripcion, precio }) => {
    return (
        <>
            <div className="w-72 h-auto bg-[#f9f9f9] rounded-[5px] shadow-[0_1px_4px_rgba(0,0,0,0.1),0_2px_3px_rgba(0,0,0,0.1)] m-5 px-2.5">
                {/* imagen de producto */}
                <div className="bg-gray-200 ">
                    <img src={pruebaImg} alt="producto" className="hidden md:block h-64 object-cover rounded md:mt-2.5"/>
                </div>

                {/* nombre */}
                <div className="w-4/5">
                    {/* titulo */}
                    <div className="inline-flex flex-nowrap items-baseline w-full">
                        <span className="w-[95%] text-base font-semibold text-[#333] pt-4 pl-2.5">
                            {nombre}
                        </span>
                    </div>
                </div>

                {/* descripcion */}
                <div className="text-sm text-gray-500 pt-2.5 pl-2.5 cursor-pointer hover:underline">
                    {descripcion}
                </div>

                {/* precio */}
                <div className="text-sm font-semibol text-gray-800 pb-2.5 pl-2.5">
                    $ {precio}
                </div>

                {/* agregar producto */}
                <button className="text-[0.7em] font-semibold py-[5px] px-2.5 my-[5px] mx-2.5 mb-5 rounded-[15px] text-orange-300 border border-orange-300 bg-orange-50 shadow-none uppercase cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-white hover:bg-orange-400 active:text-white active:bg-orange-400 focus:text-white focus:bg-[#009688]">
                    Agregar
                </button>
            </div>
        </>
    )
}

export default ProductCard
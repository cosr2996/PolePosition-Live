
export const Footer = () => {
  return (
    <div className="bg-[#1C1C1C] flex text-white p-10 justify-around items-center font-bold ">

        <div className="flex flex-col items-center ">
            <p>Sugerencias:</p>
            <p>cosr2000@gmail.com</p>
        </div>
        
        <div className="">
            <img src="logo-nav-blanco.png" alt="logo" className="h-20"/>
            
        </div>

        <div className="flex gap-10">
            <p><a href="">Github</a></p>
            <p><a href="">Coffee</a></p>
        </div>

    </div>
  )
}

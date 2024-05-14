import Navbar from "@/components/Navbar"


const Mainlayout = ({children}: {children: React.ReactNode}) => {
    return (
      <div>
         <div className="relative w-full flex items-center justify-center ">
          <Navbar/>
          </div>
          {children}
      </div>
    )
  }
  
  export default Mainlayout
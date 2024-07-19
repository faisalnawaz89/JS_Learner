import Catalog from "./component/Catalog"
import { Data } from "./component/Data"
import Header from "./component/Header"
import Hero from "./component/Hero"
import PlayButton from "./component/PlayButton"

export default function App(){

  return(
    <>
    {/* <Header/> */}
    <div className="container mx-auto py-4">
      {/* <Hero/> */}
      <div className="gap-8 columns-6 justify-between">
        {Data.map((value, index)=>(
          <Catalog 
          key={index}
          image={value.image}
          title={value.title}
          views={value.views}
          time={value.time}/>
        ))}
      </div>

      <PlayButton onClick={()=> alert('Played')} name="Play"></PlayButton>
      <PlayButton onClick={()=> prompt('Please Agree')} name="Prompt"></PlayButton>
      <PlayButton onClick={()=> window.confirm('Do you want to logout!')} name="Confirm"></PlayButton>
    </div>
    </>
  )
}
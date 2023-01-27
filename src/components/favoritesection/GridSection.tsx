import GridCard from "../common/GridCard"
import { CARDDATA } from "../constant/data"


const GridSection = () => {
  return (
    <div className="grid_section">
        {CARDDATA.map((card)=><GridCard key={card.alt} card={card}/>)}
      
    </div>
  )
}

export default GridSection
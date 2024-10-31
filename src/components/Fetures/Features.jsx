
import { GoDot } from "react-icons/go";


const Features = ({feature}) => {
  return (
    
    <div className="flex items-center gap-5 py-1">
        <GoDot  className="text-red-500"/>
        <p>{feature}</p>
    </div>
  )
}

export default Features
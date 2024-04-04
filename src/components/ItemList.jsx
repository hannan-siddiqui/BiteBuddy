import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"

const ItemList = ()=>{


    const dispatch = useDispatch()

    const handleItem = ()=>{
        // dispatch action
        const item = "food-item"
        dispatch(addItem(item))

    };

    return (
        
        <div className="my-6 rounded-lg p-10 bg-gray-200">
            <h3 className="py-4">item 1</h3>
            <button
            
            onClick={()=>handleItem()}

            className="bg-red-500 rounded-lg p-2">add +</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum debitis aspernatur eos harum voluptatum ullam quis inventore! Magni esse suscipit numquam facilis, unde dolores? Aut, hic? Eveniet labore vitae perspiciatis?</p>

           
        
        </div>
    )
}

export default ItemList;
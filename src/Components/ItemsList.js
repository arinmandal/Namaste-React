import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constant"
import { addItems } from "../ReduxStore/CartSlice";
export const Itemlist = ({ items }) => {
  // console.log(items)

  const dispatch = useDispatch();

  const handleaddItems = (items) => {
    dispatch(addItems(items));
  }
  return (
    <div className="">
      {
        items.map((items) => (
          <div data-testid="foodItems" key={items.card.info.id} className="my-1 border-b-2 ">
            <div className="py-1 px-4 flex justify-between items-center">
              <div className="content">
                <h3 className="font-bold">{items.card.info.name}</h3>
                <span className="text-sm">₹{items.card.info.price / 100}</span>
                <p className="text-slate-400 font-sans text-sm max-w-md">{items.card.info.description}</p>
              </div>
              <div className="img w-36 rounded-sm overflow-hidden relative">
              <div className="button absolute top-16 left-10">
                  <button className="px-2 py-1 w-20 bg-white text-green-400 rounded-md bg-slate-400 text-sm"
                  onClick={() => handleaddItems(items)}>ADD +</button>
                </div>
                <img src={CDN_URL + items.card.info.imageId} alt="imageId" />
               
              </div>
            </div>
          
          </div>
       ))
      }
    </div>
  )
}

import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  // console.log("Item: ", items);

  return (
    <div className="mb-20 ">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400  mb-10 border-b-2 text-left  flex items-center"
        >
          <div className="py-2 w-9/12">
            <span className="text-2xl font-bold ">{item.card.info.name}</span>
            <span className="font-bold text-2xl">
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div>
              <p className="text-xl font-light my-2 break-words">
                {item.card.info.description}
              </p>
            </div>
          </div>

          <div className="w-3/12 p-5 ">
            <div className="relative ">
              <button className="bg-black absolute text-white rounded-lg top-2 left-1/2 -translate-x-1/2 px-2 py-1 shadow-lg cursor-pointer">
                Add +
              </button>
              <img
                className="w-[200px] rounded-2xl "
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name || "Item Image"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

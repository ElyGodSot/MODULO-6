import { useItemsContext } from "../../Hook/useItemsContext"

const DetailCardComp = () => {

    const {selectedItem}= useItemsContext
  return (
    <>
    {
      selectedItem.product_name
        ? (
          <div>
       
    <h4>{selectedItem.product_name}</h4>
    <h5>{selectedItem.description}</h5>
    <h6>{selectedItem.price}</h6>
    </div>
          )
        : <h1> selecciona un item...</h1>
    }
  </>
  )
}


export default DetailCardComp

//<img src={selectedItem.imgage} alt={selectedItem.product_name} />
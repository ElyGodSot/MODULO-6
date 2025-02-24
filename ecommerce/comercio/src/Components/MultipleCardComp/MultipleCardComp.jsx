import { useItemsContext } from "../../Hook/useItemsContext"

const MultipleCardComp = () => {
    const { list, loading, setSelectedItem, search } = useItemsContext()


    const filteredItemsList = list.filter((item) => {
        return item.product_name.toLowerCase().includes(search.toLowerCase())
      })

  return (
    <section className='row-container'>
      {
            loading
              ? <h2>Cargando...</h2>
              : filteredItemsList.map((item) => (
                <article
                  key={item.id}
                  className='row-item'
                  onClick={() => {
                    setSelectedItem(item)
                  }}
                >
                  <h3>{item.product_name}</h3>
                  <h3>{item.description}</h3>
                </article>
              ))
        }
    </section>
)
}


export default MultipleCardComp
import { createContext, useState, useEffect } from "react";
import items from "../Utils/Api.json"

const ItemsContext = createContext ();

function ItemsProvider ({children}){
    const [list, setList]=useState([]);
    const [loading, setLoading] = useState(true); 
    const [selectedItem, setSelectedItem] = useState({}); 
    const [search, setSearch] = useState('')
    
    
    useEffect(() => {
        setTimeout(() => {
          setList(items)
          setLoading(false) // cambia a false xk ya están cargando las canciones
        }, 2000)
      }, [])


      const data = {
        list,
        loading,
        selectedItem,
        setSelectedItem,
        search,
        setSearch
      }
      
    // el proveedor (provider) es un componente que envuelve a otros componentes
    // y le pasa un objeto con los datos que queremos compartir

    return (
        // return de un componente
    <ItemsContext.Provider value={data}>
      {children}
    </ItemsContext.Provider>
    )
}

export { ItemsContext, ItemsProvider }
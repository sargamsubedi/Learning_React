import React, { useCallback, useMemo, useState } from "react"

    const List = React.memo(({ value , onDelete}) => {
        return (
            <>
                <p>{value}</p>
                <button onClick={() => onDelete(value)}>Delete</button>
            </>
        )
    })


function Optimization() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {
        if (!search.trim()) return items;
        return items.filter((item) => item.toLowerCase().includes(search.toLowerCase()))//eg:  for Milk search and milk in list 
    }, [search, items]);
    const handleAdd = () => {
        if (!newItem.trim()) return
        setItems(prev => ([...prev, newItem]))
        setNewItem("");

    }

    const handleDelete = useCallback((id) => {  
        setItems(prev=>prev.filter((value) => value !== id) );
    }, [])




    return (
        <>
            <input type="text" placeholder="Add new item" value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
            <button onClick={handleAdd}>Add item</button>
            <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />


            <div>
                <p>The items are: </p>
                {

                    filteredData && filteredData.map((data) => (
                        <List key={data} value={data} onDelete={handleDelete} />
                    ))
                }
            </div>
        </>
    )

}

export default Optimization;
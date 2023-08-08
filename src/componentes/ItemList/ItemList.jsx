import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({items}) => {
    return(
        <div className="body">
            <h2 style={{color: "gold", fontSize: "50px", textAlign: "center" }}>Procesadores</h2>
            <br />
            <br />


            <div className="row">
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod} /> )

             }
            </div>
        </div>
    )
}

export default ItemList
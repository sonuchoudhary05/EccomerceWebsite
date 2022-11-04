import AddToCardItem from "../assets/icons/add_cart.svg"
const ListItem = () =>{
    return(
        <div className="item-card">
            <img src = "assets/placeholder.png" alt =" Some Title" className= {"img-fluid"}></img>
            <div className="item-card__information">
                <div className= {"pricing"}>
                    <span>340</span>
                    <small>
                        <strike>450</strike>
                    </small>
                </div>
                <div className="title">
                    <h3>Title of the Items</h3>
                </div>
            </div>
            <button className="cart-add">
                <span>Add to Card</span>
                <img src = {AddToCardItem} alt="card item"/>
            </button>
        </div>
    )
}

export default ListItem;
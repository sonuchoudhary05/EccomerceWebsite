import AddToCardItem from "../../assets/icons/add_cart.svg";
const ListItem = ({data}) =>{
    return(
        <div className="item-card">
            <img src = {`/assets/${data.thumbnail}`} alt = {data.title} className= {"img-fluid"}></img>
            <div className="item-card__information">
                <div className= {"pricing"}>
                    <span>{data.discountedPrice}</span>
                    <small>
                        <strike>{data.price}</strike>
                    </small>
                </div>
                <div className="title">
                    <h3>{data.title}</h3>
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
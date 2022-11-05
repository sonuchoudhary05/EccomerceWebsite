import ListItem from "../ListItems/ListItem";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "../UI/Loader";
const Products = ()  => {
    const [items,setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        async function fetchAsyncData(){
            try{
                const response = await axios.get(`https://ecommerce-2022-d40f1-default-rtdb.firebaseio.com/items.json`);
                const data = response.data;
                const transformData = data.map((item,index) => {
                    return {
                        ...item,
                        id : index
                    }
                })
            //console.log(transformData);
                //setLoader(false);
                setItems(transformData);
            }
            catch(err){
                //setLoader(false);
                console.log(err);
            }
            finally{
                setLoader(false);
            }
            
        }
        fetchAsyncData();
    },[])
    return (
    <>
        <div className = {"product-list"}>
           <div className = {"product-list--wrapper"}>
                {items.map(item => {
                    return (<ListItem key = {item.id} data = {item} />)
                })}
            </div>
        </div>
        {loader && <Loader />}
    </>
    )
}
export default Products;
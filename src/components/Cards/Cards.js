import Card from './Card/Card';
import { Products as data } from '../../containers/Catalogue/Products';


const Cards = (props) => {
    const cards = Object.keys(data).map((product, key) => {
        // console.log(key)
        // console.log(product)
        // console.log(data[product])
        return <Card key={key}
            addMeal={props.addMeal}
            removeMeal={props.removeMeal}
            product={data[product]}
            cart={props.cart} />
    })
    return (
        <>
            {cards}
        </>
    )
}

export default Cards;
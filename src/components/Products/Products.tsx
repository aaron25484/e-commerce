import { Fragment, FC, useState } from "react";

type ProductsProps = {
    // image: string;
    artist: string;
    title: string;
    price: number;
    counter?: number

}

export const Products: FC<ProductsProps> = ({ artist, title, price}) => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = () => {
        setCounter((prevState) => prevState + 1);
    }

    return(
        <Fragment>
            <img src="" alt="" />
            <h5 className='text-red-700 text-3xl'>{artist}</h5>
            <h4>{title}</h4>
            <h5>{price}</h5>
            <button onClick={handleIncrease}>+</button>
            <p>{counter}</p>
        </Fragment>
    );

};
import Cart from "@/components/pages/Cart/Cart";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import api from "../api";

const Index = ({categories}) => {
    const cart = useContext(CartContext)
    return  ( <Cart categories={categories} cart={cart} />
    )
}

export default Index;

export async function getServerSideProps(ctx) {
 
    const [categories] = await Promise.all([
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            categories: categories.data.data
        }
    }
}
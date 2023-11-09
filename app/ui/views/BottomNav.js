import React, { useState } from 'react';
import {BottomNavigation} from 'react-native-paper';
import ProductView from './ProductView';
import CartView from './CartView';




export default function BottomNav(props){
    
    const [index, setIndex] = useState(0);


    const [routes] = React.useState([
        {
            key : 'products',
            title: 'Produtos',
            component : ProductView,
            focusedIcon: "hamburger"
        },
        {
            key : 'cart',
            title: 'Carinho',
            component : CartView,
            focusedIcon : "cart-variant"
        }
    ]);

    function renderScene({route, jumpTo}){
        switch (route.key) {
            case 'products':
                return <ProductView jumpTo={jumpTo} />;
            case 'cart':
                return <CartView  jumpTo={jumpTo} />;  
        }
    }

    return(
        <BottomNavigation 
        navigationState={{
            index,
            routes
        }}        
        renderScene={renderScene}
        onIndexChange={setIndex}
        />
    )
}
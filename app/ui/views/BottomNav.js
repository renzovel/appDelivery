import React, { useState, useContext } from 'react';
import {BottomNavigation} from 'react-native-paper';
import ProductView from './ProductView';
import CartView from './CartView';
import {CartContext} from '../providers/CartProvider'
import Icon from 'react-native-vector-icons/FontAwesome5';




export default function BottomNav(props){

    const [{products}] = useContext(CartContext);
    
    const [index, setIndex] = useState(0);


    const [routes] = React.useState([
        {
            key : 'products',
            title: 'Produtos',
            component : ProductView,
            focusedIcon: ({size})=> <Icon name="hamburger" size={size} color='#ff4081' />
        },
        {
            key : 'cart',
            title: 'Carinho',
            component : CartView,
            focusedIcon : ({size})=>  <Icon name="shopping-cart" size={size} color='#ff4081' />
        }
    ]);

    function renderScene({route, jumpTo}){
        
        if (route.key !== routes[index].key) {
            return null;
        }

        const NewComponent = route.component;
        return <NewComponent jumpTo = {jumpTo} />;
    }

    function handleBadge({route}){
        if (route.key === 'cart' && products.length > 0 ) {
            return products.length;
        }
        return false;
    }

    return(
        <BottomNavigation 
        navigationState={{
            index,
            routes
        }}        
        renderScene={renderScene}
        onIndexChange={setIndex}
        getBadge={handleBadge}
        />
    )
}
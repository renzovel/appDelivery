import React, {useContext,useState} from 'react';
import {Text, SafeAreaView, ScrollView} from 'react-native';
import {Appbar, Button, IconButton, List, Snackbar} from 'react-native-paper';
import { CartContext } from '../providers/CartProvider';
import {NumberFormat} from '../../data/services/Utils';
import {cartRemoveProduct, cartClearProduct} from "../../data/actions/CardAction";
import {Api} from "../../data/services/Api";

export default function CartView(){
    const [messageVisible, setMessageVisible] = useState(false);
    const [{products}, cartDispatch] = useContext(CartContext);
    const getTotal=()=>{
       const valor=products
       .map(({productSelect}, index)=>productSelect.price)
       .reduce((previous,current)=>previous+current, 0);
       return NumberFormat.currency(valor);
    }
    const removeItemCart = (item)=>{
        cartDispatch(cartRemoveProduct(item));
    }
    const finish = () =>{
        Api.post("pedidos", {pedido:products});
        cartDispatch(cartClearProduct());
        setMessageVisible(true);
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <Appbar.Header>
                <Appbar.Content title="Carrinho" />
            </Appbar.Header>
            <ScrollView> 
                <List.Section>
                    {
                        products.map((item, index)=>(
                            <List.Item
                                key={index}
                                title={item.productSelect.name} 
                                description={NumberFormat.currency(item.productSelect.price)}
                                right={()=> <IconButton
                                    onPress={()=>removeItemCart(item)}
                                    icon={"delete-forever-outline"}    
                                />}
                            />
                        ))
                    }
                    {products.length !==0 && <Button 
                    mode='contained' 
                    buttonColor='red' 
                    textColor='#fff' 
                    onPress={()=>finish()}>Finalizar Compra ({getTotal()})</Button>}
                </List.Section>
            </ScrollView>
            <Snackbar
                visible={messageVisible}
                onDismiss={()=>setMessageVisible(false)}
                duration={3000}
            >
                Seu pedido foi enviado....!
            </Snackbar>
        </SafeAreaView>
    )
}
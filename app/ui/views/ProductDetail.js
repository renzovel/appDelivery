import React, {useContext, useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { List, Checkbox, TextInput, Button } from 'react-native-paper'
import {ProductContext} from '../providers/ProductProvider'
import {CartContext} from '../providers/CartProvider'
import {selProduct} from '../../data/actions/ProductAction'
import {cartAddProduct} from '../../data/actions/CardAction'


const Obs = styled(TextInput)`
    margin:5px;
    border:1px solid #eee;
    border-radius:5px;
`;

const Add = styled(Button)`
    border-radius:5px;
`;

export default function ProductDetail(props){
    const [{productSelect}, productDispatch]= useContext(ProductContext);
    const [abc, cartDispatch] = useContext(CartContext);

    const [options, setOptions] = useState([]);
    const [obs,setObs] = useState("");

    const isSelect=(option)=>{
        return options.includes(option);
    }

    const toggleOption = (option) =>{
        if (isSelect(option)) {
            const newSelection = options.filter(item => item !== option);
            setOptions(newSelection);
        } else {
            setOptions([...options, option]);
        }
    }

    const addToCart = () => {
        cartDispatch(cartAddProduct({
            productSelect,
            obs,
            options
        }));
        back();
    }

    const back = ()=>{
        productDispatch(selProduct(null));
    }

    return(
    <ScrollView>
        <List.Section>
            <List.Subheader>Opções</List.Subheader>
            {
                productSelect.options.map((option,index)=>(
                    <List.Item 
                        key={index}
                        title={option}
                        right={(props) => (
                            <Checkbox
                            status={isSelect(option)?'checked':'unchecked'}
                            onPress={() => toggleOption(option)}
                            color='#ff4081'
                            uncheckedColor='#ff4081'
                            />
                        )}            
                    />
                ))
            }
            <Obs
                label='Observacão...'
                mode='outline'
                multiline={true}
                value={obs}
                onChangeText={setObs}
            />
        </List.Section>
        <Add 
        mode='contained' 
        buttonColor='red'
        textColor='#fff'
        onPress={()=>addToCart()}
        >Adicionar ao Carrinho</Add>
    </ScrollView>
    )
}
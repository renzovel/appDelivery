import React, {useEffect, useContext} from "react";
import styled from 'styled-components/native';
import {Appbar, Button, Card, Paragraph} from 'react-native-paper';
import { ScrollView } from "react-native";
import {ProductContext} from "../providers/ProductProvider" 
import {Api} from "../../data/services/Api"
import {resProducts, selProduct} from "../../data/actions/ProductAction"
import {NumberFormat} from '../../data/services/Utils'
import ProductDetail from './ProductDetail';

const ViewContainer = styled.SafeAreaView`
    flex:1;
`;

const ProductCard = styled(Card)`
    background-color:#eee;
    border:none;
    border-shadow:none;
    border-radius:0px;
`;


const ProductButton = styled(Button)`
    background-color:green;
    border-radius:5px;
    margin-right:10px;
`;

const ProductButtonSelect = (props) => <ProductButton onPress={()=>props.selectProduct(props.product)}>Selecionar</ProductButton>

export default function ProductView(props){

    const [productState, productDispatch] = useContext(ProductContext);

    useEffect(() => {
        Api.get("products")
        .then(productsList=>productDispatch(resProducts(productsList)))
    }, []);

    const selectProduct = (product) => {
        productDispatch(selProduct(product));
    } 


    if(productState.productSelect){
        const {name, picture} = productState.productSelect;
        return(
        <ViewContainer>
            <Appbar.Header>
                <Appbar.BackAction onPress={()=>selectProduct(null)} />
                <Appbar.Content title={name} />
            </Appbar.Header>
            <ScrollView>
                <Card>
                    <Card.Cover source={{uri:picture}} />
                </Card>
                <ProductDetail />
           </ScrollView>
        </ViewContainer>
        )
    }


    return (
        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={"Produtos"} />
            </Appbar.Header>
            <ScrollView>
            {
                productState.productList.map(product=>(
                    <ProductCard key={product.id}>
                        <Card.Cover source={{uri:product.picture}} />
                        <Card.Title 
                            title={product.name}
                            right={(props)=><ProductButtonSelect selectProduct={selectProduct} product={product} />}
                        />
                        <Card.Content>
                            <Paragraph>{NumberFormat.currency(product.price)}</Paragraph>
                        </Card.Content>
                    </ProductCard>
                ))
            }
            </ScrollView>
        </ViewContainer>
    )
}
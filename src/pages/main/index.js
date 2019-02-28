import React, {Component} from 'react';
import api from "../../services/api";
import  "./styles.css";

export default class Main extends Component{
state = {

    products:[],

};

    //componente de ciclo de vida de uma aplicação
    //metódo executada assim que o componente for mostrado em tela
  componentDidMount(){

    this.loadProducts();

  } 
   loadProducts = async ()=>{

    const response = await api.get('/products');

    this.setState({products: response.data.docs});
   };
   
   
    render(){
        const {products} = this.state;
    return(

        <div className="product-list">
        {products.map(product=>(
            <article  key={product._id}>>
            <strong> {product.title}</strong>
            <p>{product.description}</p>
            
            
            <a href="">Acessar</a>
            </article>
        ))}
        
        </div>

    )

    }
}


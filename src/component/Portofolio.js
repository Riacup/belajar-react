import React, {Component} from 'react';
import CardProduct from "./CardProduct";

class Portofolio extends Component {
    constructor(){
        super();
        this.state = {
            products : []
        };
    }

    componentDidMount() {
        fetch('http://my-json-server.typicode.com/techtona/product_api/product')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    products : data
                })
            })
            .catch((m) => {
                console.log("Error : "+m);
            })
    }

    render() {
        return (
            <div>
                <h2>Halaman Portofolio</h2>
                <br/>
                {this.state.products.map((data) => {
                    return(
                        <CardProduct title={data.nama} price={data.harga}/>
                    )
                })}
            </div>
        );
    }
}

export default Portofolio;

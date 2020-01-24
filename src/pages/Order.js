import React, { Component } from 'react';
import axios from 'axios';
import {Spinner} from 'reactstrap';
import '../Order.css'

class Order extends Component {
    componentDidMount(){
        this.getListOrder()
    }

    state = {
        dataProduct: [],
        isLoading: false,
        cart: []
    }

    getListOrder = () => {
        this.setState({isLoading: true})
        axios.get('http://127.0.0.1:3001/product')
        .then(res => {
            if (res.status === 200){
                this.setState({dataProduct: res.data.data})
            }
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setTimeout(() => {
                this.setState({ isLoading: false })
            }, 3000)
        })
    }

    onSelectProduct = (event, item) => {
        event.preventDefault()
        console.log(item)
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    render() {
        return (
            this.state.isLoading ? (
                <Spinner color="primary" />
            ):(
                <div style={styles.row} className="row">
                    <div>
                    {this.state.dataProduct.map((item, index) => {
                    return(
                        <a key={item.id} onClick={(event) => this.onSelectProduct(event, item)} href="javascript:void(0)">
                            <div>
                                <img alt="" src="https://s0.bukalapak.com/img/05887929741/original/Dummy_IPhone_X_Premuim_Quality_Hitam.jpg" height={50} width={50} />
                                <p>{item.name}</p>
                            </div>
                        </a>
                    )
                })}
                    </div>
                    <div>
                    {this.state.cart.map((item, index) => {
                    return(
                        <a key={item.id} onClick={(event) => this.onSelectProduct(event, item)} href="javascript:void(0)">
                            <div>
                                <img alt="" src="https://s0.bukalapak.com/img/05887929741/original/Dummy_IPhone_X_Premuim_Quality_Hitam.jpg" height={50} width={50} />
                                <p>{item.name}</p>
                            </div>
                        </a>
                    )
                })}
                    </div>
                </div>
            )
        )
    }
}

export default Order;

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
}
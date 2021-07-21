import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "id":1,
                "title":"DEVELOPER PACKAGE",
                "detail":"We’ve partnered with NVIDIA to offer a built around the Jetson AGX Xavier: a fast, efficient computing device, ideal for robotics development. The JETSON developer package takes advantage of NVIDIA’s standard hardware interfaces and graphics processing capabilities. Built around a powerful and compact GPU, the Jetson is the preferred computing platform for VSLAM, 3D imaging and machine learning applications.",
                "price":"19,999",
                "img":"trick.png"
            },
            {
                "id":2,
                "title":"EXPLORER PACKAGE",
                "detail":"The Lander5 Explorer Package is designed for basic autonomous operation in both indoor and outdoor environments. Applications range from GPS waypoint navigation with laser-based collision avoidance, to indoor mapping and path planning. A powerful Mini-ITX computer system comes pre-installed with Linux and ROS; all component ROS drivers are installed and pre-configured.",
                "price":"24,999",
                "img":"tricka.jpg"  
            },
            {
                "id":3,
                "title":"VISION PACKAGE",
                "detail":"The Lander5 Vision Package includes two front-facing FLIR Blackfly cameras for stereo vision, an upgraded GPU graphics card and a high performance computer. This package comes with a pre-installed CUDA toolkit, and is fully supported with ROS, RViz (visualization), and Gazebo (simulator).",
                "price":"29,999",
                "img":"trickab.jpg"
            }
            
        ],
        cart: []
       
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    render() {
        const {products, cart} = this.state;
        const {addCart} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
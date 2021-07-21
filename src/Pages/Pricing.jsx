
import NavbarTwo from '../Components/NavbarTwo';
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Pricing extends Component {

    constructor (props) {
        super(props);
        this.state = {
            Data: [
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
            ]
        }
    }
    clickMe ()
    {
        return (
        this.state.Data.map((item, index) => {
            <div className="row" key={item.id}>
                    <div className="col-6">
                        <div className="text-div">
                            <h4>{item.title}</h4>
                            <p>{item.detail}</p>
                            <div className="row">
                                <div className="col-2">
                                <h3>{item.price}</h3> 
                                </div>
                                <div className="col">
                                <span className="span">EGY</span>
                                </div>
                            </div>
                            <Button className="ibtn">Purchase</Button>
                        </div>
                    </div> 
                    <div className="col-5">
                        <img src={item.src}  width="450" height="300"/>
                    </div>   
                </div>
            
        })
        )
    }
    
    
    render (){
        return (
            
            <>
            <div>
                <NavbarTwo />
            </div>
            <div className="container-pricing">
                <div className="text">
                    <h2>Pricing</h2>
                    <p>The preconfigured packages offer everything needed to get started quickly.</p>
                   <p> Don’t see what you’re looking for? Visit our  <span>sensors and components store</span> or <span>contact us.</span></p>
                </div>
                
                <div className="btns">
                                <ul>
                                <Button className="btn" onClick={this.clickMe.bind(this)}>Developer Package</Button>
                                <Button className="btn" onClick={this.clickMe.bind(this)}>Explorer Package</Button>
                                <Button className="btn" onClick={this.clickMe.bind(this)}>Vision Package</Button>
                                </ul>               
                        </div>
                

                    
                  
            </div> 
            </>
        )
        }
    }



export default Pricing;
 

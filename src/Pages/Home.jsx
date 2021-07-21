import React from 'react'
import Car from '../images/503.png';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Components/Navbar';

function Home() {
    return (
        <>
        <Navbar />
        <div id='main'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <div className="text">
                        <h4>LUNAR ROBOTICS</h4>
                        <h1> BOLDLY GO WHERE NO ROBOT HAS GONE BEFORE </h1>
                        <p className='details'>We build the world’s best robot development platforms. Developing autonomous robots has never been easier.</p>
                        <a className="btn" href="#" data-role="button" data-inline="true">Explore our robots</a>
                        <a className="btnb" href="#" data-role="button" data-inline="true" data-theme="b">Talk to a human</a> 
                    </div>      
                    </div>
                    <div className="col-6">
                       <img className="img" src={Car} />   
                    </div>
                </div>    
                <ul>
                    <li>
                    <a class="fa fa-youtube-play"></a>
                    </li>
                    <li>
                    <a href="https://www.facebook.com/mohamedabdulhamed98" class="fa fa-facebook"></a>  
                    </li>
                </ul> 
            </div>  
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />   
        </div>
        </>
    )
}

export default Home;

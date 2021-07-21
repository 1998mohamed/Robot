import React from 'react'
import Trick from '../images/trick.png';
import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';
import NavbarTwo from '../Components/NavbarTwo';
import Group from '../images/group.svg'

function Dashboard () {
    return (
        <> 
        <div>
        <NavbarTwo />
        </div>
         
              <div className="container-dash">
              
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <ul class="list-group">
                            <li class="list-group-item-a">Dashboard</li>
                            <li class="list-group-item">Develop</li>
                            <li class="list-group-item">Upgrade</li>
                            <li class="list-group-item">Support</li>
                            </ul> 
                        </div>
                    </div>
                    <div className="col-9">
                        <h2>Dashboard</h2>
                         <div className="row">
                             <div className="table">
                                 <div className="row">
                                     <div className="col-3">
                                         <img className="img" src={Trick}  />
                                         
                                     </div>
                                     
                                     <div className="col-6">
                                         <h2>Connected</h2>
                                         <ul>
                                            <li>Model: lander5</li>
                                            <li>Serial: l3s5g-d8</li>
                                            <li>Duration: 3 hours</li>
                                         </ul>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="row">
                             <div className="col-5">
                                 <div className="risk">
                                     <img src={Group} />
                                 </div>
                             </div>
                             <div className="col-3">
                                 <div className="reading">
                                 <h4>Reading</h4>
                                 <div className="row">
                                     <div className="col-5">
                                        <ul>
                                        <li>Battary:</li>
                                            <li>Voltage:</li>
                                            <li>Speed:</li>
                                            <li>Location:</li>
                                            <li>Strength:</li>
                                            </ul>
                                     </div>
                                     <div className="col-4">
                                         <ul>
                                            <li>55%</li>
                                            <li>48.6v</li>
                                            <li>3m/s</li>
                                            <li>cairo</li>
                                            <li>77%</li>
                                        </ul>
                                         
                                     </div>
                                 </div>
                                 </div>
                                 
                             </div>
                         </div>
                    </div>
                </div>    
                 
            </div>

          
          
            </>
    )
}

export default Dashboard;

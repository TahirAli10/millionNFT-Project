import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faArrowRight , faArchive , faExclamationTriangle ,  faScissors , faMassage , faEnvelope , faClock , faCheck , faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import '../App.css'
import { useState } from 'react';
import image1 from '../components/p1.png'

const Email = () => {
    const [isOpen , setisOpen] = useState(false);
    const toggleDropdown = () =>{
        setisOpen(!isOpen);
    }

    return ( <>
    <div>
    <div className='row'>
        <div className='ml-5 mr-auto d-flex justify-content-center MainIcons'>
        <div > <FontAwesomeIcon icon={faArrowLeft} className="icons" size='1x' /> </div>
        <div > <FontAwesomeIcon icon={faArchive} className="icons" size='1x'/> </div>
        <div > <FontAwesomeIcon icon={faExclamationTriangle}className="icons"  size='1x'/> </div>
        <div > <FontAwesomeIcon icon={faScissors} className="icons" size='1x'/> </div>
        <div > <FontAwesomeIcon icon={faEnvelope} className="icons" size='1x'/> </div>
        <div > <FontAwesomeIcon icon={faClock} className="icons" size='1x'/> </div>
        <div > <FontAwesomeIcon icon={faCheck} className="icons" size='1x'/> </div>
        <div  onClick={toggleDropdown}>  <FontAwesomeIcon icon={faEllipsisVertical}className="icons"  size='1x'/> 
        {
            isOpen && (
                <ul className='dropDownMenu'>
                    <li>Mark As Read</li>
                    <li>Mark As Important</li>
                    <li>Add Star</li>
                    <li>Create Event</li>
                    <li>Filter Message like these </li>
                    <li>Mute</li>                  
                </ul>
            )
        }
        </div>
        </div>
        <div className='row mr-3 '>
            <div style={{fontSize: "small"}} className="my-auto">6 of 3,540</div>
            <FontAwesomeIcon  icon={faArrowLeft} className="icons" size='1x' /> 
            <FontAwesomeIcon  icon={faArrowRight} className="icons" size='1x' /> 
        </div>
    </div>
        <div>Added You As A Stakeholder</div>
        <div className='row'>
        <img src={image1} width={50} height={50} className="rounded-circle" alt="" />
        <div className='d-flex '>
            <div className=' my-auto'>
        <div className=' '>h1</div>
        <div className=''>h2</div>
            </div>
        </div>
        </div>
    </div>
    </> );
}
 
export default Email;
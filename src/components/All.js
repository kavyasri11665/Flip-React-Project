import React from 'react';
import laptop from './laptop.webp';
import phone from './phone.webp';
import washing from './washing.webp';

export default function All(){
    return(
        <>
        <div className='row'>
        <div className="col-md-4 ">
            <img className='b' src={phone}/>
            
        </div>
        <div className="col-md-4 ">
            <img className='b'src={laptop}/>
        </div>
        <div className="col-md-4 ">
            <img className='b'src={washing}/>
        </div>
        </div>
        </>
    )
}
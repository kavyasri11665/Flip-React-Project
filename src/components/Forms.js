import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Forms() {
    let sno=1;

    const[id,setId]=useState('')
    const[title,setTitle]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')
    const[description,setDescription]=useState('')
    const[image,setImage]=useState('')
    const[productsList,setProductslist]=useState([{}])

    useEffect(()=>{
        axios.get('http://localhost:3002/profile')
    .then((res)=>setProductslist(res.data))
    },[])
    

    const productData={
        pid:id,
        title:title,
        brand:brand,
        price:price,
        description:description,
        image:image
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/profile',productData)
        .then((res)=>{
            alert("Successful")
        })
    }
    return (
        <>
    <div className="row justify-content-center">
        <div className="col-md-6 Thumbnail">
            <h3 className='text-center text-primary'>Add product</h3>
    <form method='post' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label>Id</label>
            <input type="text" className='form-control' placeholder="Enter Product Id"
            onChange={
                (e)=>{
                    setId(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Title</label>
            <input type="text" className='form-control' placeholder="Enter Product Title"
            onChange={
                (e)=>{
                    setTitle(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Brand</label>
            <input type="text" className='form-control' placeholder="Enter Product Brand"
            onChange={
                (e)=>{
                    setBrand(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Price</label>
            <input type="text" className='form-control' placeholder="Enter Product Price"
            onChange={
                (e)=>{
                    setPrice(e.target.value)
                }
            }/>
        </div>
        <div className="mb-3">
            <label>Description</label>
            <textarea type="text" className='form-control' placeholder="Enter Product Price"
                onChange={
                (e)=>{
                    setDescription(e.target.value)
                }
            }>
            </textarea>
        </div>
        <div className="mb-3">
            <label>Image</label>
            <input type="url" className='form-control' 
            onChange={
                (e)=>{
                    setImage(e.target.value)
                }
                }/>
        </div>
        <div className="mb-3">
            
            <button>Submit</button>
        </div>

    </form>
    </div>
    </div>
    <table className='table table-bordered' style={{color:"black"}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Product Id</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
    {
            productsList.map((element,index)=>{
               return(
                <>
                <tr>
                <td>{sno++}</td>
                <td>{element.pid}</td>
                 <td>{element.title}</td>
                 <td>{element.brand}</td>
                 <td>{element.price}</td>
                 <td>{element.description}</td>
                 <td><img src={element.image} class='b'/></td>
                 </tr>
                 </> 
               )
                    
            })
        }
      </tbody>
      </table>
    
  </>
  
    )
}
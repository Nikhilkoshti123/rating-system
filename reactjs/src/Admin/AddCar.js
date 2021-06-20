import React,{useEffect, useState, setState} from "react"
import {useHistory} from 'react-router-dom'

function AddCar() {
const history = useHistory();    
const [upload,setUpload] = useState('');
const [brand,setBrand] = useState('');
const [discription,setDiscription] = useState('');
const [price,setPrice] = useState('');
const [mileage,setMileage] = useState('');
const [seat,setSeat] = useState('');
const [image,setImage] = useState('');


async function submit() {
    const file = image.target.files;
   
     const formData = new FormData();
    formData.append('brand',JSON.stringify(brand));
    formData.append('discription',JSON.stringify(discription));
    formData.append('price',JSON.stringify(price));
    formData.append('mileage',JSON.stringify(mileage));
    formData.append('seat',JSON.stringify(seat));
    formData.append('img',file[0]);
    console.log(formData);
   
    const requestOptions = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: formData
    };
    let result = await fetch("http://localhost:8081/api/Api_c/addCar",requestOptions);
    result = await result.json(result);
    console.log(result);
    if(result.status == 1){
        setUpload('1');
    } else {
        setUpload('2');
    }
    
}


    return(
            <div className="row d-flex justify-content-center text-center">
                 <h1>Add Car</h1>
                {upload==1?<h2>Uploaded Car Successfully</h2>:upload==2?<h2>Uploading Car Failed</h2>:null}
        <div className="col-md-6">
            <form className="Loginform" encType="multipart/form-data">
               
                <div className="form-group">
                    <label>Brand</label>
                    <input type="text" className="form-control" placeholder="Enter Brand Name" value={brand} onChange={(e)=>{setBrand(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="Enter Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
               
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" placeholder="Enter Description" value={discription} onChange={(e)=>{setDiscription(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Mileage</label>
                    <input type="text" className="form-control" placeholder="Enter Mileage" value={mileage} onChange={(e)=>{setMileage(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Seats</label>
                    <input type="text" className="form-control" placeholder="Enter Seats" value={seat} onChange={(e)=>{setSeat(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Photos</label>
                    <input type="file" className="form-control" name='img' onChange={(e)=>{setImage(e)}} />
                </div>

                <button type="button" className="btn btn-primary btn-block " onClick={submit}>Submit</button>
                
            </form>
            </div>
            </div>
    );
}

export default AddCar;
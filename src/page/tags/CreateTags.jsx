import React, { useState,useContext,useEffect } from "react";

import { Link,Redirect ,useHistory }  from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import Nav from '../layout/Nav';
import SideBar from '../layout/SideBar';
import Footer from '../layout/Footer';


function CreateTags() {
    let history = useHistory();
    const [Catagery, setCatagery] = useState([]);

    const { register, handleSubmit, watch, errors } = useForm();
   
    const listData = () =>{
        fetch('http://8f0687dad474.ngrok.io//admin/tag')
        .then(response => response.json())
        .then(data =>
           
             setCatagery(data.tags)  
             
             )
    }
    useEffect(() => {
        listData()

    }, [])
    const onSubmit =(data) => {



  
      let reqbody=data
  
  
      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(
          reqbody),
  
        redirect: 'follow'
      }
      fetch(`http://8f0687dad474.ngrok.io//admin/tag
      `, requestOptions)
        .then(data => {
        //   history.push("/Dashboard");
        notify()
        listData()
          return data.json()

        })
        .catch(err=>{
            error()
            // alert("err",err)
        })
  
        // .then(data => {
        //   if (data.status_code == 201){
        //     notify()
        //     // history.push("/Dashboard");

       
        //   } else {
        //     history.push("/Dashboard");

        //     alert("INcorrect login")
        //     localStorage.setItem("tokenId",data.tokenId);
        //     localStorage.setItem("email",data.email);
        //   }
  
  
        // })
    
    }
  
    console.log(watch("example")); // watch input value by passing the name of it
    const notify = () =>
    toast.success('🦄 Tags Created Successfully:)', {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      },
      
    //   <Redirect  to="/dashboard" />
      );
      const error = () =>
      toast.success('🦄 Category Created Faild:)', {
        position: "top-right",
        autoClose: 4978,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        },
        
      //   <Redirect  to="/dashboard" />
        );
const datas=Catagery;
console.log("dsg",datas)
      
    return (
        <div className="wrapper">
        <SideBar/>
           <div className="main">
       <Nav/>
       <ToastContainer />

         <main className="content">
               <div className="container-fluid p-0">
                 <h1 className="h3 mb-3">Create Tag</h1>
     
                 <div className="row">
                   <div className="col-12 col-md-4 col-lg-4">
                
                   <form onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name="name"ref={register({ required: true, maxLength: 20 })} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                   
                     <div>
                       <main id="main">
                        
     
                         
                     
                       </main>
                     
                     </div>
                   </div>
                   <div className="col-12 col-md-8 col-lg-8">
                   <div className="table-responsive">
<table className="table table-hover">
<thead>
<tr>
  <th>Tags Name</th>
</tr>
</thead>
<tbody>
    {Catagery&&Catagery.map((data)=>{
        return(

    
<tr>
  <td>{data.name}</td>
  {/* <td> {data.hasOwnProperty('pid')?data.pid :'-'}</td> */}
  {/* <td>{data.hasChild ===true&&data.hasOwnProperty('hasChild')?'Yes':'No'}</td> */}
</tr>
    )
})}
</tbody>
</table>

<table className="table" />
</div>

                  <div>
                    <main id="main">
                     
  
                      
                  
                    </main>
                  
                  </div>
                </div>
                 </div>
               </div>
             </main>
     <Footer/>  </div>
         </div>
      
    )
}

export default CreateTags

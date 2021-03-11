import React from 'react'
import SignUpIcon from '../../Images/Checkout/Login.png'
import {Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

function NewPassword() {
  let history = useHistory();

  const { register, handleSubmit, watch, errors } = useForm();


  const notify = () =>
  toast.success('🦄 Account Created Successfully:)', {
    position: "top-left",
    autoClose: 4978,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    },
    
    <Redirect  to="/dashboard" />
    );
  
  const onSubmit =(data) => {
 

    console.log("data",data)
  
    console.log(data,"gdgsd")
   

    // let reqbody=data
    let reqbody={"password":data.password,"email":localStorage.getItem("email")}

    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify(
        reqbody),

      redirect: 'follow'
    }
    fetch(`http://8f0687dad474.ngrok.io//password/reset`, requestOptions)
      .then(data => {
        return data.json()
      })

      .then(data => {
        // console.log("dgmklg",data)

        if (data.status_code == 200)
         {
        notify()
        } else {
      //  history.push('/dashboard')


      alert("server error")
        }

      })
  
  }

  console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
             <ToastContainer 
        />
                  <main className="d-flex w-100">
  <div className="container d-flex flex-column">
    <div className="row vh-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h1 className="h2">Get started</h1>
            <p className="lead">
              Start creating the best possible user experience for you customers.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="m-sm-4">
              <div className="text-center">
                  <img src={SignUpIcon} alt="Charles Hall" className="img-fluid rounded-circle" width={132} height={132} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input className="form-control form-control-lg" type="text" name="company" placeholder="Enter your company name" />
                  </div>
                   */}
                  {/* <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                  </div> */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" name="password"ref={register({ required: true, maxLength: 20 })}  aria-describedby="emailHelp" />
                  </div>
                  <div className="text-center mt-3">
                    <button className="btn btn-lg btn-primary" type="button">Submit</button>
                    {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main> 
        </div>
    )
}

export default NewPassword

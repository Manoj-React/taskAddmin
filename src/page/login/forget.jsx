import React from 'react'
import ForgetIcon from '../../Images/Checkout/undraw_subscribe_vspl.svg'
import {Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

function Forget() {
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
    fetch(`http://8f0687dad474.ngrok.io//forget/password`, requestOptions)
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
            <h1 className="h2">Welcome back, Charles</h1>
            <p className="lead">
              Sign in to your account to continue
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="m-sm-4">
                <div className="text-center">
                  <img src={ForgetIcon} alt="Charles Hall" className="img-fluid rounded-circle" width={132} height={132} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control form-control-lg" type="email"  placeholder="Enter your email" name="email"ref={register({ required: true, maxLength: 20 })}  aria-describedby="emailHelp" />
                  </div>
                  {/* <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                    <small>
                      <a href="pages-reset-password.html">Forgot password?</a>
                    </small>
                  </div> */}
                  <div>
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue="remember-me" name="remember-me" defaultChecked />
                      <span className="form-check-label">
                        Remember me next time
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-3">
                    <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                    {/* <button type="submit" class="btn btn-lg btn-primary">Sign in</button> */}
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

export default Forget

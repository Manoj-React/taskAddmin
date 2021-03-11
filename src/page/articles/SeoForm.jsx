import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";

import '../login/CreateArticle.css';
import { Link,Redirect ,useHistory }  from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import NotesContext from '../../context/ContextApis';
import Article from '../login/createArticle';

export const SeoContext = React.createContext();

function SeoForm(props) {
  // const { notesDispatch } = useContext(NotesContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const [dataSet,setDatas ] = useState("ui");
 
    const onSubmit = (data) => {
      // var countio="io"
        console.log(data,"yyutu")
       
        setDatas(data)
        // notesDispatch({
        //   type: 'ADD_NOTE',
        //   title: dataSet,
       
        // });
    
    
     
        
      };
    
    return (
     
        <div
        className="col-12 col-md-12 col-lg-12 p-2 "
        style={{ overflow: "auto" }}
      >
             
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">SEO</h5>
          </div>

          <div className="card-body">
            <div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                    >
                      Title
                    </label>
                    <input
                    type="text" className="form-control" name="title"  ref={register({ required: true })} 
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      SEO-description
                    </label>
                    <textarea
                     type="text" className="form-control" name="description"  ref={register({ required: true })} 
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
{/* test */}
                  <input type="submit" className="btn btn-primary btn-block btn-lg" defaultValue="Login" />              
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    )
  

  
}

export default SeoForm

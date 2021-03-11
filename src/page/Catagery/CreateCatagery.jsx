import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { useForm } from "react-hook-form";
import Nav from "../layout/Nav";
import SideBar from "../layout/SideBar";
import Footer from "../layout/Footer";
import './CreateCatagory.css';
import {
  createCategory,
  categoryList,
} from "../../services/api/fetchCalls/CatageryFetchCalls";

function CreateCatagery() {
  let history = useHistory();
  const [oldData, setCatagery1] = useState();
  const [Catagery, setCatagery] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const [categoryListData, setCategoryList] = useState([]);

  const onSubmit = (data) => {
    let createCategoryData = data;

    createCategory(createCategoryData).then((data) => {
      if (data) {
        notify();
        listData();
      }
    });
  };

  const notify = () =>
    toast.success("🦄 Category Created Successfully:)", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const error = () =>
    toast.success("🦄 Category Created Faild:)", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const listData = () => {
    categoryList().then((data) => {
      if (data) {
        setCategoryList(data.categorys);
      }
    });
  };

  useEffect(() => {
    listData();
  }, []);

  const onChange = (currentNode, selectedNodes) => {
    console.log("currentNode,selectedNodes", currentNode, selectedNodes);

    setCatagery1(currentNode, selectedNodes);
  };
  const onAction = (node, action) => {
    console.log("onAction::", action, node);
  };
  const onNodeToggle = (currentNode) => {
    console.log("onNodeToggle::", currentNode);
  };

  return (
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <Nav />
        <ToastContainer />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Create Category</h1>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                      name="name"
                      ref={register({ required: false, maxLength: 20 })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Parent Name</label>
                    <select
                      name="pId"
                      className="form-select"
                      aria-label="Default select example"
                      ref={register({ maxLength: 20 })}
                    >
                      <option selected>Open this select menu</option>

                      {categoryListData.map((data) => {
                        return <option value={data.id}>{data.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group submitButton">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>

                <div>
                  <main id="main"></main>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Parent Id</th>
                        <th>Has Child</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryListData.map((data) => {
                        return (
                          <tr>
                            <td>{data.name}</td>
                            <td>
                              {" "}
                              {data.hasOwnProperty("pid") ? data.pid : "-"}
                            </td>
                            <td>
                              {data.hasChild === true &&
                              data.hasOwnProperty("hasChild")
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <table className="table" />
                </div>

                <div>
                  <main id="main"></main>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />{" "}
      </div>
    </div>
  );
}

export default CreateCatagery;

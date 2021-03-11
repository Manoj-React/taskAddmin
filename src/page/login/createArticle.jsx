import { Editor } from "@tinymce/tinymce-react";
import React, { useState,useContext,useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
// import bootstrap from 'bootstrap'
import { enableRipple } from "@syncfusion/ej2-base";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Button } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import '../login/CreateArticle.css';
import { Link,Redirect ,useHistory }  from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import SeoContext from '../articles/SeoForm';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ChipInput from 'material-ui-chip-input'
import { useForm } from "react-hook-form";
// import Seo from '../articles/SeoForm';
import Nav from '../layout/Nav';
import SideBar from '../layout/SideBar';
import Footer from '../layout/Footer';
import CheckboxTree from 'react-checkbox-tree';
import CheckApp from '../layout/checkbox'


enableRipple(true);
const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));
const useStylesDate = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
function CreateArticle(props) {
  const [content, setContent] = useState();
  const [yourChips,setYourChipst] = useState();
  const [tag,setTag] = useState();
  const [image,setImage] = useState();



  const [dataSet,setData] = useState({
  title:'',
  author:'',
  description:'',

  SEO_title:'',
  SEO_description:'',
  slug:'',
  videoUrl:'',
  isBublished :true,
  isTrending :true,
  language :'ENG',
  email:'admin@gmail.com'


  });

  const { register, handleSubmit, watch, errors } = useForm();

  const [selectedDate, setSelectedDate] = React.useState( new Date("2014-08-18T21:11:54"));



  const handleDateChange = (date) => {

    setSelectedDate(date);

    const circle = dataSet
  
  const style = {
    createBy : date
  };
  
  const solidCircle = {
      ...circle,
      ...style
  };

  setData(solidCircle)



  };





  const [countries, setCountries] = useState([
    { id: 1, name: "Australia", hasChild: true, expanded: true },
    { id: 2, pid: 1, name: "New South Wales" },
    { id: 3, pid: 1, name: "Victoria" },
    { id: 4, pid: 1, name: "South Australia" },
    { id: 6, pid: 1, name: "Western Australia" },
    { id: 7, name: "Brazil", hasChild: true },
    { id: 8, pid: 7, name: "Paraná" },
    { id: 9, pid: 7, name: "Ceará" },
    { id: 10, pid: 7, name: "Acre" },
    { id: 11, name: "China", hasChild: true },
    { id: 12, pid: 11, name: "Guangzhou" },
    { id: 13, pid: 11, name: "Shanghai" },
    { id: 14, pid: 11, name: "Beijing" },
    { id: 15, pid: 11, name: "Shantou" },
    { id: 16, name: "France", hasChild: true },
    { id: 17, pid: 16, name: "Pays de la Loire" },
    { id: 18, pid: 16, name: "Aquitaine" },
    { id: 19, pid: 16, name: "Brittany" },
    { id: 20, pid: 16, name: "Lorraine" },
    { id: 21, name: "India", hasChild: true },
    { id: 22, pid: 21, name: "Assam" },
    { id: 23, pid: 21, name: "Bihar" },
    { id: 24, pid: 21, name: "Tamil Nadu" },
    { id: 25, pid: 21, name: "Punjab" },
  
  ]

  );
  const [field, setField] = useState({
    dataSource: countries,
    id: "id",
    parentID: "pid",
    text: "name",
    hasChildren: "hasChild",
  
  });
  const [isChecked, setIsChecked] = useState(true);
  const [CategoriesTitle, CategoriesData] = useState();



  
  const handleEditorChange = (content, editor) => {
    setContent(content)
    const circle = dataSet
  
    const style = {
      content: content
    };
    
    const solidCircle = {
        ...circle,
        ...style
    };
  
    setData(solidCircle)
 
  };
  const save = () => {
    localStorage.setItem("blog", this.state.content);
  };


  let history = useHistory();

// useEffect(() => {
 
// }, [])

const onFileChange = event => { 
  setImage(event.target.files[0])

  // const circle = dataSet
  // const style = {

  //   featureImage:event.target.files[0]
  // };
  
  // const solidCircle = {
  //     ...circle,
  //     ...style
  // };
  //    setData(solidCircle)
  


 }

  const onSubmit =(data) => {

    const circle = dataSet

    const style = {
      category:'test1',
      img:image
    };
    
    const solidCircle = {
        ...circle,
        ...style
    };
  
  var finalData=solidCircle
  
  setData(finalData)


  
let reqbody=dataSet
  
  
let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(finalData),

  redirect: 'follow'
}
console.log("iteturtm",finalData)

fetch(`http://8f0687dad474.ngrok.io//admin/article
`, requestOptions)
  .then(data => {
  // notify()
    return data.json()

  })
  .catch(err=>{
      alert("err",err)
  })


  }



  const add = () =>{
   console.log("finalData",dataSet)
    let myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(dataSet),

  redirect: 'follow'
}
// console.log("iteturtm",finalData)

fetch(`http://8f0687dad474.ngrok.io//admin/article`, requestOptions)
  .then(data => {
    return data.json()

  })
  .catch(err=>{
      alert("err",err)
  })


  }



  const classes = useStyles();
  const classesDate = useStyles();

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
   
   
  ];
  const handleAddChip = () => {

  }
  const handleDeleteChip = () =>{

  }



const handleChangeData = ( event) =>{

    const { name, value } = event.target;

    setData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });


  }


 const  onchange=( ChangedEventArgs)=> { 
 
   console.log("data",ChangedEventArgs)
    /*Displays selected date in the label*/ 
    // (document.getElementById('date_label') ).textContent = 'Selected Value: ' + args.value.toLocaleDateString(); 
} 
const nodeChecked=(args)=> {
  console.log("Thenodes",args.checkedNodes) // To alert the checked node's id.
}

const nodes = [{
  value: 'mars',
  label: 'Mars',
  children: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' },
  ],
}];

const nodeSelected=(e)=> {
  alert("The selected node's id: " + field.selectedNodes); // To alert the selected node's id.
}

const   setYourTags = (value) => {

  setYourChipst(value)
  const circle = dataSet

  const style = {
    tag: value
  };
  
  const solidCircle = {
      ...circle,
      ...style
  };

  setData(solidCircle)
  console.log("solidCircle",solidCircle);
}
const featureImage = (event) => {
  alert("img")
  var image =event.target.files[0]

     var formData = new FormData()
     formData.append('featureImage',image)
     
 console.log('goort',image)
     var requestOptions = {
       method: 'POST',
       body: formData
     }
     fetch(`http://496f16d0d566.ngrok.io/admin/article/upload`, requestOptions).then(result => {
         return result.json()
       })
       .then(data => {
   
   
  
 })


  
  
  
 
  




}

  return (
    <div className="wrapper">
   <SideBar/>
      <div className="main">
  <Nav/>
    <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Articles</h1>

            <div className="row">
              <div className="col-12">
                {/*   
   <div className="mb-3">
      <button className="btn btn-primary" >Add New</button>
     
 

</div>  */}
                <div class="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                      <form className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Add Title"
                            name="title"
                            value={dataSet.title}
                         ref={register({ required: true })}
                            onChange={handleChangeData}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 p-2">
                      <Editor
                        initialValue={content}
                        init={{
                          height: 500,
                          menubar: false,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor ",
                            "tinydrive code image link media",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                          ],
                          toolbar:
                            "undo redo | formatselect | bold italic backcolor |image  \
       alignleft aligncenter alignright alignjustify | \
       bullist numlist outdent indent | removeformat | help",
                        }}
                        //  onEditorChange={handleEditorChange}
                        // tinydrive code image link media',
                        // toolbar: 'insertfile | undo redo | link image media | code

                        style={{ margin: "0px !important" }}
                        init={{
                          plugins:
                            "file_picker_types  image,print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help",
                          toolbar:
                            " insertfile | undo redo | link image media | code |formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",
                          height: 500,
                        }}
                        value={content}
                        onEditorChange={handleEditorChange}
                        
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 p-2 ">
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Categories</h5>
                        </div>
                        <div className="card-body">
                          <div>
                            <div className="card">
                              <div className="card-header">
                                <ul
                                  className="nav nav-tabs card-header-tabs pull-right"
                                  role="tablist"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-toggle="tab"
                                      href="#tab-1"
                                    >
                                      All Categories
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#tab-2"
                                    >
                                      Most Used
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a class="btn btn-outline-primary">
                                      Add New Category
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                                <div className="tab-content">
                                  <div
                                    className="tab-pane fade show active"
                                    id="tab-1"
                                    role="tabpanel"
                                  >
                                    {/* <h5 className="card-title">Card with tabs</h5> */}
                                    <p className="card-text overflow-auto">
                                    <form  >
                                   {/* < CheckApp/> */}
                                      <TreeViewComponent
                                  //  onClick={(field)=>alert(field.id)}

                                      // allowMultiSelection={field.allowMultiSelection} selectedNodes={field.selectedNodes} nodeSelected={nodeSelected}
                                        fields={field}
                                        
                                        change={onchange}
                                        nodeChecked={nodeChecked}
                                        showCheckBox={isChecked}
                                        // change={(e)=>console.log("rhtyrt",e)}
                                        onChange={(e) => setField(field)}
                                        name="email" placeholder="Enter your email" name="email"ref={register({ required: true, maxLength: 20 })}
                                      />
                                      </form>

                                      {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                                    </p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                  </div>
                                  <div
                                    className="tab-pane fade text-center"
                                    id="tab-2"
                                    role="tabpanel"
                                  >
                                    <h5 className="card-title">
                                      Card with tabs
                                    </h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                  </div>
                                </div>
                              </div>
                              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Tags</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div className="card">
                              <div className="card-header">
                                <ul
                                  className="nav nav-tabs card-header-tabs pull-right"
                                  role="tablist"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-toggle="tab"
                                      href="#tab-3"
                                    >
                                      All Categories
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#tab-4"
                                    >
                                      Most Used
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a class="btn btn-outline-primary">
                                      Add New Tag
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="card-body">
                                <div className="tab-content">
                                  <div
                                    className="tab-pane fade show active"
                                    id="tab-3"
                                    role="tabpanel"
                                  >
             
                                    <p className="card-text overflow-auto">
                                      <div className={classes.root}>
                                        <Autocomplete
                                          multiple
                                          id="tags-standard"
                                          options={top100Films}
                                          getOptionLabel={(option) =>
                                            option.title
                                          }
                                          defaultValue={[]}
                                          renderInput={(params) => (
                                            <TextField
                                              {...params}
                                              variant="standard"
                                              label="Multiple values"
                                              placeholder="Favorites"
                                            />
                                          )}
                                          onChange={(event, value) => setYourTags(value)} 
                                        />
                                      </div>
                                    </p>
                                  </div>
                                  <div
                                    className="tab-pane fade text-center"
                                    id="tab-4"
                                    role="tabpanel"
                                  >
                                    <h5 className="card-title">
                                      Card with tabs
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Featured image</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <label htmlFor="upload-photo">
                              <a class="btn btn-outline-primary">
                                  <input
                                  // style={{ display: "none" }}
                                  onChange={featureImage}
                                  type="file"
                                  // enctype="multipart/form-data"
                                  // id="file"
                                  // value={dataSet.featureImage}
                                  // name="featureImage"
                                  // accept="image/png,image/jpeg"
                                />
                             
                                   <Button color="primary" variant="contained" component="span" onClick={featureImage}> 
                                  Upload
                                   </Button> 
                                </a>{" "}
                              </label>
                            </div>
                            {/* <button class="btn btn-outline-primary" type="submit"  onClick={onSubmit}>
                                  Save
                                
                                </button> */}
                            {/* <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
</div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Description</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <form  onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    name="description"
                                    value={dataSet.description}
                                 ref={register({ required: true })}
                                    onChange={handleChangeData}
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6 col-lg-6 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Publish</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <>
                                <div className="mb-3">
                                  <form
                                    className={classesDate.container}
                                    noValidate
                                  >
                                    {/* <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classesDate.textField}
        InputLabelProps={{
          shrink: true,
        }} 
      />*/}
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                      >
                                        author
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="author"
                                        value={dataSet.author}
                                     ref={register({ required: true })}
                                        onChange={handleChangeData}
                                      />
                                      {/* <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone
                                        else.
                                      </div> */}
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckDefault"
                                      >
                                        Publish
                                      </label>
                                    </div>
                                    <MuiPickersUtilsProvider
                                      utils={DateFnsUtils}
                                    >
                                      <KeyboardDatePicker
                                      
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                          "aria-label": "change date",
                                        }}
                                      />
                                    </MuiPickersUtilsProvider>
                                  </form>{" "}
                                </div>
                              </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6 col-lg-6 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Language</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <form>
                                <div className="mb-3">
                                  <div>
                                    <div
                                      className="btn-group-vertical"
                                      role="group"
                                      aria-label="Basic radio toggle button group"
                                    >
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio1"
                                        autoComplete="off"
                                        defaultChecked
                                        
                                      />
                                      <label
                                        className="btn btn-outline-primary"
                                        htmlFor="btnradio1"
                                      >
                                        Tamil
                                      </label>
                                      <input
                                        type="radio"
                                        className="btn-check"
                                        name="btnradio"
                                        id="btnradio2"
                                        autoComplete="off"
                                      />
                                      <label
                                        className="btn btn-outline-primary"
                                        htmlFor="btnradio2"
                                      >
                                        English
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="card-header">
                          <h5 className="card-title">Slug</h5>
                          <div className="mb-3">
                            {/* <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label> */}
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              name="slug"
                              value={dataSet.slug}
                           ref={register({ required: true })}
                              onChange={handleChangeData}
                            />
                            {/* <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
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
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                    >
                      Title
                    </label>
                    <input
                      type="email"
                      className="form-control"
                
                                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="SEO_title"
                      value={dataSet.SEO_title}
                   ref={register({ required: true })}
                      onChange={handleChangeData}
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
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      
                      name="SEO_description"
                      value={dataSet.SEO_description}
                   ref={register({ required: true })}
                      onChange={handleChangeData}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*      
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Video url</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <form>
                              <ChipInput
  value={yourChips}
  onAdd={(chip) => handleAddChip(chip)}
  onDelete={(chip, index) => handleDeleteChip(chip, index)}
/>
                                {/* <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    Title
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                  >
                                    SEO-description
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    defaultValue={""}
                                  />
                                </div>
                              </form> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
               
                */}
                
                <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">VideoUrl</h5>
                        </div>

                        <div className="card-body">
                          <div>
                            <div>
                              <form  onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                                  <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    name="videoUrl"
                                    value={dataSet.videoUrl}
                                 ref={register({ required: true })}
                                    onChange={handleChangeData}
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    <button class="btn btn-outline-primary" type="submit"  onClick={onSubmit}>
                                  {/* <Button color="primary" variant="contained" component="span"> */}
                                  Save
                                  {/* </Button> */}
                                </button>{" "}
                                <button class="btn btn-outline-primary" type="submit"  onClick={add}>
                                  {/* <Button color="primary" variant="contained" component="span"> */}
                                 add
                                  {/* </Button> */}
                                </button>{" "}
                    </div>

                   
                  </div>
                </div>
                <div>
                  <main id="main">
                    {/* <div className="addEditor" style={{    width: "764px",
    height: "400px"}}>
      
      <Editor 
      initialValue={content}
      init={{
     height: 500,
     menubar: false,
     plugins: [
       'advlist autolink lists link image charmap print preview anchor ','tinydrive code image link media',
       'searchreplace visualblocks code fullscreen',
       'insertdatetime media table paste code help wordcount'
     ],
     toolbar:
       'undo redo | formatselect | bold italic backcolor |image  \
       alignleft aligncenter alignright alignjustify | \
       bullist numlist outdent indent | removeformat | help'
   }}
  //  onEditorChange={handleEditorChange}
  // tinydrive code image link media',
  // toolbar: 'insertfile | undo redo | link image media | code

  style={{margin: "0px !important"}}
  init={{
  plugins: 'file_picker_types  image,print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
  toolbar: ' insertfile | undo redo | link image media | code |formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
  height: 500
  }}
        value={content}
        onEditorChange={handleEditorChange}
      />


      </div> */}

                    {/* ======= Breadcrumbs ======= */}
                    {/* <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
              </ol>
              <h2>Dolorum optio tempore voluptas dignissimos</h2>
            </div>
      </section> */}
                    {/* End Blog Section */}
                  </main>
                  {/* End #main */}
                  {/* ======= Footer ======= */}
                </div>
              </div>
            </div>
          </div>
        </main>
<Footer/>  </div>
    </div>
  );
}

export default CreateArticle;

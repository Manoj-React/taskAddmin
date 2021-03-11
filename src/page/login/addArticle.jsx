import { Editor } from '@tinymce/tinymce-react';
import { Link,Redirect ,useHistory }  from "react-router-dom";

  import React, { useState,useEffect } from 'react';
  import TinyMCE from 'react-tinymce';
  // import ReactHtmlParser from "react-html-parser";
  import Nav from '../layout/Nav';
  import SideBar from '../layout/SideBar';
  import Footer from '../layout/Footer';
  import { ToastContainer, toast } from 'react-toastify';

  // Declare a new state variable, which we'll call "count"
function AddArticle() {
  const history = useHistory();

  const [editorState, setCount] = useState()
  
  const [html, sethtml] = useState()

  const [content, setcontent] = useState()

  
  var handleEditorChange=(e)=>{
    console.log('Content was updated:', e.target.getContent());
    setcontent( e.target.getContent())
  }
  const getData = () =>{
 
  }

  const [Catagery, setCatagery] = useState([]);

  // const { register, handleSubmit, watch, errors } = useForm();
 
  const listData = () =>{
      fetch('http://8f0687dad474.ngrok.io//admin/article')
      .then(response => response.json())
      .then(data =>
         
           setCatagery(data.articles)  
           
           )
  }
  useEffect(() => {
      listData()

  }, [])
  return (

    <div className="wrapper">
 <SideBar/>
   <div className="main">
     <Nav/>
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Articles</h1>
          <div className="row">
          <div className="row">
<div className="col-12">
  
   <div className="mb-3">
  
<a className="btn btn-primary" onClick={getData} href="/CreateArticle">Add New</a>
     
 

</div> 
<div className="App">
   {/* <div         
>
<textarea  id="editor" className="tinymce" style={{height:"673px"}}
    onChange={handleEditorChange}

>
  
<Editor  
        initialValue={content}
        init={{
       height: 500,
       menubar: false,
       plugins: [
         'advlist autolink lists link image charmap print preview anchor',
         'searchreplace visualblocks code fullscreen',
         'insertdatetime media table paste code help wordcount'
       ],
       toolbar:
         'undo redo | formatselect | bold italic backcolor |image  \
         alignleft aligncenter alignright alignjustify | \
         bullist numlist outdent indent | removeformat | help'
     }}
    //  onEditorChange={handleEditorChange}

    style={{margin: "0px !important"}}
    init={{
    plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    height: 500
    }}
    // initialValue={this.state.htmlContent}
    // onChange={handleEditorChange}
    />
</textarea>
 
</div> */}
{/* <div>
<div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<div>
<h1>What is Lorem Ipsum?</h1>
<p style={{textAlign: 'justify'}}><em>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p>
<p style={{textAlign: 'justify'}}><em>specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p>
<p style={{textAlign: 'justify'}}>&nbsp;</p>
<p style={{textAlign: 'justify'}}>&nbsp;</p>
</div>
<div>
<h2>Why do we use it?</h2>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
</div>
<p><img title="aboutBaner.jpeg" src="blob:http://localhost:3000/ba136778-20e1-449d-9acc-dfaaefbeda2e" alt="" width={1280} height={720} /></p>
<div>
<h2>Where does it come from?</h2>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
<p><iframe src="https://www.youtube.com/embed/fqYvp0C3pX4" width={660} height={370} allowFullScreen="allowfullscreen" /></p>
</div>
<p>&nbsp;</p>
</div>

</div> */}
</div>

</div>
</div>

            <div className="col-12">
 <p>{html}</p>

<div className="table-responsive">
<table className="table table-hover">
<thead>
<tr>
  <th>Article Title</th>
  <th>Description</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
  {Catagery&&Catagery.map((data)=>{
    return(
<tr>
  <td>{data.title}</td>
  <td>{data.description}</td>
  <td>-</td>
</tr>
    )
  })}


</tbody>
</table>

<table className="table" />
</div>
              {/* <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Empty card</h5>
                </div>
                <div className="card-body">
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
     < Footer/>  </div>
  </div>
  

 
 );
}

export default AddArticle;

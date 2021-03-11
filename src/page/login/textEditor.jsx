import React, { useState } from 'react'

import { Editor } from '@tinymce/tinymce-react';

function TextEditor() {
    const [editorState, setCount] = useState()

    const handleEditorChange = (content, editor) => {
        console.log('Content', content);
        setCount(editorState)
     localStorage.setItem("editor",content.level)
     // console.log(draftToHtml(convertToRaw(editorState)));
    }     
    return (
        <div className="wrapper">
        <nav id="sidebar" className="sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
              <span className="align-middle">AdminKit</span>
            </a>
            <ul className="sidebar-nav">
              <li className="sidebar-header">
                Pages
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index.html">
                  <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="pages-profile.html">
                  <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="pages-settings.html">
                  <i className="align-middle" data-feather="settings" /> <span className="align-middle">Settings</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="pages-invoice.html">
                  <i className="align-middle" data-feather="credit-card" /> <span className="align-middle">Invoice</span>
                </a>
              </li>
              <li className="sidebar-item active">
                <a className="sidebar-link" href="pages-blank.html">
                  <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
                  <i className="align-middle" data-feather="users" /> <span className="align-middle">Auth</span>
                </a>
                <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                  <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
                </ul>
              </li>
              <li className="sidebar-header">
                Tools &amp; Components
              </li>
              <li className="sidebar-item">
                <a data-target="#ui" data-toggle="collapse" className="sidebar-link collapsed">
                  <i className="align-middle" data-feather="briefcase" /> <span className="align-middle">UI Elements</span>
                </a>
                <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-general.html">General</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="ui-typography.html">Typography</a></li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="icons-feather.html">
                  <i className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a data-target="#forms" data-toggle="collapse" className="sidebar-link collapsed">
                  <i className="align-middle" data-feather="check-circle" /> <span className="align-middle">Forms</span>
                </a>
                <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                  <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form Layouts</a></li>
                  <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="tables-bootstrap.html">
                  <i className="align-middle" data-feather="list" /> <span className="align-middle">Tables</span>
                </a>
              </li>
              <li className="sidebar-header">
                Plugins &amp; Addons
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="charts-chartjs.html">
                  <i className="align-middle" data-feather="bar-chart-2" /> <span className="align-middle">Charts</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="maps-google.html">
                  <i className="align-middle" data-feather="map" /> <span className="align-middle">Maps</span>
                </a>
              </li>
            </ul>
            <div className="sidebar-cta">
              <div className="sidebar-cta-content">
                <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                <div className="mb-3 text-sm">
                  Are you looking for more components? Check out our premium version.
                </div>
                <a href="https://adminkit.io/pricing" target="_blank" className="btn btn-primary btn-block">Upgrade to Pro</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="main">
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle d-flex">
              <i className="hamburger align-self-center" />
            </a>
            <form className="d-none d-sm-inline-block">
              <div className="input-group input-group-navbar">
                <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
                <button className="btn" type="button">
                  <i className="align-middle" data-feather="search" />
                </button>
              </div>
            </form>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-align">
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
                    <div className="position-relative">
                      <i className="align-middle" data-feather="bell" />
                      <span className="indicator">4</span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
                    <div className="dropdown-menu-header">
                      4 New Notifications
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-danger" data-feather="alert-circle" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Update completed</div>
                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                            <div className="text-muted small mt-1">30m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-warning" data-feather="bell" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Lorem ipsum</div>
                            <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-primary" data-feather="home" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Login from 192.186.1.8</div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-success" data-feather="user-plus" />
                          </div>
                          <div className="col-10">
                            <div className="text-dark">New connection</div>
                            <div className="text-muted small mt-1">Christina accepted your request.</div>
                            <div className="text-muted small mt-1">14h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">Show all notifications</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown">
                    <div className="position-relative">
                      <i className="align-middle" data-feather="message-square" />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
                    <div className="dropdown-menu-header">
                      <div className="position-relative">
                        4 New Messages
                      </div>
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                          </div>
                          <div className="col-10 pl-2">
                            <div className="text-dark">Vanessa Tucker</div>
                            <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                            <div className="text-muted small mt-1">15m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                          </div>
                          <div className="col-10 pl-2">
                            <div className="text-dark">William Harris</div>
                            <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                          </div>
                          <div className="col-10 pl-2">
                            <div className="text-dark">Christina Mason</div>
                            <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                            <div className="text-muted small mt-1">4h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                          </div>
                          <div className="col-10 pl-2">
                            <div className="text-dark">Sharon Lessman</div>
                            <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">Show all messages</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                    <i className="align-middle" data-feather="settings" />
                  </a>
                  <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                    <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded mr-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle mr-1" data-feather="user" /> Profile</a>
                    <a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="pie-chart" /> Analytics</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="pages-settings.html"><i className="align-middle mr-1" data-feather="settings" /> Settings &amp; Privacy</a>
                    <a className="dropdown-item" href="#"><i className="align-middle mr-1" data-feather="help-circle" /> Help Center</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Log out</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content">
            <div className="container-fluid p-0">
              <h1 className="h3 mb-3">Articles</h1>
              <div className="row">
              <div className="row">
  <div className="col-12">
     
        <div className="mb-3">
          <button className="btn btn-primary">Add New</button>
         
     
   
    </div>
    <div className="App">
       <div         
>
  <textarea  id="editor">

  </textarea>
    {/* //   <Editor  
    // initialValue="<p>This is the initial content of the editor</p>"
    //      init={{
    //        height: 500,
    //        menubar: false,
    //        plugins: [
    //          'advlist autolink lists link image charmap print preview anchor',
    //          'searchreplace visualblocks code fullscreen',
    //          'insertdatetime media table paste code help wordcount'
    //        ],
    //        toolbar:
    //          'undo redo | formatselect | bold italic backcolor | \
    //          alignleft aligncenter alignright alignjustify | \
    //          bullist numlist outdent indent | removeformat | help'
    //      }}
    //      onEditorChange={handleEditorChange}

        // style={{margin: "0px !important"}}
        // init={{
        // plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
        // toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        // height: 500
        // }}
        // initialValue={this.state.htmlContent}
        // onChange={handleEditorChange}
       />*/}
  </div>
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
     

<div className="table-responsive">
<table className="table table-hover">
  <thead>
    <tr>
      <th>Date</th>
      <th>Title</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>Moe</td>
      <td>mary@example.com</td>
    </tr>
    <tr>
      <td>July</td>
      <td>Dooley</td>
      <td>july@example.com</td>
    </tr>
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
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-left">
                  <p className="mb-0">
                    <a href="index.html" className="text-muted"><strong>AdminKit Demo</strong></a> ©
                  </p>
                </div>
                <div className="col-6 text-right">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">Support</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">Help Center</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      
    )
}

export default TextEditor

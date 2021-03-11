import React,{useEffect} from 'react'
import { Link,Redirect ,useHistory }  from "react-router-dom";

function Login() {

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
              <li className="sidebar-item active">
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
              <li className="sidebar-item">
                <a className="sidebar-link" href="pages-blank.html">
                  <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
                  <i className="align-middle" data-feather="users" /> <span className="align-middle">Auth</span>
                </a>
                <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                <Link to='/Sign' > <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In </a></li></Link>
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
            {/* <div className="sidebar-cta">
              <div className="sidebar-cta-content">
                <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                <div className="mb-3 text-sm">
                  Are you looking for more components? Check out our premium version.
                </div>
                <a href="https://adminkit.io/pricing" target="_blank" className="btn btn-primary btn-block">Upgrade to Pro</a>
              </div>
            </div> */}
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
              <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                  <h3><strong>Analytics</strong> Dashboard</h3>
                </div>
                <div className="col-auto ml-auto text-right mt-n1">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent p-0 mt-1 mb-0">
                      <li className="breadcrumb-item"><a href="#">AdminKit</a></li>
                      <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Analytics</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title mb-4">Sales</h5>
                            <h1 className="mt-1 mb-3">2.382</h1>
                            <div className="mb-1">
                              <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right" /> -3.65% </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title mb-4">Visitors</h5>
                            <h1 className="mt-1 mb-3">14.212</h1>
                            <div className="mb-1">
                              <span className="text-success"> <i className="mdi mdi-arrow-bottom-right" /> 5.25% </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title mb-4">Earnings</h5>
                            <h1 className="mt-1 mb-3">$21.300</h1>
                            <div className="mb-1">
                              <span className="text-success"> <i className="mdi mdi-arrow-bottom-right" /> 6.65% </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title mb-4">Orders</h5>
                            <h1 className="mt-1 mb-3">64</h1>
                            <div className="mb-1">
                              <span className="text-danger"> <i className="mdi mdi-arrow-bottom-right" /> -2.25% </span>
                              <span className="text-muted">Since last week</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                      <div className="chart chart-sm">
                        <canvas id="chartjs-dashboard-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Browser Usage</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="py-3">
                          <div className="chart chart-xs">
                            <canvas id="chartjs-dashboard-pie" />
                          </div>
                        </div>
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <td>Chrome</td>
                              <td className="text-right">4306</td>
                            </tr>
                            <tr>
                              <td>Firefox</td>
                              <td className="text-right">3801</td>
                            </tr>
                            <tr>
                              <td>IE</td>
                              <td className="text-right">1689</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Real-Time</h5>
                    </div>
                    <div className="card-body px-4">
                      <div id="world_map" style={{height: '350px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Calendar</h5>
                    </div>
                    <div className="card-body d-flex">
                      <div className="align-self-center w-100">
                        <div className="chart">
                          <div id="datetimepicker-dashboard" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-hover my-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="d-none d-xl-table-cell">Start Date</th>
                          <th className="d-none d-xl-table-cell">End Date</th>
                          <th>Status</th>
                          <th className="d-none d-md-table-cell">Assignee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Project Apollo</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-success">Done</span></td>
                          <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                        </tr>
                        <tr>
                          <td>Project Fireball</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-danger">Cancelled</span></td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                        <tr>
                          <td>Project Hades</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-success">Done</span></td>
                          <td className="d-none d-md-table-cell">Sharon Lessman</td>
                        </tr>
                        <tr>
                          <td>Project Nitro</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-warning">In progress</span></td>
                          <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                        </tr>
                        <tr>
                          <td>Project Phoenix</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-success">Done</span></td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                        <tr>
                          <td>Project X</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-success">Done</span></td>
                          <td className="d-none d-md-table-cell">Sharon Lessman</td>
                        </tr>
                        <tr>
                          <td>Project Romeo</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-success">Done</span></td>
                          <td className="d-none d-md-table-cell">Christina Mason</td>
                        </tr>
                        <tr>
                          <td>Project Wombat</td>
                          <td className="d-none d-xl-table-cell">01/01/2020</td>
                          <td className="d-none d-xl-table-cell">31/06/2020</td>
                          <td><span className="badge bg-warning">In progress</span></td>
                          <td className="d-none d-md-table-cell">William Harris</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Monthly Sales</h5>
                    </div>
                    <div className="card-body d-flex w-100">
                      <div className="align-self-center chart chart-lg">
                        <canvas id="chartjs-dashboard-bar" />
                      </div>
                    </div>
                  </div>
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

export default Login

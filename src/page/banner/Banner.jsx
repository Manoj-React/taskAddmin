import { Editor } from "@tinymce/tinymce-react";
import React, { useState, useContext, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { enableRipple } from "@syncfusion/ej2-base";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";

import DateFnsUtils from "@date-io/date-fns";
import "../login/CreateArticle.css";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import Nav from "../layout/Nav";
import SideBar from "../layout/SideBar";
import Footer from "../layout/Footer";

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
function Banner(props) {
  const [content, setContent] = useState();
  const [yourChips, setYourChipst] = useState();
  const [tag, setTag] = useState();
  const [image, setImage] = useState();
  const [bannerData, setBannerData] = useState([]);
  const [bannerSend, setBannerSend] = useState();
  const [article, setArticle] = useState([]);
  const [categories, setMainCategories] = useState([]);
  const [mainCategories, setMainDatas] = useState([]);

  const [dataSet, setData] = useState({
    title: "",
    author: "",
    description: "",

    SEO_title: "",
    SEO_description: "",
    slug: "",
    videoUrl: "",
    isBublished: true,
    isTrending: true,
    language: "ENG",
    email: "admin@gmail.com",
  });

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
  ]);

  const classes = useStyles();

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Others", year: 2006 },
  ];

  const setYourTags = (value) => {
    setYourChipst(value);
    const circle = dataSet;

    const style = {
      tag: value,
    };

    const solidCircle = {
      ...circle,
      ...style,
    };

    setData(solidCircle);
  };

  const setBanner = (value) => {
    setBannerSend(value);
  };
  const sendBanners = () => {
    let data = {
      banner: bannerSend,
      module: "article",
    };
    console.log("datassss", data);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),

      redirect: "follow",
    };
    console.log("iteturtm", data);

    fetch(
      `http://59d654068b8f.ngrok.io/admin/home/banner
`,
      requestOptions
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data.status_code === 200) {
          notify();
        } else {
          failed();
        }
      });
  };
  const notify = () =>
    toast.success("🦄 Banner Upload Successfully:)", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const failed = () =>
    toast.error("🚀 Banner Upload Failed !", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const setArticles = (value) => {
    setArticle(value);
  };
  const articalNotify = () =>
    toast.success("🦄 Articles Upload Successfully:)", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const articalfailed = () =>
    toast.error("🚀 Articles Upload Failed !", {
      position: "top-right",
      autoClose: 4978,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendFinalData = () => {
    let data = {
      categoryIds: mainCategories,
      module: "trendCategory",
    };
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),

      redirect: "follow",
    };

    fetch(
      `http://59d654068b8f.ngrok.io/admin/home/category/trendCategory
`,
      requestOptions
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data.status_code === 200) {
          articalNotify();
        } else {
          articalfailed();
        }
      });
  };

  const sendArticles = () => {
    let data = {
      trendIds: article,
      module: "articleTrend",
    };
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),

      redirect: "follow",
    };

    fetch(
      `http://59d654068b8f.ngrok.io/admin/home/trend
`,
      requestOptions
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data.status_code === 200) {
          articalNotify();
        } else {
          articalfailed();
        }
      });
  };

  const setCategories = (value) => {
    setMainDatas(value);
  };
  const listData = () => {
    fetch("http://59d654068b8f.ngrok.io/admin/article/home/articles")
      .then((response) => response.json())
      .then((data) => setBannerData(data.articleList));
  };
  const listCategories = () => {
    fetch("http://59d654068b8f.ngrok.io/admin/home/category/list")
      .then((response) => response.json())
      .then((data) => setMainCategories(data.res));
  };
  useEffect(() => {
    listData();
    listCategories();
  }, []);

  return (
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <Nav />
        <ToastContainer />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">HOME MANAGEMENT</h1>

            <div className="row">
              <div className="col-12">
                <div class="container">
                  <div className="row"></div>

                  <div className="row">
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">TRENDING BANNER</h5>
                        </div>

                        <div className="card-body">
                          <p className="card-text overflow-auto">
                            <div className={classes.root}>
                              <Autocomplete
                                multiple
                                id="tags-standard"
                                options={bannerData}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[]}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="standard"
                                    label="Select values"
                                    placeholder="Favorites"
                                  />
                                )}
                                onChange={(event, value) => setBanner(value)}
                              />
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={sendBanners}
                              >
                                Upload
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">TRENDING ARTICLES</h5>
                        </div>

                        <div className="card-body">
                          <p className="card-text overflow-auto">
                            <div className={classes.root}>
                              <Autocomplete
                                multiple
                                id="tags-standard"
                                options={bannerData}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[]}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="standard"
                                    label="Select values"
                                    placeholder="Favorites"
                                  />
                                )}
                                onChange={(event, value) => setArticles(value)}
                              />
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={sendArticles}
                              >
                                Upload
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">TRENDING CATEGORIES</h5>
                        </div>

                        <div className="card-body">
                          <p className="card-text overflow-auto">
                            <div className={classes.root}>
                              <Autocomplete
                                multiple
                                id="tags-standard"
                                options={categories}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[]}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="standard"
                                    label="Select values"
                                    placeholder="Favorites"
                                  />
                                )}
                                onChange={(event, value) =>
                                  setCategories(value)
                                }
                              />
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={sendFinalData}
                              >
                                Upload
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-12 col-lg-12 p-2 "
                      style={{ overflow: "auto" }}
                    >
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Links</h5>
                        </div>

                        <div className="card-body">
                          <p className="card-text overflow-auto">
                            <div className={classes.root}>
                              <Autocomplete
                                multiple
                                id="tags-standard"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
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
                              <button type="button" className="btn btn-primary">
                                Upload
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <main id="main">{/* End Blog Section */}</main>
                  {/* End #main */}
                  {/* ======= Footer ======= */}
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

export default Banner;

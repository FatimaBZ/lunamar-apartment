import React from "react";
import axios from "axios";
import Images from "./Images";

class FileUpload extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedFile: "",
  //     responseArray: [],
  //   };
  
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange(event) {
  //   this.setState({
  //     selectedFile: event.target.files,
  //     responseArray:[]
  //   });
  // }

  // onSubmit() {
  //   if (!this.state.selectedFile) {
  //     alert("Please select a file!");
  //     return false;
  //   }
  //   const data = new FormData();

  //   for (let i = 0; i < this.state.selectedFile.length; i++) {
  //     data.append("file[]", this.state.selectedFile[i]);
  //   }

  //   let url = "http://localhost:8888/reactProject/upload.php";

  //   axios
  //     .post(url, data, {
  //       // receive two parameter endpoint url ,form data
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       // then print response status
  //       this.setState({ responseArray: res.data });
  //       this.resetFile();
  //     },error=>{
  //       alert(error);
  //     });
  // }

  // resetFile() {
  //   // Reset file input control
  //   document.getElementsByName("file")[0].value = null;
  // }

  // render() {
  //   return (
  //     <div className="inquiry">
        
  //       <span className="inquiryTitle">Residents can upload images/videos here</span> 

  //         <div className="inquiryform">
  //           <div className="form-group col-md-6">
  //             <label class="inquirylabel">Select File :</label>
  //             <input
  //               type="file"
  //               className="form-control"
  //               multiple
  //               name="file"
  //               onChange={this.handleInputChange}
  //             />
  //           </div>
  //         </div>
  //         <br />
  //         <div className="form-row">
  //           <div className="col-md-6">
  //             <button
  //               type="submit"
  //               className="inquirybutton"
  //               onClick={() => this.onSubmit()}
  //             >
  //               Upload File
  //             </button>
  //           </div>
  //         </div>
  //         <br />
  //         {this.state.responseArray.map((res, i) => (
  //           <div key={i}>
  //               <div  className={'img-alert alert alert-'+res.status}>
  //                 <div>{res.message} : {res.url}</div>
  //                 <img src={res.base64} />
  //               </div>
  //           </div>
  //         ))}
       
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props);

    this.state = {
      image: "",
      responseMsg: {
        status: "",
        message: "",
        error: "",
      },
    };
  }

  // image onchange hander
  handleChange = (e) => {
    const imagesArray = [];
    let isValid = "";

    for (let i = 0; i < e.target.files.length; i++) {
      isValid = this.fileValidate(e.target.files[i]);
      imagesArray.push(e.target.files[i]);
    }
    this.setState({
      image: imagesArray,
    });
  };

  // submit handler
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < this.state.image.length; i++) {
      data.append("images[]", this.state.image[i]);
    }

    axios.post("http://127.0.0.1:8000/api/images", data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            responseMsg: {
              status: response.data.status,
              message: response.data.message,
            },
          });
          setTimeout(() => {
            this.setState({
              image: "",
              responseMsg: "",
            });
          }, 100000);

          document.querySelector("#imageForm").reset();
          // getting uploaded images
          this.refs.child.getImages();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // file validation
  fileValidate = (file) => {
    if (
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg"
    ) {
      this.setState({
        responseMsg: {
          error: "",
        },
      });
      return true;
    } else {
      this.setState({
        responseMsg: {
          error: "File type allowed only jpg, png, jpeg",
        },
      });
      return false;
    }
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12 m-auto">
            <form onSubmit={this.submitHandler} encType="multipart/form-data" id="imageForm">
              <div className="card shadow">
                {this.state.responseMsg.status === "successs" ? (
                  <div className="alert alert-success">
                    {this.state.responseMsg.message}
                  </div>
                ) : this.state.responseMsg.status === "failed" ? (
                  <div className="alert alert-danger">
                    {this.state.responseMsg.message}
                  </div>
                ) : (
                  ""
                )}
                <div className="card-header">
                  <h4 className="card-title fw-bold">
                    Upload Image 
                  </h4>
                </div>

                <div className="card-body">
                  <div className="form-group py-2">
                    <label htmlFor="images">Images</label>
                    <input
                      type="file"
                      name="image"
                      multiple
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {this.state.responseMsg.error}
                    </span>
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-success">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <Images ref="child" />
      </div>
    );
  }
}

export default FileUpload;
import React, { useCallback, useContext, useEffect } from "react";
import { useTus } from "use-tus";
import "./uploading.css";
import { HandleActiveContext } from "../../Context/HandleActive";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function Uploading() {
  const { handleDelete } = useContext(HandleActiveContext);

  const { upload, setUpload } = useTus();
  const handleSetUpload = useCallback(
    (event) => {
      const file = event.target.files.item(0);
      if (!file) {
        return;
      }
      setUpload(file, {
        endpoint: "https://tusd.tusdemo.net/files/",
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
      });
    },
    [setUpload]
  );
  const handleStart = useCallback(() => {
    if (!upload) {
      return;
    } else {
      console.log(upload);
    }
    // Start to upload the file.
    upload.start();
  }, [upload]);

  function handleDell() {
    handleDelete();
    $("form input").val("");
  }

  return (
    <>
      <div className=" container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="parent ms-5 d-flex flex-column flex-md-row align-items-center">
            <div style={{ width: "500px" }} className="item">
              <div className="form-group me-2">
                <label htmlFor="issue" className="text-center d-block issue">
                  issue
                </label>
                <input
                  type="text"
                  id="issue"
                  name="issue"
                  className=" form-control py-3 rounded-4  border border-2 border-dark"
                />
              </div>
            </div>
            <div style={{ width: "160px" }} className="item">
              <div className="form-group me-2 mt-4 ">
                <label htmlFor="choicesOne" className="text-center d-block">
                  Choices
                </label>
                <input
                  type="text"
                  id="choicesOne"
                  name="choicesOne"
                  className=" form-control py-3 rounded-4 border border-2 border-dark"
                />
              </div>
            </div>
            <div style={{ width: "160px" }} className="item">
              <div className="form-group me-2 mt-4 ">
                <label htmlFor="choicesTwo" className="text-center d-block">
                  Choices
                </label>
                <input
                  type="text"
                  id="choicesTwo"
                  name="choicesTwo"
                  className=" form-control py-3 rounded-4 border border-2 border-dark"
                />
              </div>
            </div>
            <div style={{ width: "160px" }} className="item">
              <div className="form-group me-2 mt-4 ">
                <label htmlFor="choicesThree" className="text-center d-block">
                  Choices
                </label>
                <input
                  type="text"
                  id="choicesThree"
                  name="choicesThree"
                  className=" form-control py-3 rounded-4 border border-2 border-dark"
                />
              </div>
            </div>
            <div style={{ width: "300px" }} className="item">
              <div className="form-group me-2 mt-4 ">
                <label htmlFor="note" className="text-center d-block">
                  Note
                </label>
                <input
                  type="text"
                  id="note"
                  name="note"
                  className=" form-control py-3 rounded-4 border border-2 border-dark"
                />
              </div>
            </div>

            <div style={{ width: "100px" }} className="upload">
              <div className="form-group top">
                <label htmlFor="upload">Supporting Document</label>
                <input
                  type="file"
                  onChange={handleSetUpload}
                  className="form-control bg-transparent"
                  id="upload"
                />
                <button
                  type="button"
                  onClick={handleStart}
                  className="bg-transparent"
                >
                  <i class="fa-solid fa-cloud-arrow-up fa-2xl "></i>
                </button>
              </div>
            </div>
          </div>
          <div className="deadline pt-4 pt-md-0">
            <Link to={"calendar"} className="text-decoration-none text-black">
              <h4 className="text-center mt-4 ">Deadline</h4>
              <div className="py-3 w-25 mx-auto item"></div>
            </Link>
          </div>
          <div className="buttns pb-5 d-flex justify-content-center flex-wrap mt-4">
            <div className="">
              <button className="btn mb-3 me-3" onClick={handleDell}>
                Delete
              </button>
            </div>
            <div className="">
              <button className="btn mb-3 me-3">Save</button>
            </div>
            <div className="">
              <button className="btn mb-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

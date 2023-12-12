import React, { useState } from "react";
import "./model.css";
import { useNavigate } from "react-router-dom";
import { useFile } from "../../FIleContext";
const Model = ({ hide }) => {
  const navigate = useNavigate();
  const { setFile, file } = useFile();
  const [name, setName] = useState("");
  const [isOcrChecked, setIsOcrChecked] = useState(false);
  const [activeButton, setActiveButton] = useState("document");
  const [showFileUpload, setShowFileUpload] = useState(true);
  console.log(file);
  const handleUrl = () => {
    if (isOcrChecked) {
      navigate("/ocrpdf");
    } else {
      const fileSection = document.querySelector('.file-upload-section');
      const urlSection = document.querySelector('.url-input-section');
      navigate("/ask");
      if (fileSection.style.display !== 'none') {
        // File upload section is active
        // Add your logic here for file upload
      } else if (urlSection.style.display !== 'none') {
        // URL input section is active
        // Add your logic here for URL input
      }
    }
  
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    setName(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        localStorage.setItem("fileData", e.target.result);
        localStorage.setItem("fileName", file.name);
        localStorage.setItem("fileType", file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSections = (uploadType) => {
    if (uploadType === "document") {
      setShowFileUpload(true);
      setActiveButton("document");
    } else if (uploadType === "url") {
      setShowFileUpload(false);
      setActiveButton("url");
    }
  };

  return (
    <div className="sc-f44562c1-0 boSApP">
      {/* {pdfBlobUrl && (
        <iframe
          src="http://localhost:3000/46853edb-a231-41ae-810c-3990203d474a"
          style={{ width: "100%", height: "500px" }}
          frameBorder="0"
        ></iframe>
      )} */}
      <div
        className="sc-f44562c1-1 cseGOX my-3"
        style={{ maxWidth: "500px", margin: "auto" }}
        data-show=""
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "flex-end",
          }}
        >
          <button
            onClick={hide}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            X
          </button>
        </div>
{/* 
        <h3 className="sc-ebf96a8a-0 kuNXAT">Upload a document</h3> */}
        <button  style={activeButton === "document" ? { background: "#000", color: "#fff" } : {}}  className="rounded-md ml-6 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => toggleSections("document")}>Upload by Document</button>
        <button   style={activeButton === "url" ? { background: "#000", color: "#fff" } : {}} className="rounded-md ml-6 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => toggleSections("url")}>Upload by URL</button>
        <p className="sc-ebf96a8a-1 bYmorg"></p>
        <div>
          <div className="space-y-4" style={{ cursor: "pointer" }}>
          {showFileUpload && (
            <div
              className="h-40 w-full relative text-center file-upload-section"
              style={{ cursor: "pointer" }}
            >
              <input
                className="cursor-pointer hidden"
                style={{ cursor: "pointer" }}
                type="file"
                id="input-file-upload"
                required
                accept="application/pdf"
                onChange={handleFileChange}
              />
              <label
                style={{ cursor: "pointer" }}
                className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300"
                for="input-file-upload"
              >
                <div className="cursor-pointer">
                  <p className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                    Select a document
                  </p>
                  <p className="pointer-events-none font-medium text-sm leading-6 pointer text-gray-600 opacity-75">
                    Max file size 10MB
                  </p>
                </div>
              </label>
            </div>
             )}
            {name.name}

            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>

              <span className="flex-shrink mx-4 uppercase text-gray-600 text-xs">
                or
              </span>

              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            {!showFileUpload && (
            <div className="flex flex-col space-y-2 url-input-section">
              <label className="pointer-events-none font-medium text-base leading-6 pointer opacity-75">
                Import from URL
              </label>
              <div className="sc-1c859520-0 jHAXMR ">
                <input
                  className="sc-1c859520-1 cvZGAj grow text-sm"
                  type="url"
                  placeholder="https://cdn.openai.com/papers/gpt-4.pdf"
                  value=""
                />
              </div>
            </div>
 )}

            <div className="flex">
              <span
                aria-label="This PDF file will not be stored on our servers. 
You will only be able to chat with this document but not view it. 
This document will be removed after 7 days of inactivity."
                data-microtip-position="top"
                role="tooltip"
              ></span>
            </div>
            <div className="flex items-center space-x-3">
              <span
                aria-label="Optical character recognition.
Makes the text of a scanned document searchable."
                data-microtip-position="top"
                role="tooltip"
              >
                <span className="flex items-center">
                  <input
                    id="ocr-doc"
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 accent-orange-600 bg-gray-100 border-gray-300 rounded"
                    checked={isOcrChecked}
                    onChange={(e) => setIsOcrChecked(e.target.checked)}
                  />
                  <label
                    for="ocr-doc"
                    className="cursor-pointer ml-2 text-sm font-medium text-gray-900"
                  >
                    OCR
                  </label>
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center py-1 space-x-3">
              <button
                type=""
                disabled=""
                className="sc-7ff41d46-0 aEnZv"
                onClick={handleUrl}
              >
                Upload
              </button>
              <button
                type="button"
                className="sc-7ff41d46-0 aEnZv !bg-[#f8f5ee] !text-black/75"
                style={{ border: "1px solid rgb(229, 227, 218)" }}
                fdprocessedid="9z47ta"
                onClick={hide}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;

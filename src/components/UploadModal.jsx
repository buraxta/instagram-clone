"use client";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Modal from "react-modal";
import { BsCamera } from "react-icons/bs";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-10 absolute 
          top-56 left-[50%] translate-x-[-50%] bg-white 
          border-2 rounded-md shadow-md border-gray-300 outline-none"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt="image"
                className="w-full max-h-[250px] object-cover cursor-pointer"
              />
            ) : (
              <div className="h-14 w-14 bg-red-200 p-2 border-2 rounded-full cursor-pointer">
                <BsCamera
                  onClick={() => filePickerRef.current.click()}
                  className="h-full w-full text-red-500"
                />
              </div>
            )}

            <input
              type="file"
              onChange={addImageToPost}
              hidden
              ref={filePickerRef}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter your caption"
              className="border-none outline-none w-full text-center mt-3 focus:ring-0"
            />
            <button
              disabled
              className="w-full bg-red-600 text-white p-2 shadow-md
            hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed
            disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;

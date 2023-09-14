"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Upload Modal</h1>
      {!open && <button onClick={() => setOpen(true)}>Open</button>}
      {open && <button onClick={() => setOpen(false)}>Close</button>}
    </div>
  );
};

export default UploadModal;

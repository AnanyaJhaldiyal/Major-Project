//files upload
import './css/UploadFiles.css';
import React, { useState } from "react";
const SingleFileUpload = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
   };
   const handleUpload = async () => {
      if (!selectedFile) {
         alert("Please first select a file");
         return;
      }

      const formData = new FormData();
      formData.append("activityRawFile", selectedFile);

      try {
            const response = await fetch("C:\Users\HP\OneDrive - Graphic Era University\Desktop\projects\Major Project\results", {
            method: "POST",
            body: formData
         });

         if (response.ok) {
            alert("File upload is  successfully");
         } else {
            alert("Failed to upload the file due to errors");
         }
      } catch (error) {
         console.error("Error while uploading the file:", error);
         alert("Error occurred while uploading the file");
      }
   };

   return (
   <div className="reports">
      <h2 className='heading'>UPLOAD YOUR REPORT</h2>
      <input type="file" onChange={handleFileChange} />
      <button className='button' onClick={handleUpload}>Upload</button>
   </div>
   );
};
export default SingleFileUpload;
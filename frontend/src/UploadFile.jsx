import React,{useState}from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import './App.css'

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()
  console.log(message);

  const onUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    await axios.post("http://127.0.0.1:5000/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setMessage("Image Successfully Uploaded");
    navigate('/')

  };
  return (
    <div className="uploadDiv">
      <h2>Upload Image</h2>
      <div className="p-4">
      <input  type="file" name="image" onChange={onUpload} />
      <button className="btn btn-danger" type="submit" onClick={handleUpload}>Upload</button>
      </div> 
    </div>
  );
};

export default UploadFile;

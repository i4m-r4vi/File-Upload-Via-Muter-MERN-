import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "./App";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:5000/images");
        setImages(response.data);
      } catch (error) {
        console.error("Error Fetching images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

  if (loading) {
    return <p className="ms-2">Images Loading</p>;
  }

  return (
    <div>
      <App />
      <div className="imagesView">
        {images.map((img) => {
          return (
            <div>
              <img
                key={img._id}
                src={`http://127.0.0.1:5000/${img.path}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;

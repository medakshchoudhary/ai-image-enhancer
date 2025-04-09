import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {

    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    // call the api
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL)
      setLoading(false);
    } catch (error) {
      console.log(error)
      alert("Error in enhancing the image, Please try again later")
    }

  }

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage.image}
      />
    </>
  );
};

export default Home;

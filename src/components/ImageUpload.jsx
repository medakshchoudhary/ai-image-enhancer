const ImageUpload = (props) => {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    props.UploadImageHandler(file);
  }


  return (
    <div className="bg-white rounded-2xl p-5">
      <label
        htmlFor="fileInput"
        className="text-black w-full block rounded-md cursor-pointer border-2 border-gray-300 border-dashed p-2 text-center hover:border-blue-500 transition-all duration-200 ease-in-out"
      >
        <input
          type="file"
          name="fileInput"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={ShowImageHandler}
        />
        <span className="font-medium text-md text-gray-600">
          Click or drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;

const ImageUpload = () => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
      <label htmlFor="fileInput" className="text-black w-full block rounded-md cursor-pointer border-2 border-gray-300 border-dashed p-4 text-center hover:border-blue-500 transition-all duration-200 ease-in-out">        
        <input type="file" name="fileInput" id="fileInput" className="hidden"/>
        <span className="font-medium text-lg text-gray-600">Click or drag to upload your image</span>
      </label>
    </div>
  );
};

export default ImageUpload;

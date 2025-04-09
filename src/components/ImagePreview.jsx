const ImagePreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black w-full max-w-3xl">
        
        <div className="bg-white rounded-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-center bg-gray-800 text-white p-2">
              Orignal Image
            </h2>
            <img src="" alt="" className="w-full h-full object-cover" />
            <div className="h-[42vh] flex items-center justify-center bg-gray-200">
              No Image Selected
            </div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
            <h2 className="text-2xl font-semibold text-center bg-blue-400 text-white p-2">
              Enhanced Image
            </h2>
            <img src="" alt="" className="w-full h-full object-cover" />
            <div className="h-[42vh] flex items-center justify-center bg-gray-200">
              No Enhanced Selected
            </div>
        </div>
        
    </div>
  )
}

export default ImagePreview
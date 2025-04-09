import Loading from "./Loading"

const ImagePreview = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[50vh] gap-10 text-black w-full max-w-3xl">
        
        <div className="bg-white rounded-xl overflow-hidden">
            <h2 className="text-lg font-semibold text-center bg-gray-800 text-white p-2">
              Orignal Image
            </h2>
            {/* for both props loaded images calculate the height of the the img container - the heading h2 */}
            {props.uploaded ? <img src={props.uploaded} alt="" className="h-full w-full object-cover" /> : <div className="h-full flex items-center justify-center bg-gray-200">
              No Image Selected
            </div>}
            
        </div>
        <div className="bg-white rounded-xl overflow-hidden">
            <h2 className="text-lg font-semibold text-center bg-blue-400 text-white p-2">
              Enhanced Image
            </h2>
            {props.enhanced && !props.loading && (
              <img src={props.enhanced} alt="" className="h-full w-full object-cover" />
            )}

            {props.loading ? <Loading /> : <div className="h-full flex items-center justify-center bg-gray-200">
              No Enhanced Image
            </div>}
            
        </div>
        
    </div>
  )
}

export default ImagePreview
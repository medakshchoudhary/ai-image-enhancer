import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <ImageUpload />
        <ImagePreview />
    </div>
  )
}

export default Home
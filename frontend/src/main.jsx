import { createRoot} from 'react-dom/client'
import './index.css'
import './App.css'
import ImageGallery from './imageGallery.jsx'
import UploadFile from './UploadFile.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ImageGallery />} />
      <Route path='/upload' element={<UploadFile />}/>
    </Routes>
  </BrowserRouter>,
)

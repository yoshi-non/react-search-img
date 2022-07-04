import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './components/ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([])
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref.current.value)

    // API_URL
    const endpointURL = `https://pixabay.com/api/?key=28437216-35ec7f068a32ee6bcda1cb98c&q=${ref.current.value}&image_type=photo`
    // APIを叩く
    fetch(endpointURL).then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.hits)
      setFetchData(data.hits)
    })
  }

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;

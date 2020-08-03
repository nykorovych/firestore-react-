import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setImg] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm></UploadForm>
      <ImageGrid setImg={setImg} ></ImageGrid>
      { selectedImg &&<Modal setImg={setImg} selectedImg={selectedImg}></Modal>}
    </div>
  );
}

export default App;

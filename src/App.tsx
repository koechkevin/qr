import React, {useEffect, useState} from 'react';
import QRCode from 'qrcode';

function App() {
  const [img, setImg] = useState();
  const [value, setValue] = useState(' ');
  useEffect(() => {
    if (value) {
      QRCode.toDataURL(value,  (err, image) => {
        if (err) throw err;
        setImg(image)
      })
    }
  }, [value]);
  const onChange = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100vh'}}>
      <div style={{ width: 400}}>
        <input placeholder="Enter text to generate QR code" style={{ width: '100%', outline: 0, padding: 8, borderRadius: 8, border: '1px solid lightgrey' }} onChange={onChange} value={value}/>
      <img alt="" src={img}/>
      </div>
    </div>
  );
}

export default App;

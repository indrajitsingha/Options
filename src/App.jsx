import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const options = ['cricket', 'hocky', 'football'];
const days = ['weekdays', 'weekend'];
const passion = ['singing', 'Meditation', 'Reading'];
function App() {
  const [DaysData, setDaysData] = useState('');
  const [optionsData, setoptionsData] = useState('');
  const [passionData, setPassionData] = useState([]);
  const hadleSubmit = () => {
    console.log(DaysData, optionsData, passionData);
  };

  return (
    <>
      <p>Options</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {options.map((x) => (
          <div style={{ display: 'flex', gap: '5px' }}>
            <label>{x}</label>
            <input
              type="radio"
              name="options"
              value={x}
              onClick={() => setoptionsData(x)}
            />
          </div>
        ))}
      </div>

      <p>Days</p>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        {days.map((x) => (
          <div style={{ display: 'flex', gap: '5px' }}>
            <label>{x}</label>
            <input
              type="radio"
              name="days"
              value={x}
              onClick={() => setDaysData(x)}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        {passion.map((x) => (
          <div style={{ display: 'flex', gap: '5px' }} key={x}>
            <label>{x}</label>
            <input
              type="checkbox"
              name="days"
              value={x}
              onClick={() =>
                setPassionData((prev) =>
                  passionData.includes(x)
                    ? prev.filter((i) => i !== x)
                    : [...prev, x]
                )
              }
              checked={passionData.includes(x)}
            />
          </div>
        ))}
      </div>
      <button onClick={hadleSubmit}>Submit</button>
    </>
  );
}

export default App;

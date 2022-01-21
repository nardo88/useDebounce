import {useState, useEffect} from 'react'
import useDebounce from './hooks/useDebounce'
import getDataServer from './server/getDataServer'

function App() {
  // state для input
  const [value, setValue] = useState('')
  // state для массива данных
  const [data, setData] = useState([])
  // функция получения данных
  const getData = (value) => {
    getDataServer(value)
    .then(d => setData(d))
  }
  // оборачиваем функцию получения данных в debounce
  const newGetData = useDebounce(getData, 400)
  // функция для input
  const onChange = (e) => {
    setValue(e.target.value)
    newGetData(e.target.value)
  }
  // получение данных при монтировании компоненты
  useEffect(() => {
    newGetData(value)
  }, [])

  return (
    <div className="App">
      <input type="text" className="input" onChange={onChange} value={value} />
      <div className="value">
        <ul>
          {
            data.length ?
            data.map(item => (
              <li key={item._id}>
                {item.name} {item.phone}
              </li>
            ))
            :
            <span>Данных нет</span>
          }
        </ul>
      </div>
    </div>
  )
}

export default App;



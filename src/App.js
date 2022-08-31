import {useState, useEffect} from 'react';
import {Wheel} from 'react-custom-roulette';
import ModalJF from './component/Modal';


const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [winner, setWinner] = useState('');
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState([
    { option: 'Jonathan' },
    { option: 'James' },
    { option: 'Suzy' },
  ]);
  const [defaultData, setDefaultData] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  const valueMush = () => {
    let strins = "";
    console.log(data);

    if (!data[0].options?.includes('\n'))
      for(let i in data)  {
        strins += data[i].option + ",\n";
      }
    else
      for(let i in data)  {
        strins += data[i].option + ",";
      }
    strins = strins.replace(/^\s*[\r\n]/gm, '');
    strins = strins.replace(/,\s*$/, "");
    return strins;
      
  }

  const handleChange = (e) => {
    e.preventDefault();
    setDefaultData(e.target.value);
    let newData = [];
    for(let i in e.target.value.split(',')) {
      newData.push({ option: e.target.value.split(',')[i] });
    }
    setData(newData); 
    
  }



  const handleClose = async () => {
    let newData = data;
    newData.splice(prizeNumber, 1);

    await setData(newData);

    setDefaultData(valueMush());
    setVisible(false);

  }
  const handleShow = () => setVisible(true);

  useEffect(() => {
    setDefaultData(valueMush());
    console.log(defaultData);
  }, []);

  return (
    <>
    <span onClick={handleSpinClick}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        backgroundColors={['green', 'blue', 'red', 'yellow']}
        textColors={['#ffffff']}
        innerRadius={10}


        onStopSpinning={(e) => {
          //alert(data[prizeNumber].option +' won!');
          setWinner(data[prizeNumber].option);
          handleShow();
          
          // if(window.confirm('Do you want to remove them from the list?')){
          //   let newData = data;
          //   newData.splice(prizeNumber, 1);
          //   setData(newData);
          // }
          setMustSpin(false);
        }}
      />
      </span>
      <textarea name='new' type="textarea" value={defaultData} rows={10} onChange={handleChange}/>
      <ModalJF visible={visible} handleClose={handleClose} winner={winner}/>
    </>
  )
}

export default App;

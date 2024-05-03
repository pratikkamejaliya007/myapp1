import React , {useState} from 'react'

function Hoc(Original) {

    function Update(){
        const [money,setMoney]=useState(10)
        
        function increment(){
            setMoney(money * 2)
        }

        return <Original money={money} handleIncrease={increment} />

    }

  return  Update
  
}

export default Hoc

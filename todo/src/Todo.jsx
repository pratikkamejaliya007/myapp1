import React, { useState, useEffect } from 'react';

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [change, setChange] = useState(false);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

    function add() {
        if (inputValue.trim() !== '') {
            let newdata = {
                Task: inputValue
            };
            if (change) {
                
                const updatedData = [...data];
                updatedData[selectedTaskIndex].Task = inputValue;
                setData(updatedData);
            } else {
                setData([...data, newdata]);
            }
            setInputValue('');
            setChange(false);
            setSelectedTaskIndex(null); 
        }
    }

    function up(index) {
        setChange(true);
        setSelectedTaskIndex(index); 
        setInputValue(data[index].Task); 
    }

    useEffect(() => {
        sessionStorage.setItem('Todo', JSON.stringify(data));
    }, [data]);

    function Delete(index){
        setData(data.filter((el,i)=> i !== index))
    }

    return (
        <>
            <center>
                <div style={{ margin: '10px' }}>
                    <input
                        type="text"
                        value={inputValue}
                        placeholder="Enter Task"
                        onChange={(e) => setInputValue(e.target.value)}
                        className="input_1"
                    />
                    <button onClick={add}>{change ? <>Update</> : <>Add</>}</button>
                </div>
            </center>

            <center>
                <div style={{width:'300px'}}>
                    {data &&
                        data.map((el, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
                                <h4 style={{paddingInline:'20px'}}>{el.Task}</h4>
                                <button onClick={() => up(i)} style={{ background: '#087af4' }}>
                                    Update
                                </button>
                                <button style={{ background: 'red' }} onClick={()=> Delete(i)}>Delete</button>
                            </div>
                        ))}
                </div>
            </center>
        </>
    );
}

export default Todo;

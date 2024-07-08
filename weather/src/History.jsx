import React from 'react'
import { useSelector } from 'react-redux'
import WeatherWidget from './WeatherWidget'

function History() {
    const value = useSelector(state => state.history)

    return (
        <div className="flex flex-wrap justify-center p-4 gap-4 md:justify-between">
            {
                value.map((el, index) => (
                    <WeatherWidget key={index} data={el} />
                ))
            }
        </div>
    )
}

export default History

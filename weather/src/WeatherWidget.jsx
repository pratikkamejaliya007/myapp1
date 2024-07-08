import React from 'react';
import { WiDayRain, WiBarometer, WiStrongWind, WiHumidity, WiDaySunny, WiRaindrop, WiSmoke } from 'react-icons/wi';
import 'tailwindcss/tailwind.css';
import { useSelector } from 'react-redux';

const WeatherWidget = () => {

    const data=useSelector(state => state.Weather.value)

    const hour=new Date()


  return (<>
    {
        data ? (
            <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl p-8 text-white max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <p className="text-xl">{data.weather[0].description}</p>
        </div>
        <div>
          <p className="text-6xl font-bold">{data.main.temp}&deg;</p>
          <p className="text-lg">Max: {data.main.temp_max}&deg; Min: {data.main.temp_max}&deg;</p>
        </div>
      </div>
      <div className="my-4 flex flex-wrap justify-center">
        <WiDayRain className="text-8xl" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-2 rounded-lg">
          <WiSmoke className="mx-auto text-4xl" />
          <p className="font-bold">{data.wind.deg}</p>
          <p>air quality</p>
        </div>
        <div className="text-center p-2 rounded-lg">
          <WiBarometer className="mx-auto text-4xl" />
          <p className="font-bold">{data.main.pressure} hpa</p>
          <p>pressure</p>
        </div>
        <div className="text-center p-2 rounded-lg">
          <WiDaySunny className="mx-auto text-4xl" />
          <p className="font-bold">{data.visibility / 1000} Km</p>
          <p>uv</p>
        </div>
        <div className="text-center  p-2 rounded-lg">
          <WiRaindrop className="mx-auto text-4xl" />
          <p className="font-bold">{data.main.humidity / 10} mm</p>
          <p>precipitation</p>
        </div>
        <div className="text-center  p-2 rounded-lg">
          <WiStrongWind className="mx-auto text-4xl" />
          <p className="font-bold">{data.wind.speed} km/h</p>
          <p>speed wind</p>
        </div>
        <div className="text-center  p-2 rounded-lg">
          <WiHumidity className="mx-auto text-4xl" />
          <p className="font-bold">{data.visibility / 1000} km</p>
          <p>visibility</p>
        </div>
      </div>
    </div>
        ) : (
            <>
            Empty
            </>
        )
    }
    </>
  );
};

export default WeatherWidget;

import './body.css'
import React from 'react'
import { useState } from 'react'

// Vazifa:
// - Shahar nomi input
// - Fake weather ma'lumotlari
// - Ob-havo ko'rsatkichlari
// - LocalStorage da oxirgi qidiruv

// O'rganasiz: API simulation, localStorage

function Body() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [saveAllElements, setSaveAllElements] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const weather = Math.floor(Math.random() * 100);
        setCity(e.target[0].value);
        setWeatherData(weather);
        setSaveAllElements([...saveAllElements, {city: e.target[0].value, weather: weather}])
        setCity("");
        setWeatherData("");
    }
  return (
    <div className="weather-container">
        <h1 className="weather-title">🌤️ Ob-havo Ma'lumotlari</h1>
        
        <form onSubmit={handleSubmit} className="weather-form">
            <div className="form-group">
                <label htmlFor="city" className="form-label">Shahar nomi:</label>
                <input 
                    type="text" 
                    id="city"
                    className="form-input"
                    placeholder="Masalan: Toshkent, Samarqand..."
                    onChange={(e) => setCity(e.target.value)} 
                    value={city} 
                />
            </div>
            <button type='submit' className="submit-btn">Ob-havoni Tekshirish</button>
        </form>
        
        <div className="weather-history">
            <h2 className="history-title">📊 Qidiruv Tarixi</h2>
            {saveAllElements.length > 0 ? (
                <ul className="weather-list">
                    {saveAllElements.map((item, index) => {
                        return (
                            <li key={index} className="weather-item">
                                <span className="city-name">🏙️ {item.city}</span>
                                <span className="weather-temp">{item.weather}°C</span>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p className="empty-message">Hali hech qanday qidiruv amalga oshirilmagan...</p>
            )}
        </div>
    </div>
  )
}

export default Body

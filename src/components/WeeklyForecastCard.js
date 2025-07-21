import React from 'react';

const WeeklyForecastCard = ({ forecast }) => {
    return (
        <div className="bg-gray-900 rounded-2xl p-4 text-white mt-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-3">7 Day Forecast</h3>
            <div className="flex flex-col gap-3">
                {forecast.map((day, idx) => (
                    <div key={idx} className="flex justify-between text-gray-400">
                        <span>{day.date}</span>
                        <span>{day.temp}°</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklyForecastCard;

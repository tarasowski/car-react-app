import React, { useState, useEffect } from 'react';

function AllCars() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getCars() {
            setLoading(true)
            const result = await fetch("https://freetestapi.com/api/v1/cars?limit=50")
            const data = await result.json()
            setCars(data)
            setLoading(false)
        }

        getCars();
    }, []);

    return (
        <div>
            Alle Autos
            {loading === true ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', background: 'none', display: 'block' }} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#000" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </div>
                : ""}
            <ul>
                {cars.map((car, index) =>
                    <li key={index}>{car.make}: {car.year}: {car.model}
                    </li>)}
            </ul>
        </div>
    );
}

export default AllCars;
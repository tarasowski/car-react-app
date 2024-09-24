/*

[
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "color": "Silver",
    "mileage": 20000,
    "price": 25000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 169,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Keyless Entry"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/cccccc"
  }
]

*/
function CarProfile({ results }) {
    const carProfile = results[0]
    console.log("my car profile component wird geladen")
    return (
        <div>
            <p>Hersteller: {carProfile?.make} </p>
            <p>Modell: {carProfile?.model} </p>
            <p>Jahr: {carProfile?.year} </p>
            <img src={carProfile?.image} />
        </div>
    )
}
export default CarProfile
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Planets = (props) => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

useEffect(() =>{
    setIsLoading(true)

    axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            console.log(res);
            setPlanet(res.data)
            setError('')
        })
        .catch((err) =>{
            setError(err.message)
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
}, [id])

if (error !== ''){
    return (
        <div>
            <h1>These are not the droids you are looking for</h1>
            <img src="https://i.imgflip.com/5xlt6l.jpg?a466344" alt="Photo of Obi-Wan-Kenobi" />
        </div>
    )
}

if (planet === null) {
    return <h1>Please Wait</h1>
}

const { name, climate, surface_water ,terrain, population } = planet

  return (
    <div className="text-center">
        <h2>{name}</h2>
        <h4>Climate: {climate}</h4>
        <h4>Terrain: {terrain}</h4>
        <h4>Surface Water: {surface_water}</h4>
        <h4>Population: {population}</h4>
    </div>
  );
};

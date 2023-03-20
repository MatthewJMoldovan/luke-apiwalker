import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Peoples = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() =>{
        setIsLoading(true)
    
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                console.log(res);
                setPerson(res.data)
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
    
    if (person === null) {
        return <h1>Please Wait</h1>
    }

    const { name, mass, height, hair_color, birth_year } = person

    return (    
    <div className="text-center">
    <h2>{name}</h2>
    <h4>Birth Year: {birth_year}</h4>
    <h4>Height: {height} cm</h4>
    <h4>Weight: {mass} kg</h4>
    <h4>Hair Color: {hair_color}</h4>
</div>
);
}
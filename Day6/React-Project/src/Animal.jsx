import React from 'react'
import { useParams } from 'react-router-dom'

function Animal() {
    const {name} =useParams();

    const animalInfo={
        dog: "Dogs are friendly are loyal.",
        cat: "Cats are Independent and Playful.",
        rabbit: "Rabbits are cute and fluffy."
        };
        
        const info= animalInfo[name] || "Animal not Fount";
  return (
    <div>
        {/* <h2>{name}</h2> */}
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <p>{info}</p>
    </div>
  )
}

export default Animal
import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./tindercards.css";

export function TinderCards() {
  const [people] = useState([
    {
      name: "sumit thapa",
      age: 32,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },
    {
      name: "sonali sharma",
      age: 24,
      ImageUrl:
        "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },

    {
      name: "Maitri Thapa ",
      age: 21,
      ImageUrl:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    },
    {
      name: "Monika Karki",
      age: 24,
      ImageUrl:
        "https://images.pixexid.com/green-silhouette-mobile-wallpaper-hd-scpc9x4o.jpeg?h=703&q=70",
    },
    {
      name: "Shivani",
      age: 31,
      ImageUrl:
        "https://thumbs.dreamstime.com/b/footbridge-forest-10477720.jpg",
    },
    {
      name: "Komal",
      age: 29,
      ImageUrl: "https://pixlr.com/images/index/remove-bg.webp",
    },
    {
      name: "Richa",
      age: 26,
      ImageUrl: "http://webmeup.com/upload/blog/lead-image-105.png",
    },
    {
      name: "Parul",
      age: 19,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },

    {
      name: "Parul",
      age: 19,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },
    {
      name: "Parul",
      age: 19,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },

    {
      name: "Parul",
      age: 19,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },

    {
      name: "Parul",
      age: 19,
      ImageUrl:
        "https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=",
    },
  ]);

  return (
    <div className="tinder-card">
      <div className="tinderCard-container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.ImageUrl})` }}
              >
                <h3>Name : {person.name}</h3>
                <p>Age : {person.age}</p>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;

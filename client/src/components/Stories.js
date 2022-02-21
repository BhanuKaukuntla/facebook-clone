import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/bike.jpg", name: "Pant" },
    { id: 2, image: "/images/apple.jpg", name: "Rohit" },
    { id: 3, image: "/images/krish.jpeg", name: "Virat" },
    { id: 4, image: "/images/hole.jpg", name: "Dhoni" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;

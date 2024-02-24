import React, { useContext, useEffect, useState } from "react";
import slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanetContext from "../data/PlanetData";
function ResidentCard({ profileUrl }) {
  const [data, setData] = useState({});
// const [loader,setLoader]=useState(true)
  useEffect(() => {
    if (!profileUrl) return;

    fetch(profileUrl)
      .then((res) => res.json())
      .then((data) => {
        // setLoader(false)
        setData(data);
        console.log("data", data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [profileUrl]);

  return (
    // <div className="card resident-card dark:bg-gray-800 border  bg-sky-700 border-black dark:border-gray-700 rounded-lg shadow-md overflow-hidden mb-6 min-w-64 " style={{ width: "18rem" }}>
    //   <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className="card-img-top size-16 rounded-full" alt=""/>
    //   <div className="card-body p-4 text-white ml-4">
    //     <h5 className="card-title text-xl font-semibold mb-2">Name: {data.name}</h5>
    //     <p className="card-textdark:text-gray-400 mb-2">Height: {data.height}</p>
    //     <p className="card-textdark:text-gray-400 mb-2">Mass: {data.mass}</p>
    //     <p className="card-text dark:text-gray-400">Gender: {data.gender}</p>
    //   </div>
    // </div>


<div className="w-3/4 m-auto ">
      <div className="mt-20 ">
      
      {profileUrl.length==0?"<h1>No resident ON this planet</h1>": <div  className="bg-white card-con h-[450px] text-black rounded-xl overflow-hidden shadow-md">

<div className="h-56  border border-slate-950 rounded-t-xl bg-indigo-500 flex justify-center items-center ">
  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOBAAAgIBAgIHBgQEBwAAAAAAAAECAwQFESFREhMxQWFxkQYUIiMyoUKBsfFiweHwFTNDUlNygv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDegAAAAAAAAAAAdjGUvpi5eS3A4D0dNy4umxL/AKs83uns+HmAAAAAAAAAAAAAAAAAAAAA+oQlZOMIJyk3wSA+Vx7O8s8TRrbdpZD6uHJfUWOnadDFSnPaVz7Xy8ieBEo0/Fp+mpN858WS0klslsvAADp8TrhYtpwjJeK3PoAV2To+NbxrTql/C+HoU+ZgXYj3nFSh3Tj2GpONJpprdPtQGNBa6ppnUp346+X+KHLy8CqAAAAAAAAAAAAAABodHwuoq66xfMmuH8KKnTMf3nLjGX0R+KXkjUAAAAAAAAAAAAM3q+F7td04L5U36PkaQ8M3HWTjWVPta+F8mBkwdaaezWzXBnAAAAAAAAAAAAvfZ+ram219rl0fT9y2IOix6OnV+Lb+5OAI6cR0AAAAAAAAAAAMvqtXVZ9q7pPpL8/7ZDLT2gSWZB861+rKsAAAAAAAAAAANLoslLT6/BtP1JxUez1q6q2nvUul6/sW4BHTiOgAAAAAAAAAABn/AGgaeZBLur/myrJeqW9bn3NdifRX5EQAAAAAAAAAAAJWnZHu2XCbfwPhLyZqTGF9oud1lax7ZfHH6W+9AWqOnEdAAAAAAAAAEbPyFjYs7N/i22j4skSaim20ku1szWq5vvd+0P8AKhwj4+IELzOAAAAAAAAAAAAAOwk4SUotqSe6a7jgA0Om6pHISruajd9pFkYwsMTVr6No2fNgufavzA0gINGq4lvbPq3ynw+5LjbXNbwnGS8GB9g5uuZ52ZNFS3sthHzkB6nzOcYQcpyUYrtbZW5OtUQTVEXbL0RT5WZdlSfWy+HuiuxAStT1N5CdVO6q733y/oVoAAAAAAAAAAAAAAAOxTlLZJt8kuJYYOlWZCVl29dfdzkXmPi040dqa0vHv9QM7DTMycOkqWlylwbI04ShLozi4y5NbM2R53UVXLo21xmvFAY8Lh2Ght0XGn9DnX5Pdfcjy0KX4chbeMAKfpPm/U4W3+BXf88PRnpDQV/qXv8A8xApT2x8W/Je1UG+cttl6mgo0rFqe7r6cl3ze/2JsYqMUopJLuQGUvwsijfrKpJL8S4r1PA2TIOXpdGQm4rq5/7or9UBmgSMvEtxLOjbHg/pkuxkcAAAAAAAAB5lzpGnJqORkLfvhBr7kTScT3rI3mvlw4y8eSNLsgC4HQAAAAAAAAAAAAAADzuphdW67IqUX2pma1DDnh27PeVcuMZbfY1J4ZePDJolVPv7HyYGSB9WVyqslXYtpRezR8gAAAAAGm0auMMCtxXGW7b8ScwAOAADoAAAAAAAAAAAAAAAM/7QVxjkwnFcZw+L8irAAAAD/9k="className="h-44 w-44 rounded-full" />
</div>

<div className="flex flex-col justify-center items-center gap-4 p-4">
  <p className="text-xl font-semibold">Name: {data.name}</p>
  <p className="text-xl font-semibold">height: {data.height}</p>
  <p className="text-xl font-semibold">Mass: {data.mass}</p>
  <p className="text-xl font-semibold"> Gender :{data.gender}</p>
</div>
</div>} 
         
       
       
      </div>
    </div>
  );
}

export default ResidentCard;

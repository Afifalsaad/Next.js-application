"use client";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";

// export default function ImgMediaCard({ data }) {
//   console.log(data);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   return (
//     <Card sx={{ maxWidth: 345, backgroundColor: "#1e293b" }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography
//           gutterBottom
//           sx={{ color: "white" }}
//           variant="h5"
//           component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" sx={{ color: "#c9cbd0" }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from "react";

const Card = ({ data }) => {
  
  // Default values in case data is missing
  const name = data?.name || "Animal Name";
  const description = data?.description || "Description not available";
  const imageUrl = data?.image || "/placeholder-image.jpg";
  const species = data?.species || "Species not available";
  const habitat = data?.habitat || "Habitat not available";
  const conservationStatus = data?.conservationStatus || "Status unknown";
  
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
            e.target.onerror = null; // Prevent infinite loop if placeholder also fails
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm opacity-75">{species}</p>
        <p className="text-xs">{habitat}</p>
        <p className="text-sm mt-2">{description.substring(0, 100)}...</p>
        <div className="card-actions justify-between items-center mt-2">
          <span className={`badge ${conservationStatus === 'Endangered' ? 'badge-error' : conservationStatus === 'Vulnerable' ? 'badge-warning' : 'badge-info'}`}>
            {conservationStatus}
          </span>
          <button className="btn btn-primary btn-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

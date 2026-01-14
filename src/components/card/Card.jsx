"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export function ImgCard({ data }) {
  console.log(data._id);
  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor: "#0c1425" }}>
        <div className="relative h-55 w-full">
          <Image alt={data.name} src={data.image} fill></Image>
        </div>

        <CardContent>
          <div className="flex justify-between">
            <div>
              <Typography
                gutterBottom
                sx={{ color: "white" }}
                variant="h5"
                component="div">
                {data.name}
              </Typography>
            </div>
            <div className="px-3 py-2 text-center rounded-full">
              <h2
                className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                  data.conservationStatus === "Extinct"
                    ? "bg-gray-800 text-white"
                    : data.conservationStatus === "Endangered"
                    ? "bg-red-500 text-white"
                    : data.conservationStatus === "Vulnerable"
                    ? "bg-orange-400 text-white"
                    : data.conservationStatus === "Near Threatened"
                    ? "bg-yellow-300 text-black"
                    : data.conservationStatus === "Least Concern"
                    ? "bg-green-500 text-white"
                    : "bg-gray-400 text-white"
                }`}>
                {data.conservationStatus}
              </h2>
            </div>
          </div>

          <Typography
            variant="body2"
            sx={{
              color: "#c9cbd0",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
            }}>
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link href={`animals/${data._id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

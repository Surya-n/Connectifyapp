import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PostCard = ({ name, image, description }) => {
  const [like, setLike] = useState(0); // State to track the number of likes
const [comment,setcomment]=useState("");
  // Function to handle the Like button click
  const handleLike = () => {
    setLike(like + 1); // Increment the like count
  };
  const handlecomment=()=>{
    setcomment()

  }

  return (
    <Card style={{ maxWidth: 550, margin: "20px auto" }}>
      {/* Card Image */}
      <CardMedia
        component="img"
        height="450" // Adjust height as needed
        image={image}
        alt={`${name}'s post`}
      />

      {/* Card Content */}
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px" }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Card Actions */}
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleLike}
        >
          Love {like}
        </Button>
        <Button size="small" variant="outlined" color="secondary" onClick={handlecomment}>
          Comment
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;

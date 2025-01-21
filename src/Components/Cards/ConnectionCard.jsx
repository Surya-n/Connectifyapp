import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ConnectionCard = ({ name }) => (
  <Card style={{ maxWidth: 300, margin: "10px" }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {name}
      </Typography>
      <Typography color="text.secondary">
        Mutual Friends: 5
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" color="primary">
        Add
      </Button>
    </CardActions>
  </Card>
);

export default ConnectionCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Axios = () => {
  const [Data, setData] = useState([]);

  const config = {
    headers: {
      "X-Auth-Token":
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg4NDZlZjQ3M2Q2ZTVhZjcyNzU3ODg4ODhhMTgyNTZkIn0.eyJpc3MiOiJrYXpvbyIsImlkZW50aXR5X3NpZyI6InV1WkRQeDNUZDZNS3YxRU9vV3VNaWktUEplU3pWRlVRQTB2QktScnlDTVUiLCJhY2NvdW50X2lkIjoiY2U5MTFjNWFiMjkzZmZjNmJiZWFjOTUyY2Y4NzA2OTMiLCJvd25lcl9pZCI6IjM2NTUyYWNlNjM3MDIxNDE2ZmUxOTAyODAxNDhiNmZlIiwibWV0aG9kIjoiY2JfdXNlcl9hdXRoIiwiZXhwIjoxNjg5OTM1MDk0fQ.ZEI7J_Te37hMK66z4VQ-609vVwnSmO0l1rjuf6LCXozBN2FEeU6H848vReenlib7kcjKNrkOJAQuh7cRt6c5ZEiTnie8ws9_0ZZjcU6ke6n3sgIg2gFKqS2NHq7i98xgRWBKFr5NZmXQUfTCcyN2KQr-GHL9WkCUqK8JhE02H0UHTXIEjmAIoEBh8nk-Tc5mz0NmzqC1v3zEfxoK3u6kTKBlx7EqKA7TQ3pW5FBDqqAAvLExzhTJ3Izpiw4nAUVTBWt9y6153oJUg-_ZCFWf4Ko7b1_458cYDf6nws7sFNHrUin1QUud7d_48waUNOymbHvw8biId6NEXWAIF__eNQ",
      "content-type": "application/json",
    },
  };
  const url =
    "https://devpbx.cobrasoft.org:8443/v2/accounts/ce911c5ab293ffc6bbeac952cf870693/users";

  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        return res
    }).then((res)=>{

        setData(res.data.data);
    })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {Data.map((x)=>{return <h1> {x.email}</h1>})}

      <div>

      <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        {Data.map((z)=>{ return(
        <Typography gutterBottom variant="h5" component="div">
          <p>{z.email}</p>
        </Typography>)
})}
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      </div>
    </>
  );
};

export default Axios;

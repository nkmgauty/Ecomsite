import React from "react";
import "../Assets/CSS/Compocard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import card1image from "../Assets/Images/card1img.png";
import card2image from "../Assets/Images/card2img.png";
import card3image from "../Assets/Images/card3img.png";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ScaleIcon from "@mui/icons-material/Scale";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Compocard = () => {
  

  return (
    <>
      <div className="card_position">
        <div className="card_component">
          <Card className="cardmain" sx={{ maxWidth: 345 }}>
            <div>
              <CardContent>
                <Typography
                  className="cardhead1"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women
                </Typography>
                <Typography
                  className="card_submenu"
                  variant="body2"
                  color="text.secondary"
                >
                  <p>Fashion</p>
                  <p>Accessories</p>
                  <p>Jewelery</p>
                </Typography>
              </CardContent>
            </div>
            <div>
              <CardMedia
                component="img"
                alt="card1"
                height="140"
                image={card1image}
                className="card1img"
              />
            </div>
          </Card>
        </div>
        <div className="card_component">
          <Card className="cardmain" sx={{ maxWidth: 345 }}>
            <div>
              <CardContent>
                <Typography
                  className="cardhead1"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women
                </Typography>
                <Typography
                  className="card_submenu"
                  variant="body2"
                  color="text.secondary"
                >
                  <p>Fashion</p>
                  <p>Accessories</p>
                  <p>Jewelery</p>
                </Typography>
              </CardContent>
            </div>
            <div>
              <CardMedia
                component="img"
                alt="card1"
                height="140"
                image={card2image}
                className="card1img"
              />
            </div>
          </Card>
        </div>

        <div className="card_component">
          <Card className="cardmain" sx={{ maxWidth: 345 }}>
            <div>
              <CardContent>
                <Typography
                  className="cardhead1"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women
                </Typography>
                <Typography
                  className="card_submenu"
                  variant="body2"
                  color="text.secondary"
                >
                  <p>Fashion</p>
                  <p>Accessories</p>
                  <p>Jewelery</p>
                </Typography>
              </CardContent>
            </div>
            <div>
              <CardMedia
                component="img"
                alt="card1"
                height="140"
                image={card3image}
                className="card1img"
              />
            </div>
          </Card>
        </div>

        <div className="card_component">
          <Card className="cardmain" sx={{ maxWidth: 345 }}>
            <div>
              <CardContent>
                <Typography
                  className="cardhead1"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Women
                </Typography>
                <Typography
                  className="card_submenu"
                  variant="body2"
                  color="text.secondary"
                >
                  <p>Fashion</p>
                  <p>Accessories</p>
                  <p>Jewelery</p>
                </Typography>
              </CardContent>
            </div>
            <div>
              <CardMedia
                component="img"
                alt="card1"
                height="140"
                image={card1image}
                className="card1img"
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="feature_card">
        <div className="feature_card_content">
          <SupportAgentIcon className="feature_icon" />
          <h1>24X7 Free Support</h1>
          <p>Online Support 24/7</p>
        </div>
        <div className="feature_card_line"></div>
        <div className="feature_card_content">
          <MonetizationOnIcon className="feature_icon" />
          <h1>Easy Return/Exchange</h1>
          <p>100% Secure Payment</p>
        </div>
        <div className="feature_card_line"></div>
        <div className="feature_card_content">
          <LocalShippingIcon className="feature_icon" />
          <h1>Free India Shipping</h1>
          <p>On Order Over ₹1000</p>
        </div>
        <div className="feature_card_line"></div>
        <div className="feature_card_content">
          <CardGiftcardIcon className="feature_icon" />
          <h1>Special Gift Cards</h1>
          <p>Give The Perfect Gift</p>
        </div>
      </div>
      <div className="feature_card_line_position">
        <div className="feature_card_endline"></div>
      </div>



      <div className="product_main">
        <div className="product_heading">
          <h1>Top Product</h1>
        </div>
        <div className="product_category">
          <p>Featured</p>
          <p>Bestseller</p>
          <p>Latest</p>
        </div>

        <div className="product_card">
          <div>
          
            <Card className="card_main" sx={{ maxWidth: 250 }}>
              <div className="prodimg1_position">
              <CardMedia
                className="prod2img"
                sx={{ height: 300 }}
                title="product2"
              />
              </div>
              <CardContent>
                <div className="card_model">
                <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                  Fashion Point, Smile
                </Typography>
                <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                  Model 3583958304
                </Typography>
                </div>
                <Typography sx={{fontSize:20}} gutterBottom variant="h5" component="div">
                  Girls Lehenga Choli
                </Typography>
                </CardContent>
                <div className="prod_rate">
                <Typography variant="body1" color="text.secondary">
                  ₹90.00
                </Typography>
              
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
              </Stack>
              </div>
              <div className="prod_button_position">
              <Button  className="prod_button1" size="small">Add to cart</Button>
              <Button  className="prod_button2" size="small">
                <ScaleIcon />
              </Button>
              <Button className="prod_button2" size="small">
                <VisibilityIcon />
              </Button>
              </div>
            </Card>
          </div>

          <div>
          
          <Card className="card_main" sx={{ maxWidth: 250 }}>
            <div className="prodimg1_position">
            <CardMedia
              className="prod3img"
              sx={{ height: 300 }}
              title="product3"
            />
            </div>
            <CardContent>
              <div className="card_model">
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Fashion Point, Smile
              </Typography>
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Model 3583958304
              </Typography>
              </div>
              <Typography sx={{fontSize:20}} gutterBottom variant="h5" component="div">
                Girls Lehenga Choli
              </Typography>
              </CardContent>
              <div className="prod_rate">
              <Typography variant="body1" color="text.secondary">
                ₹90.00
              </Typography>
            
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
            </div>
            <div className="prod_button_position">
            <Button  className="prod_button1" size="small">Add to cart</Button>
            <Button  className="prod_button2" size="small">
              <ScaleIcon />
            </Button>
            <Button className="prod_button2" size="small">
              <VisibilityIcon />
            </Button>
            </div>
          </Card>
        </div>

        <div>
          
          <Card className="card_main" sx={{ maxWidth: 250 }}>
            <div className="prodimg1_position">
            <CardMedia
              className="prod1img"
              sx={{ height: 300 }}
              title="product1"
            />
            </div>
            <CardContent>
              <div className="card_model">
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Fashion Point, Smile
              </Typography>
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Model 3583958304
              </Typography>
              </div>
              <Typography sx={{fontSize:20}} gutterBottom variant="h5" component="div">
                Girls Lehenga Choli
              </Typography>
              </CardContent>
              <div className="prod_rate">
              <Typography variant="body1" color="text.secondary">
                ₹90.00
              </Typography>
            
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
            </div>
            <div className="prod_button_position">
            <Button  className="prod_button1" size="small">Add to cart</Button>
            <Button  className="prod_button2" size="small">
              <ScaleIcon />
            </Button>
            <Button className="prod_button2" size="small">
              <VisibilityIcon />
            </Button>
            </div>
          </Card>
        </div>

        <div>
          
          <Card className="card_main" sx={{ maxWidth: 250 }}>
            <div className="prodimg1_position">
            <CardMedia
              className="prod4img"
              sx={{ height: 300 }}
              title="product4"
            />
            </div>
            <CardContent>
              <div className="card_model">
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Fashion Point, Smile
              </Typography>
              <Typography sx={{fontSize:10}} variant="body2" color="text.secondary">
                Model 3583958304
              </Typography>
              </div>
              <Typography sx={{fontSize:20}} gutterBottom variant="h5" component="div">
                Girls Lehenga Choli
              </Typography>
              </CardContent>
              <div className="prod_rate">
              <Typography variant="body1" color="text.secondary">
                ₹90.00
              </Typography>
            
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
            </div>
            <div className="prod_button_position">
            <Button  className="prod_button1" size="small">Add to cart</Button>
            <Button  className="prod_button2" size="small">
              <ScaleIcon  />
            </Button>
            <Button className="prod_button2" size="small">
              <VisibilityIcon />
            </Button>
            </div>
          </Card>
        </div>

        </div>
      </div>
    </>
  );
};

export default Compocard;

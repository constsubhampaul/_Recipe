import React from 'react';
import {Card,CardBody,CardTitle,CardImg,CardSubtitle} from 'reactstrap';
function RenderCard({item}){
  return(
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
        </CardBody>
        </Card>
  );
}
  function Home(props){
      return(
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md m-1">
              <RenderCard item={props.dish} />
              </div>
              <div className="col-12 col-md m-1">
              <RenderCard item={props.promotion} />
              </div>
              <div className="col-12 col-md m-1">
              <RenderCard item={props.leader} />
              </div>
              </div>
              <h4>Home</h4>
              </div>
      );
  }
export default Home;
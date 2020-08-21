import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
    function RenderDish({dish}){
      if(dish!=null){
        return(
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
        </div>
    );
        }
        else {
            return (<div></div>);
        }
    }
    function RenderRecipes({recipes}){
      if(recipes!=null){
      const rcps=recipes.map((recips) => {
        return(
          <ul key={recips.id} className="list-unstyled">
        <li>
          <p>{recips.recipe}</p>
          </li>
          </ul>
        );
      });
      return(
      <div className="col-12 col-md-5 m-1">
        <h4>Recipe</h4>
        {rcps}
        </div>
      );
    }
    else{
      return(
        <div />
      );
    }
  }
    const DishDetail=(props)=>{
      if(props.dish!=null){
      return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
        <div className='row'>
            <RenderDish dishes={props.dish} />
            <RenderRecipes recipes={props.recipes} />
        </div>
        </div>
    );
    }
    else{
      return(
        <div />
      );
    }
  }
    export default DishDetail;
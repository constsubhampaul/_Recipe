import React,{Component} from 'react';
import Menu from './menuComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './homeComponent';
import DishDetail from './dishdetailComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import {DISHES} from '../shared/dishes';
import {RECIPES} from '../shared/recipes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import { Switch,Route,Redirect } from 'react-router-dom';
class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      recipes:RECIPES,
      leaders:LEADERS,
      promotions:PROMOTIONS
    };
  }  
   
  render(){
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
      );
    }
    const DishwithId=({match})=>{
      return (
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      recipes={this.state.recipes.filter((recipe)=>recipe.dishId===parseInt(match.params.dishId,10))} />
          );
    }
    return(
      <div>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishwithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
            <Redirect to="/home" />
            </Switch>
          <Footer />
        </div>
    );
    }}
    export default Main;
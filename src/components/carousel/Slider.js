import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

class Slider extends Component {
   constructor(props) {
      super(props);
      this.state = {
         top10: undefined,
         currentIndex: 0
      }
   }

   // componentDidUpdate(prevProps) {
   //    if (this.state.top10 !== prevProps.top10) {
   //       this.setState({
   //          top10: prevProps.top10
   //       });
   //    }    
   // }

   componentWillReceiveProps(nextProps) {
      if (this.state.top10 !== nextProps.top10) {
         this.setState({
            top10: nextProps.top10
         });
      }
   }

   goToPrevSlide = () => {

   }

   goToNextSlide = () => {
      this.setState(prevState => ({
         currentIndex: prevState.currentIndex + 1
      }));
   }

   render() {
      console.log(this.state);
      if(this.state.top10) {
         return(
            <div className="slider">
            <Slide top10={this.state.top10} />
            <LeftArrow 
               goToPrevSlide={this.goToPrevSlide}
            />
            <RightArrow 
               goToNextSlide={this.goToNextSlide}
            />
         </div>
         )
      } else {
         return(
            <div className="slider">
               <p>Loading...</p>
            </div>
         )
      }
   }
}

export default Slider; 
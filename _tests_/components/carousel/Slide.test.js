import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../../../src/components/carousel/Slide';

describe('testing <Slide />', () => {
   it('renders 10 divs', () => {
     let wrapper = shallow(<Slide />);
     expect(wrapper.find('div.slide')).to.have.lengthOf(1);
   });

   it('in each div, should render an image at the default width', () => {
      let wrapper = shallow(<Slide />);
      expect(wrapper.find('div.slide').shallow().find('.image')).to.have.lengthOf(1);
   })


});

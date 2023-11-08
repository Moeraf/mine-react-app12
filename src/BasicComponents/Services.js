import React from 'react';
import {ServicesSection,ServicesText,Box,BoxCards} from './importing';
import { UserContext } from '../ContextAll/UserContext';
import {UserOne,UserTwo,UserThree,UserFour} from './ContextApi'

function Services () {
  const AllUser = {UserOne,UserTwo,UserThree,UserFour}
  return (
    <UserContext.Provider value={AllUser}>
      <ServicesSection>
          <ServicesText />
          <Box>
              <BoxCards />
          </Box>
      </ServicesSection>
    </UserContext.Provider>
  )
}

export default Services
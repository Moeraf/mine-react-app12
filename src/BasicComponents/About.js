import React from 'react';
import {AboutSection,AboutImage,AboutText} from './importing';
import { UserContext } from '../ContextAll/UserContext';

function About () {
  const UserText = "A Full Stack Developer, take a course with Coach Ronnie Rizk. Graduated from LIU University with a major in Economics and Accounting with a good grade. I'm actively seeking training to further elevate my skills in collaborative teamwork and the execution of advanced projects. Despite my lack of prior proffesional experience, i remain commited to self-improvement in the realm of teamwork and creative problem-solving. I am eagerly open to valuable collaboration opportunities"
  const AllUserText = {UserText}
  return (
    <UserContext.Provider value={AllUserText}>
      <AboutSection>
          <AboutImage />
          <AboutText />
      </AboutSection>
    </UserContext.Provider>
  )
}

export default About
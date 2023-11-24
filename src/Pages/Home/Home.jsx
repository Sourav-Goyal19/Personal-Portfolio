import React from 'react';
import AboutSec from '../../Components/Home/About_Section/AboutSec';
import HomeSec from '../../Components/Home/Home_Section/HomeSec';
import SkillsSec from '../../Components/Home/Skills_Section/SkillsSec';
import ExperienceSec from '../../Components/Home/Experience_Section/ExperienceSec';
import './Home.scss';
import { CollaborateSec } from '../../Components/Home/Collaborate_Section/CollaborateSec';

export const Home = (props) => {
    return (
        <div>
            <HomeSec />
            <AboutSec pageAnimation={props.pageAnimation} />
            <SkillsSec />
            <ExperienceSec />
            <CollaborateSec pageAnimation={props.pageAnimation} />
        </div>
    );
};

export default Home;

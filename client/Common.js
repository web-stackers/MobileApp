import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import JobFeedbackStackScreen from './common/stacks/JobFeedbackStack';

const Common = () => {
    return (
        <NavigationContainer>
            <JobFeedbackStackScreen/>
        </NavigationContainer>
    )
}

export default Common;
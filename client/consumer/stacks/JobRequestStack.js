import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import JobDetails from '../screens/JobResponse/JobDetails';
// import QuotationDetails from '../screens/JobResponse/QuotationDetails';
// import JobRefuse from '../screens/JobResponse/JobRefuse';
// import Quotation from '../screens/JobResponse/Quotation';
// import Acknowledge from '../screens/JobResponse/Acknowledge';

const JobRequestStack = createNativeStackNavigator();

const JobRequestStackScreen = () => (
  <JobRequestStack.Navigator>
    {/* <JobRequestStack.Screen name="Job Details" component={JobDetails} />

    <JobRequestStack.Screen
      name="Quotation"
      component={QuotationDetails}
      title="Job Quotation"
    />

    <JobRequestStack.Screen
      name="Refuse Job"
      component={JobRefuse}
      options={{
        header: () => null,
      }}
    />

    <JobRequestStack.Screen name="Quotation Preview" component={Quotation} />

    <JobRequestStack.Screen
      name="Acknowledgement"
      component={Acknowledge}
      options={{
        header: () => null,
      }}
    /> */}
  </JobRequestStack.Navigator>
);

export default JobRequestStackScreen;

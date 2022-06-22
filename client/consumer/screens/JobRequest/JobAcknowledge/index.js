/* eslint-disable prettier/prettier */
import React from 'react';

import Sacknowledge from '../../../../components/Sacknowledge';

const JobAcknowledge = ({navigation}) => {
  return (
    <Sacknowledge
      title="Job Requested"
      subtitle="Your request has been successfully send for that service provider. He will reply you soon. Thank you for using our service."
      onPress={() => navigation.navigate('CategorySelector')}
    />
  );
};

export default JobAcknowledge;

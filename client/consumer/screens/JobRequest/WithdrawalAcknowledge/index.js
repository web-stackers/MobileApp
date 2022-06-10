import React from 'react';

import Sacknowledge from '../../../../components/Sacknowledge';

const QuotationAcknowledge = ({navigation}) => {
  return (
    <Sacknowledge
      title="Job Withdrawal Requested"
      subtitle="Your request has been successfully send for Admin. He will reply you soon. Thank you for using our service."
      onPress={() => navigation.navigate('CategorySelector')}></Sacknowledge>
  );
};

export default QuotationAcknowledge;

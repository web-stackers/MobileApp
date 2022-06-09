import React from 'react';

import Sacknowledge from '../../../../components/Sacknowledge';

const QuotationAcknowledge = ({navigation}) => {
  return (
    <Sacknowledge
      title="Quotation Accepted"
      subtitle="You have accepted the quotation. We will inform the service provider. Thank you for using our service"
      onPress={() => navigation.navigate('CategorySelector')}></Sacknowledge>
  );
};

export default QuotationAcknowledge;

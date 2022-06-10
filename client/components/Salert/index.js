import * as React from 'react';
import {View} from 'react-native';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

const Salert = ({title, message, handleOk, handleCancel, visible}) => {
  //   const [visible, setVisible] = React.useState(false);

  //   const showDialog = () => setVisible(true);

  //   const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleCancel}>Cancel</Button>
          <Button onPress={handleOk}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Salert;

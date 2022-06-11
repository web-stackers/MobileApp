import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';

import {DarkTheme, Surface, ThemeProvider} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

const Sselect = ({jobList, jobType, setJobType}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Surface>
        <SafeAreaView>
          <DropDown
            label={'Job Type'}
            mode={'outlined'}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={jobType}
            setValue={setJobType}
            list={jobList}
          />
        </SafeAreaView>
      </Surface>
    </ThemeProvider>
  );
};

export default Sselect;

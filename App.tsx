import React from 'react';
import {ThemeProvider} from 'rn-nex-ui/src';
import {VideWatch} from './src';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView>
    <ThemeProvider>
      <VideWatch />
    </ThemeProvider>
    // </SafeAreaView>
  );
}

export default App;

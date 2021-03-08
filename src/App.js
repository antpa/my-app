import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar'


class App extends Component{

  render(){
    return (
      <div>
        <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
        <AFrameRenderer
        arToolKit={{ sourceType: 'webcam'}}
        stats
      >
        <Marker parameters={{ 
          preset: 'custom',
          type: 'pattern',
          patternUrl: 'https://raw.githubusercontent.com/antpa/my-app/master/public/images/pattern-image_from_ios.patt',
       }}>
          <a-box color='pink' material='opacity: 1;' position="0 0.003 0" scale='0.4 0.4 0.4'>
            <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
          </a-box>
        </Marker>
      </AFrameRenderer>
      </div>
    );
  }
}

export default App;

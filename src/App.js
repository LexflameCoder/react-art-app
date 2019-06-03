import React from 'react';
import logo from './logo.svg';
import './App.css';

// Providers
import { ColorProvider } from './Context/ColorContext'
import { ResolutionProvider } from './Context/ResolutionContext'
import { SizeProvider } from './Context/SizeContext'
import { GridProvider } from './Context/GridContext'


// Components
import Header from './Header/Header'
import Field from './Field/Field'
import ControllBar from './ControllBar/ControllBar'




const App = () => {
  return (
    <ColorProvider>
      <SizeProvider>
        <ResolutionProvider>
            <GridProvider>
              <div className="App">
                <Header  />
                <ControllBar className="controll"/>
                <div className="field-area">
                  <Field />
                </div>
              </div>
            </GridProvider>
        </ResolutionProvider>
      </SizeProvider>
    </ColorProvider>
  );
}

export default App;

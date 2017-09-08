import * as React from 'react';
import Designer from './Designer';
import Previewer from './Previewer';
import { SurveyConfiguration } from '../types/index';
import './App.css';

export interface Props {
  enthusiasmLevel?: number;
  configuration: SurveyConfiguration;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function App({ enthusiasmLevel = 1, configuration, onIncrement, onDecrement }: Props) {
  return (
    <div className="app">
      <Designer configuration={configuration} />
      <Previewer configuration={configuration} />

      <div className="greeting">
        {getMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default App;

function getMarks(numChars: number) {
  return Array(numChars + 1).join('-');
}

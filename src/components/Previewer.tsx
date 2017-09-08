import * as React from 'react';
import { SurveyConfiguration } from '../types/index';
import Survey from './Survey';
import './Previewer.css';

export interface Props {
  configuration: SurveyConfiguration;
}

function Previewer({ configuration }: Props) {
  return (
    <div>
      This is the preview.
      <Survey configuration={configuration} />
    </div>
  );
}

export default Previewer;

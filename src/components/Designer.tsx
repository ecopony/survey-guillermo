import * as React from 'react';
import { SurveyConfiguration } from '../types/index';
import './Designer.css';

export interface Props {
  configuration: SurveyConfiguration;
}

function Designer({ configuration }: Props) {
  return (
    <div>
      This is the designer.
    </div>
  );
}

export default Designer;

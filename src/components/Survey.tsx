import * as React from 'react';
import { SurveyConfiguration } from '../types/index';
import './Survey.css';

export interface Props {
  configuration: SurveyConfiguration;
}

function Survey({ configuration }: Props) {
  return (
    <div className="survey">
      {configuration.title}

    </div>
  );
}

export default Survey;

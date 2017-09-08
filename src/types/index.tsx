export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
  configuration: SurveyConfiguration;
}

export interface SurveyConfiguration {
  title: string;
  pages: PageConfiguration[];
}

export interface PageConfiguration {
  title: string;
}
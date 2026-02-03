import {
  ModuleFields,
  ChoiceField,
  TextField,
  ImageField,
} from '@hubspot/cms-components/fields';

import StyleFields from './styleFields.jsx';

export const fields = (
  <ModuleFields>
      <ChoiceField
        name="show_logo"
        label="Show Logo"
        required={false}
        locked={false}
        multiple={false}
        display="radio"
        choices={[
          ['show', 'Show Logo'],
          ['hide', 'Hide Logo'],
        ]}
        default="show"
      />
      <ImageField
        name="header_logo"
        label="Logo"
        required={false}
        locked={false}
        responsive={true}
        resizable={true}
        showLoading={false}
        default={{
          size_type: 'exact',
          src: 'https://25480917.fs1.hubspotusercontent-eu1.net/hubfs/25480917/Logo_BS_png_small-1.png',
          alt: '',
          loading: 'lazy',
          width: 300,
          height: 123,
          max_width: 300,
          max_height: 123,
        }}
      />
      <ChoiceField
        name="show_header_text"
        label="Show Header Text"
        required={false}
        locked={false}
        multiple={false}
        display="radio"
        choices={[
          ['show', 'Show Header Text'],
          ['hide', 'Hide Header Text'],
        ]}
        default="show"
      />
      <TextField
        name="header_text"
        label="Header Text"
        default="Header Text"
      />
    <StyleFields />
  </ModuleFields>
);
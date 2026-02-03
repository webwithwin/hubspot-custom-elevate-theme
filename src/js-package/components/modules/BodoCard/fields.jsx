import {
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

import StyleFields from './styleFields.jsx';

const contentDefaultValue = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export const fields = (
  <ModuleFields>
    <TextField
        name="topHeading"
        label="Ueberschrift"
        default="Ueberschrift"
    />
    
    <RepeatedFieldGroup
        label='Cards'
        name='groupCards'
        id='groupCards'
        description="Add multiple card items to display in a grid layout."
    >
      
        <ImageField
            name="image"
            label="Image"
            required={false}
            locked={false}
            responsive={true}
            resizable={true}
            showLoading={false}
            default={{
                size_type: 'exact',
                src: '',
                alt: '',
                loading: 'lazy',
                width: 552,
                height: 537,
                max_width: 552,
                max_height: 537,
            }}
        />

        <TextField
            name="headline"
            label="Headline"
            default="Headline"
        />

        <TextField
            name="content"
            label="Content"
            default={contentDefaultValue}
        />
        
    </RepeatedFieldGroup>

    <StyleFields />
    
  </ModuleFields>
);
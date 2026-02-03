import {
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
        name="heading"
        label="Heading"
        default="Trusted by the world's best companies [social proof to build credibility]"
    />

    <RepeatedFieldGroup
        label='Logo'
        name='groupLogo'
        id='groupLogo'
    > 
        <ImageField
            name="logo"
            label="Logo"
            required={false}
            locked={false}
            responsive={true}
            resizable={true}
            showLoading={false}
            default={{
                size_type: 'exact',
                src: 'https://placehold.co/120x36/CCCCCC/FFF',
                alt: '',
                loading: 'lazy',
                width: 120,
                height: 36,
                max_width: 120,
                max_height: 36,
            }}
        />
        
    </RepeatedFieldGroup>
    
  </ModuleFields>
);
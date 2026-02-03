import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

const contentDefaultValue = `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
`;


export const fields = (
  <ModuleFields>
    <TextField
        name="heading"
        label="Heading"
        default="Heading"
    />

    <RichTextField
        name="content"
        label="Content"
        default={contentDefaultValue}
    />

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
            src: 'https://placehold.co/600x640/CCCCCC/FFF',
            alt: '',
            loading: 'lazy',
            width: 600,
            height: 640,
            max_width: 600,
            max_height: 640,
        }}
    />

    <RepeatedFieldGroup
        label='Group Facts'
        name='groupFacts'
        id='groupFacts'
    >
        <TextField
            name="number"
            label="Fact Number"
            default="200%"
        />

        <TextField
            name="title"
            label="Name"
            default="Customer Savings"
        />
    </RepeatedFieldGroup>
  </ModuleFields>
);
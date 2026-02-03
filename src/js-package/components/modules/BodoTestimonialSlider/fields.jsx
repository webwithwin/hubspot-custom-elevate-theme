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
    <RepeatedFieldGroup
        label='Group Testimonial'
        name='groupTestimonial'
        id='groupTestimonial'
    >
        <RichTextField
            name="content"
            label="Content"
            default={contentDefaultValue}
        />

        <ImageField
            name="profile_image"
            label="Profile Image"
            required={false}
            locked={false}
            responsive={true}
            resizable={true}
            showLoading={false}
            default={{
                size_type: 'exact',
                src: 'https://placehold.co/56x56/000000/FFF',
                alt: '',
                loading: 'lazy',
                width: 56,
                height: 56,
                max_width: 56,
                max_height: 56,
            }}
        />

        <TextField
            name="profile_name"
            label="Profile Name"
            default="Herr Mustermann"
        />

        <TextField
            name="profile_detail"
            label="Profile Detail"
            default="Manager, Bodo Schäfer GmbH"
        />
    </RepeatedFieldGroup>
  </ModuleFields>
);
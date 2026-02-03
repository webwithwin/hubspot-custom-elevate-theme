import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RichTextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

const contentDefaultValue = `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
`;

const wertDefaultValue = `
    <p>Wert</p>
    <p>1.997,00 €</p>
`;


export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
        label='Group Value'
        name='groupValue'
        id='groupValue'
    >
        <TextField
            name="heading"
            label="Heading"
            default="Bonus 1"
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
                src: 'https://placehold.co/250x126/cccccc/FFF',
                alt: '',
                loading: 'lazy',
                width: 250,
                height: 126,
                max_width: 250,
                max_height: 126,
            }}
        />

        <RichTextField
            name="wert"
            label="Wert"
            default={wertDefaultValue}
        />

    </RepeatedFieldGroup>

    <TextField
        name="link_text"
        label="Link Text"
        default="Get Started"
    />
    <LinkField
        name="link_url"
        label="Button"
        required={false}
        locked={false}
        supportedTypes={[
        'EXTERNAL',
        'CONTENT',
        'FILE',
        'EMAIL_ADDRESS',
        'BLOG',
        'CALL_TO_ACTION',
        'PHONE_NUMBER',
        'WHATSAPP_NUMBER',
        'PAYMENT',
        ]}
        showAdvancedRelOptions={true}
        default={{
            url: {
                content_id: null,
                type: 'EXTERNAL',
                href: 'https://lp.bodoschaefer-akademie.de/',
            },
            open_in_new_tab: false,
            no_follow: false,
        }}
    />
  </ModuleFields>
);
import {
  ModuleFields,
  TextField,
  BackgroundImageField,
  RichTextField,
  LinkField,
} from '@hubspot/cms-components/fields';

const contentDefaultValue = `
  <section>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
  </section>
`;

const listDefaultValue = `
  <div>
    <ul>
      <li>Excepteur sint occaecat cupidatat non proident</li>
      <li>Sed ut perspiciatis unde omnis iste natus error</li>
      <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
    </ul>
  </div>
`;


export const fields = (
  <ModuleFields>
      <BackgroundImageField
        name="bg_image"
        label="Background image"
        required={false}
        default={{
          src: '',
          background_position: 'MIDDLE_CENTER',
          background_size: 'cover',
        }}
      />

      <TextField
        name="headline"
        label="Headline"
        default="Heading"
      />
      <RichTextField
          name="content"
          label="Content"
          default={contentDefaultValue}
        />
      <RichTextField
          name="list"
          label="Content"
          default={listDefaultValue}
        />
      <TextField
        name="link_text"
        label="Link Text"
        default="Hier Klicken"
      />
      <LinkField
        name="link"
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

      <TextField
        name="formIdNumber"
        label="Form ID"
        default=""
      />

  </ModuleFields>
);
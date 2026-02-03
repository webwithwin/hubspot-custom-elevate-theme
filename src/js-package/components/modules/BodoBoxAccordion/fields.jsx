import {
  ModuleFields,
  BooleanField,
  TextField,
  RepeatedFieldGroup,
  EmbedField,
  ImageField,
  ChoiceField,
  LinkField,
  RichTextField,
} from '@hubspot/cms-components/fields';

const richTextFieldDefaultValue = `
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
  </div>
`;

export const fields = (
  <ModuleFields>
    <BooleanField
      name="use_background_color"
      label="Use Background Color"
      required={false}
      locked={false}
      display="checkbox"
      inlineHelpText=""
      helpText=""
      default={false}
    />

    <BooleanField
      name="useAccordion"
      label="Use Accordion"
      required={false}
      locked={false}
      display="checkbox"
      inlineHelpText=""
      helpText=""
      default={false}
    />

    <ChoiceField
      name="img_position"
      label="Image Position"
      required={false}
      locked={false}
      multiple={false}
      display="radio"
      choices={[
        ['img--left', 'Image Left - Text Right'],
        ['img--right', 'Text Left - Image Right'],
      ]}
      default="img--left"
    />

    <EmbedField
        name="video_field"
        label="Video"
        required={false}
        locked={false}
        supportedSourceTypes={['oembed', 'html']}
        supportedOembedTypes={['photo', 'video', 'link', 'rich']}
        default={{
            source_type: 'oembed',
        }}
    />

    <ImageField
        name="image_field"
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

    <RepeatedFieldGroup
        label='Accordion'
        name='groupAccordion'
        id='groupAccordion'
        description="Add multiple accordion items to display in a grid layout."
    >
        <TextField
            name="title"
            label="Title"
            default="Title"
        />

        <RichTextField
            name="content"
            label="Content"
            default={richTextFieldDefaultValue}
        />
        
    </RepeatedFieldGroup>
    
    <RepeatedFieldGroup
        label='Text with CTA Button'
        name='groupCta'
        id='groupCta'
        occurrence={{
            min: null,
            max: 1,
        }}
    >
        <TextField
            name="headline_field"
            label="Headline"
            default="Heading"
        />

        <RichTextField
            name="text_field"
            label="Content"
            default={richTextFieldDefaultValue}
        />

        <TextField
            name="link_text"
            label="Link Text"
            default="Hier Klicken"
        />

        <LinkField
            name="link_field"
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

    </RepeatedFieldGroup>
  </ModuleFields>
);
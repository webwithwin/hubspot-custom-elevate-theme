import {
  ModuleFields,
  TextField,
  ImageField,
  LinkField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
      <ImageField
        name="footer_logo"
        label="Footer Logo"
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
      <TextField
        name="footer_text"
        label="Footer Text"
        default="&copy; Copyright 2025 Bodo Schäfer GmbH"
      />

      <RepeatedFieldGroup
        label='Footer Links'
        name='groupLinks'
        id='groupLinks'
        description="Add multiple link items"
      >
        <TextField
          name="link_text"
          label="Link Text"
          default="Hier Klicken"
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

      </RepeatedFieldGroup>
  </ModuleFields>
);
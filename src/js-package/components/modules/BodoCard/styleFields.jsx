import {
  FieldGroup,
  ChoiceField
 } from '@hubspot/cms-components/fields';

export default function StyleFields() {
  return (
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <ChoiceField
          name="text_align"
          label="Text Alignment"
          required={false}
          locked={false}
          multiple={false}
          display="radio"
          choices={[
            ['text--left', 'Text Align Left'],
            ['text--center', 'Text Align Center'],
          ]}
          default="text--left"
        />
      
    </FieldGroup>
  );
}
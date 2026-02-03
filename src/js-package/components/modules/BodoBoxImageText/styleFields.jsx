import {
  FieldGroup,
  ChoiceField,
 } from '@hubspot/cms-components/fields';

export default function StyleFields() {
  return (
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
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
      
    </FieldGroup>
  );
}
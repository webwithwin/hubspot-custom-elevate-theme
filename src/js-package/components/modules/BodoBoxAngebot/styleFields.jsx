import {
  FieldGroup,
  NumberField,
 } from '@hubspot/cms-components/fields';

export default function StyleFields() {
  return (
    <FieldGroup
      label='Styles'
      name='groupStyle'
      tab='STYLE'
    >
      <NumberField
        name="text_width"
        label="Text Width"
        required={false}
        locked={false}
        display="slider"
        min={30}
        max={100}
        step={1}
        prefix=""
        suffix=""
        default={100}
        placeholder="100"
      />
      
    </FieldGroup>
  );
}
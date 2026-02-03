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
        name="header_position"
        label="Header Position"
        required={false}
        locked={false}
        multiple={false}
        display="radio"
        choices={[
          ['left', 'Logo links - Text rechts oder Logo/Text wird links'],
          ['center', 'Logo oder Text wird zentriert'],
        ]}
        default="left"
      />
      
    </FieldGroup>
  );
}
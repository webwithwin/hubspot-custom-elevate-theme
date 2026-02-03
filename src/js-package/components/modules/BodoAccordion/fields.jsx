import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
  FieldGroup,
  ChoiceField,
} from '@hubspot/cms-components/fields';

const contentDefaultValue = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export const fields = (
  <ModuleFields>
    <TextField
        name="topHeading"
        label="Ueberschrift"
        default="Ueberschrift"
    />

    <ChoiceField
        name="spaltenanzahl"
        label="Spaltenanzahl"
        required={false}
        locked={false}
        multiple={false}
        display="radio"
        choices={[
            ['col-md-12', '1 Spalte'],
            ['col-md-6', '2 Spalten'],
        ]}
        default="col-md-12"
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

        <TextField
            name="content"
            label="Content"
            default={contentDefaultValue}
        />
        
    </RepeatedFieldGroup>
    
  </ModuleFields>
);
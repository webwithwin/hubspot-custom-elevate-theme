import { Island } from '@hubspot/cms-components';

import Accordion from './islands/accordion.jsx?island';

export function Component(props) { 

    return (
        <>
        <Island module={Accordion} {...props} />
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Accordion',
};

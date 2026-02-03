import Facts from './partials/Facts.jsx?island';

import { Island } from '@hubspot/cms-components';

export function Component(props) {

  return (
        <Island 
          hydrateOn="load"
          module={Facts} 
          {...props} 
          clientOnly={true} 
        />
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Bodo Facts',
};

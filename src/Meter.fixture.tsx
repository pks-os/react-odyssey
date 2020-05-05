import React from 'react';

import { Meter } from './Meter';

export default <>
  <Meter label="meter" min={0} max={100} low={89} high={99} optimum={80} value={30} aria-valuemin={0} />
  <Meter label="meter" min={0} max={100} low={89} high={99} optimum={0} value={80} aria-valuemin={0} />
</>;
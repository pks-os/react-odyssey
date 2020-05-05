import React from 'react';
import { Callout, Callouts } from './Callout';

export default <>
  {["pending", "info", "warning", "error"].map(t =>
    <Callout key={t} kind={t as Callouts} title={`${t[0].toUpperCase()}${t.substr(1)}`}>
      <p>Callout body</p>
    </Callout>
  )}
  <Callout kind={"error" as Callouts}>
    <p>No title</p>
  </Callout>
</>;

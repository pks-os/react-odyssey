import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

const CardActions = <>
  <Button isSecondary isDanger>Oh no!</Button>
  <Button>Cool!</Button>
</>;

export default <Card
  title="Computer Overheated!"
  meta="Thermite may have been involved"
  src="https://geoff.greer.fm/photos/thermite/thumbs/P1010014_crop.jpg"
  actions={CardActions}>
  This card is about a computer getting thermited.
</Card>;
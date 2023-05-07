import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Footer.module.css';

interface Props {
  className?: string;
}
/* @figmaId 7:68 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.footer}></div>
      <div className={classes.image2}></div>
      <div className={classes.image3}></div>
      <div className={classes.image4}></div>
      <div className={classes.image5}></div>
      <div className={classes.since2023}>Since 2023</div>
    </div>
  );
});

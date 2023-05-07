import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BotaoDropDown.module.css';
import { Vector2Icon } from './Vector2Icon.js';
import { Vector3Icon } from './Vector3Icon.js';
import { Vector4Icon } from './Vector4Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector2?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
  };
}
/* @figmaId 5:19 */
export const BotaoDropDown: FC<Props> = memo(function BotaoDropDown(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector2}>{props.swap?.vector2 || <Vector2Icon className={classes.icon} />}</div>
      <div className={classes.vector3}>{props.swap?.vector3 || <Vector3Icon className={classes.icon2} />}</div>
      <div className={classes.vector4}>{props.swap?.vector4 || <Vector4Icon className={classes.icon3} />}</div>
    </div>
  );
});

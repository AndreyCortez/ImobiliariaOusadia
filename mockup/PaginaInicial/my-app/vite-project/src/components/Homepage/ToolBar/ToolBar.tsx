import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BotaoDropDown } from '../BotaoDropDown/BotaoDropDown';
import classes from './ToolBar.module.css';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import { Vector3Icon } from './Vector3Icon.js';
import { Vector4Icon } from './Vector4Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:25 */
export const ToolBar: FC<Props> = memo(function ToolBar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon4} />
      </div>
      <div className={classes.agents}>Agents</div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.ousadiaImobiliaria}>Ousadia Imobiliaria</div>
      <div className={classes.image1}></div>
      <BotaoDropDown
        className={classes.botaoDropDown}
        swap={{
          vector2: <Vector2Icon className={classes.icon} />,
          vector3: <Vector3Icon className={classes.icon2} />,
          vector4: <Vector4Icon className={classes.icon3} />,
        }}
      />
    </div>
  );
});

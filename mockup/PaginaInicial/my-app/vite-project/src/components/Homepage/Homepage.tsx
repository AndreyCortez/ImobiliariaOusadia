import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Footer } from './Footer/Footer';
import classes from './Homepage.module.css';
import { ToolBar } from './ToolBar/ToolBar';

interface Props {
  className?: string;
}
/* @figmaId 5:3 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <ToolBar />
      <Footer />
      <div className={classes.rectangle2}></div>
      <div className={classes.ferramentaDeBusca}>Ferramenta de Busca</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.destaques}>Destaques</div>
    </div>
  );
});

import type { Jss } from 'jss';
import { create } from 'jss';
import preset from 'jss-preset-default';

export const defaultJss: Jss = create(preset());

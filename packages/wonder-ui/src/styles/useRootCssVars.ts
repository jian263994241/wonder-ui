import useTheme from './useTheme';
import { injectGlobal } from '@wonder-ui/styled';
import { toString } from '@wonder-ui/utils';
import { useCreation } from '@wonder-ui/hooks';
import type { Theme } from './createTheme';

type Rules = Record<string, any>;
type RulesFunction = (theme: Theme) => Rules;

export default function useRootCssVars(rules: Rules | RulesFunction) {
  const theme = useTheme();

  useCreation(() => {
    const styles = {
      ':root': typeof rules === 'function' ? rules(theme) : rules
    };

    injectGlobal(styles);
  }, [toString(rules)]);
}

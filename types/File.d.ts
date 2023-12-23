import type { TransformedToken } from './DesignToken.d.ts';
import type { Formatter } from './Format.d.ts';

export interface FormattingOptions {
  prefix?: string;
  suffix?: string;
  lineSeparator?: string;
  header?: string;
  footer?: string;
  commentStyle?: 'short' | 'long' | 'none';
  commentPosition?: 'above' | 'inline';
  indentation?: string;
  separator?: string;
}

export type FileHeader = (defaultMessage: string[]) => string[];

export interface File {
  className?: string;
  packageName?: string;
  destination: string;
  format?: string | Formatter;
  filter?: string | Partial<TransformedToken> | Matcher;
  options?: LocalOptions;
  resourceType?: string;
  resourceMap?: Record<string, string>;
  name?: string;
}

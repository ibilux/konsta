import { cls } from '../cls.js';

export const ListInputColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls(
      'bg-md-light-surface-variant',
      dark('dark:bg-md-dark-surface-variant')
    ),
    outlineBorderIos: cls(
      'border-black border-opacity-30',
      dark('dark:border-white dark:border-opacity-30')
    ),
    outlineBorderFocusIos: 'border-primary',
    outlineBorderMaterial: cls(
      'border-md-light-on-surface',
      dark('dark:border-md-dark-on-surface')
    ),
    outlineBorderFocusMaterial: cls(
      'border-md-light-primary',
      dark('dark:border-md-dark-primary')
    ),
    outlineLabelBgIos: cls(
      'bg-block-strong-light',
      dark('dark:bg-block-strong-dark')
    ),
    outlineLabelBgMaterial: cls(
      'bg-md-light-surface',
      dark('dark:bg-md-dark-surface')
    ),
    labelTextIos: '',
    labelTextFocusIos: '',
    labelTextMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    labelTextFocusMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    errorText: 'text-red-500',
    errorBorder: 'border-red-500',
    ...colorsProp,
  };
};

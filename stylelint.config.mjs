import { propertyGroups } from 'stylelint-config-clean-order'

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never',
  properties
}))

export default {
  extends: ['stylelint-config-clean-order', 'stylelint-config-standard-scss'],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      }
    ],
    'declaration-empty-line-before': [
      'never',
      {
        except: ['after-comment'],
        ignore: ['after-declaration', 'inside-single-line-block', 'before-comment'],
      },
    ],
    'no-descending-specificity': null,
    'color-hex-length': 'short',
    'block-no-empty': true,
    'selector-class-pattern': [
      '^[a-z0-9_-]+(__[a-z0-9_-]+)?(--[a-z0-9_-]+)?$',
      {
        resolveNestedSelectors: true,
        message:
          'Class names must follow the BEM convention: block__element–modifier.',
      },
    ],
    'max-nesting-depth': 3,
    'selector-max-id': 0,
  }
};

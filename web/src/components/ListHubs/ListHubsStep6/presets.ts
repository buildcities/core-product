import { FilterButtonProps } from '@buildcities/build-ui.components.all'

export const RULES_SECTION_TITLE = 'Rules'

export const RULES_SECTION_TEXT =
  'build_citizens must respect the rules unique to your build_hub!  As a community,mutual respect of members and hosts is of utmost importance.'

export const CUSTOM_RULES_SECTION_TITLE = 'Custom Rules'
export const CUSTOM_RULES_SECTION_TEXT =
  'If you didn’t find right rules that suits you, feel free to type your own that build_citizens have to respect.'

export const selectOptions: FilterButtonProps[] = [
  {
    label: 'Respect the property as if it was your own.',
  },
  { label: 'Respect the other guests as if they were your own.' },
  {
    label: 'Be a constructive guest in the space.  Reference the build_values.',
  },
]

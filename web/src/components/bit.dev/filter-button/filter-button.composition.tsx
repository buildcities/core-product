import React from 'react'
import { FilterButton } from './filter-button'

export const BasicFilterButton = () => (
  <FilterButton label="hello from FilterButton" />
)

export const BasicFilterButtonSelected = () => (
  <FilterButton isActive label="hello from FilterButton" />
)

export const BasicFilterButtonWithIconBtn = () => (
  <FilterButton showDeleteButton label="hello from FilterButton" />
)

export const BasicFilterButtonWithLargeText = () => (
  <FilterButton type="large" showDeleteButton label="hello from FilterButton" />
)

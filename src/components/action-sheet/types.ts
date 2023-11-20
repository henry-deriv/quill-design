import { VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import {
  actionSheetFooterCVA,
  actionSheetRootCVA,
} from './action-sheet.classnames'
import { ExcludeAllNull } from 'types'

export type RootProps = ComponentPropsWithoutRef<'div'> &
  ExcludeAllNull<VariantProps<typeof actionSheetRootCVA>> & {
    onClose?: () => void
    type?: 'modal' | 'non-modal'
    expandable?: boolean
  }

export type RootPosition = RootProps['position']

type ActionType = {
  content: string
  onAction: () => void
}

export type FooterProps = ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof actionSheetFooterCVA> & {
    primaryAction?: ActionType
    secondaryAction?: ActionType
  }

export type FooterAlignment = FooterProps['alignment']

import { AccordionProps } from '../types'

import Base from '../base'

export const Flush = ({ ...otherProps }: AccordionProps) => {
  return (
    <Base
      divider="bottom"
      className="border-x-none"
      contentClassname="rounded-50"
      {...otherProps}
    />
  )
}

Flush.displayName = 'AccordionFlush'

export default Flush

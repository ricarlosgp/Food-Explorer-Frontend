import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function Ingredient({
  isnew = 'false',
  value,
  onClick,
  ...rest
}) {
  return (
    <Container isnew={isnew}>
      <input type="text" value={value} readOnly={!isnew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isnew ? 'button-add' : 'button-delete'}
      >
        {isnew === 'true' ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}

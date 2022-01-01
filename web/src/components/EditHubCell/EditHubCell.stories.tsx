import { Loading, Empty, Failure, Success } from './EditHubCell'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success /> : null
}

export default { title: 'Cells/EditHubCell' }

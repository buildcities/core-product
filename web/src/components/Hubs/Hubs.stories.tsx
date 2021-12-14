import Hubs from './Hubs'

const hubs = [...Array(20).keys()].map(() => ({
  src: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?cs=srgb&dl=pexels-pixabay-534151.jpg&fm=jpg',

  title: 'Awesome Home',
  subTitle: 'Los Angeles',
}))
export const generated = () => {
  return <Hubs hubs={hubs} />
}

export default {
  title: 'Components/Hubs',
}

import { Button } from '@buildcities/build-ui.components.all'

const HeaderAuthButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return <Button onClick={onClick} text="Become a host" style="secondary" />
}

export default HeaderAuthButton

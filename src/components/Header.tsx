import MenuIcon from '../assets/menu.svg'
import HomeIcon from '../assets/home.svg'
import FavoriteIcon from '../assets/favorite.svg'
import MemoIcon from '../assets/memo.svg'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <div className="w-full h-6 fixed top-0 left-0">
      <button className='h-12 w-12 absolute top-4 left-4 md:hidden'>
        <img className='h-6 w-6 m-3' src={MenuIcon} alt="メニューアイコン"></img>
      </button>
      <ul className='invisible md:visible absolute top-4 right-4 flex'>
        <HeaderMenu icon={HomeIcon}/>
        <HeaderMenu icon={FavoriteIcon}/>
        <HeaderMenu icon={MemoIcon}/>
      </ul>
    </div>
  )
}
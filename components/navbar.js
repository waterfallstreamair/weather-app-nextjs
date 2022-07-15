import Link from 'next/link'

const NavbarWrapper = () => {
  
  return (
    <div className="navbar-wrapper grid grid-cols-3 place-content-center 
      place-items-start text-xl text-slate-400 bg-stone-900 pl-10 min-h-[56px]">
      <Link href="/">
        <a>Home</a>
      </Link> 
    </div>
  )
}

export default NavbarWrapper

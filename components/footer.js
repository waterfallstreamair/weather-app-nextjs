import Link from 'next/link'

const Footer = () => {
  
  return (
    <div className="footer grid grid-cols-3 place-content-center 
      place-items-center text-sm text-slate-400 bg-stone-900 mt-auto mb-0 
      min-h-[56px]"
    >
      Waterfall®
      <Link href="/show-redux-state">
        <a>Redux State</a>
      </Link>
    </div>
  )
}

export default Footer

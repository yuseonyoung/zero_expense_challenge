import Link from 'next/link'

export default function MobileNavbar() {
  return (
    <nav className="
      fixed 
      bottom-0 
      left-0 
      right-0 
      bg-white 
      border-t 
      border-gray-200 
      w-full
      safe-area-inset-bottom
    ">
      <div className="grid grid-cols-4 py-3">
        <NavItem icon="fa-home" label="홈" active />
        <NavItem icon="fa-chart-line" label="통계" />
        <NavItem icon="fa-calendar" label="캘린더" />
        <NavItem icon="fa-user" label="내정보" />
      </div>
    </nav>
  )
}

function NavItem({
  icon,
  label,
  active = false
}: {
  icon: string;
  label: string;
  active?: boolean
}) {
  return (
    <Link
      href="#"
      className={`
        flex 
        flex-col 
        items-center 
        ${active ? 'text-blue-500' : 'text-gray-400'} 
        transition-all 
        hover:scale-110
      `}
    >
      <i className={`fas ${icon} mb-1 text-lg`}></i>
      <span className="text-xs">{label}</span>
    </Link>
  )
}
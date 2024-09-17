import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link className="text-4xl font-extrabold  text-white" href="/">
        SYNCSHEET
      </Link>
      {children}
    </div>
  )
}

export default Header
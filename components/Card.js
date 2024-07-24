import Link from 'next/link'
import React from 'react'

const Card = ({detail}) => {

  let link = detail.orgLink ? detail.orgLink : detail.githubLink;

  return (  
    <Link href={link} target='_blank'>
      <div
        className={`p-6 md:w-1/2 sm:w-full mt-4 flex cursor-pointer shadow-lg transition-transform transform translate-y-10 opacity-0 animate-slide-up`}
        >
        <div>
            <img className='w-30 h-30' src={detail.logo} alt={detail.name} />
        </div>
        <div className='ml-4 mt-2'>
            <div className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br'>
              {detail.name}
            </div>
            <div>{detail.position} {detail.major && 'in ' + detail.major} </div>
            <div>{detail.startDate} - {detail.endDate}</div>
            {detail?.githubLink && <div className='underline text-blue-400 text-sm'><Link href={detail?.githubLink} target='_blank'>Git Repo</Link></div>}
            {detail?.projectLink && <div className='underline text-blue-400 text-sm'><Link href={detail?.projectLink} target='_blank'>Live Project</Link></div>}
            {detail?.degreeLink && <div className='underline text-blue-400 text-sm'><Link href={detail?.degreeLink} target='_blank'>Official Degree</Link></div>}
        </div>
      </div>
    </Link>
  )
}

export default Card
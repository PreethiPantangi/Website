import Card from '@components/Card'
import React from 'react'

const projectDetails = [
  {
    id: 'prj5',
    name: 'React Utilityy Suite',
    position: "",
    type: 'Full Time',
    startDate: 'July 2023',
    endDate: 'Present',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQHKpwh4KyVNbw/company-logo_100_100/0/1630589932256/npm_inc__logo?e=1729728000&v=beta&t=nQl9WyEOKk12agMmeOwyiTVhIKpiOlATNLlQ6rElrXA',
    projectLink: 'https://www.npmjs.com/package/react-ui-utility-suite',
    githubLink: 'https://github.com/PreethiPantangi/react-ui-utility-suite'
  },
  {
    id: 'prj1',
    name: 'Swiggy Clone',
    position: "",
    type: 'Full Time',
    startDate: 'October 2023',
    endDate: 'September 2023',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQEHg8WfL1CDeg/company-logo_100_100/0/1712215166717/swiggy_in_logo?e=1729728000&v=beta&t=0dQYCgBwVLYCZZCHKUfVn5scNwFZwufcT47hFuz0Tm8',
    projectLink: 'https://preethipantangi.github.io/SwiggyClone',
    githubLink: 'https://github.com/PreethiPantangi/SwiggyClone'
  },
  {
    id: 'prj2',
    name: 'Personal Website',
    position: "",
    type: 'Part Time',
    startDate: 'June 2024',
    endDate: 'July 2024',
    logo: 'https://media.licdn.com/dms/image/C560BAQFqNrq17eg6FA/company-logo_100_100/0/1631397224290/portfolio_masterclass_logo?e=1729728000&v=beta&t=jzS6jbLot4-ckX9dJg9fezx_WmDd4n8preHMsoSfhmU',
    projectLink: 'https://preethipantangi.github.io/SwiggyClone',
    githubLink: 'https://github.com/PreethiPantangi/Website'
  },
  {
    id: 'prj3',
    name: 'Poke Poke - Infinite Scroll Pokemons',
    position: "",
    type: 'Part Time',
    startDate: 'June 2024',
    endDate: 'June 2024',
    logo: 'https://media.licdn.com/dms/image/C560BAQHpUgFPreHhzQ/company-logo_100_100/0/1668788853272/pokemonplay_io_logo?e=1729728000&v=beta&t=s6rKMAxfUYjJHeFZ23wa7YTQbddk93-23EUi0CBJTW8',
    projectLink: 'https://preethipantangi.github.io/PokePoke-InfiniteScrollPokemons/',
    githubLink: 'https://github.com/PreethiPantangi/PokePoke-InfiniteScrollPokemons'
  },
  {
    id: 'prj4',
    name: 'Route Guardian',
    position: "",
    type: 'Part Time',
    startDate: 'November 2023',
    endDate: 'November 2024',
    logo: 'https://media.licdn.com/dms/image/C560BAQFqNrq17eg6FA/company-logo_100_100/0/1631397224290/portfolio_masterclass_logo?e=1729728000&v=beta&t=jzS6jbLot4-ckX9dJg9fezx_WmDd4n8preHMsoSfhmU',
    projectLink: 'https://devpost.com/software/drivesmart-app',
    githubLink: 'https://github.com/PreethiPantangi/RouteGuardian'
  }
]

const page = () => {
  return (
    <div className='p-4'>
      <div className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br'>
        Projects
      </div>
      {projectDetails.map(projectDetail => (
        <Card key={projectDetail.id} detail={projectDetail}/>
      ))}
    </div>
  )
}

export default page
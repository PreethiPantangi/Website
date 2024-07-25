import Card from '@components/Card';

const experienceDetails = [
  {
    id: 'expd1',
    name: '22nd Century Technologies',
    position: "Programmer Analyst",
    type: 'Full Time',
    startDate: 'June 2024',
    endDate: 'Current',
    logo: 'https://media.licdn.com/dms/image/C510BAQHcQVFWe6kxkA/company-logo_100_100/0/1630600887183/22ndcenturytechnologies_logo?e=1729123200&v=beta&t=r6PJF0GjZw3JfR4APKtZMuDaQ8GsXNTahjxfyWte5_4',
    orgLink: 'https://tscti.com/'
  },
  {
    id: 'expd2',
    name: 'George Mason Univeristy',
    position: "Full Stack Engineer",
    type: 'Part Time',
    startDate: 'January 2024',
    endDate: 'May 2024',
    logo: 'https://media.licdn.com/dms/image/D4E0BAQHu5OKxS7J5tA/company-logo_100_100/0/1714017610072/george_mason_university_logo?e=1729123200&v=beta&t=vu6KWIa56PuQ1IDJRpo6l7gyWJwk7K_QblGgbItOR94',
    orgLink: 'https://www.gmu.edu/'
  },
  {
    id: 'expd3',
    name: 'George Mason Univeristy',
    position: "Graduate Teaching Assistant",
    type: 'Part Time',
    startDate: 'August 2023',
    endDate: 'January 2024',
    logo: 'https://media.licdn.com/dms/image/D4E0BAQHu5OKxS7J5tA/company-logo_100_100/0/1714017610072/george_mason_university_logo?e=1729123200&v=beta&t=vu6KWIa56PuQ1IDJRpo6l7gyWJwk7K_QblGgbItOR94',
    orgLink: 'https://www.gmu.edu/'
  },
  {
    id: 'expd4',
    name: 'George Mason Univeristy',
    position: "Graduate Research Fellowship",
    type: 'Part Time',
    startDate: 'May 2023',
    endDate: 'August 2024',
    logo: 'https://media.licdn.com/dms/image/D4E0BAQHu5OKxS7J5tA/company-logo_100_100/0/1714017610072/george_mason_university_logo?e=1729123200&v=beta&t=vu6KWIa56PuQ1IDJRpo6l7gyWJwk7K_QblGgbItOR94',
    orgLink: 'https://www.gmu.edu/'
  },
  {
    id: 'expd5',
    name: 'Dassault Systems',
    position: "Software Engineer Specialist",
    type: 'Full Time',
    startDate: 'August 2021',
    endDate: 'December 2022',
    logo: 'https://media.licdn.com/dms/image/C560BAQHroRzeNTva6Q/company-logo_100_100/0/1631330934922?e=1729123200&v=beta&t=oSA9vuSdr0cBHasJkOs03QmI2jUlYKjfBxK8SbME-sk',
    orgLink: 'https://www.3ds.com/'
  },
  {
    id: 'expd6',
    name: 'Xoriant Solutions Private Limited',
    position: "Software Engineer",
    type: 'Full Time',
    startDate: 'July 2020',
    endDate: 'August 2021',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQHQHG9NS8Iupw/company-logo_100_100/0/1720969919511?e=1729123200&v=beta&t=FlzNmHQtg2fHLnxEHHn-xcpK0pCSRmRmoJP6LfKZfrQ',
    orgLink: 'https://www.xoriant.com/'
  },
  {
    id: 'expd6',
    name: 'Xoriant Solutions Private Limited',
    position: "Associate Software Engineer",
    type: 'Full Time',
    startDate: 'July 2019',
    endDate: 'July 2020',
    logo: 'https://media.licdn.com/dms/image/D4D0BAQHQHG9NS8Iupw/company-logo_100_100/0/1720969919511?e=1729123200&v=beta&t=FlzNmHQtg2fHLnxEHHn-xcpK0pCSRmRmoJP6LfKZfrQ',
    orgLink: 'https://www.xoriant.com/'
  },
  {
    id: 'expd7',
    name: 'Virtusa Solutions Private Limited',
    position: "Intern",
    type: 'Part Time',
    startDate: 'May 2018',
    endDate: 'July 2018',
    logo: 'https://media.licdn.com/dms/image/D560BAQGEPXDEIb7QDA/company-logo_100_100/0/1682334528377/virtusa_logo?e=1729123200&v=beta&t=sqmGaGcK07f-6eQOMrgmPyZh4QDcwqKp0YHiTK7B8c0',
    orgLink: 'https://www.virtusa.com/'
  }
]

const page = () => {
  return (
    <div className="p-4">
      <div className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br'>
        Crafting Code & Innovating Solutions: My Journey in Tech
      </div>
      {experienceDetails.map(experienceDetail => (
        <Card key={experienceDetail.id} detail={experienceDetail}/>
      ))}
    </div>
  )
}

export default page
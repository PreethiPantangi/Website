import Card from '@components/Card';

const educationDetails = [
  {
    id: 'ed1',
    name: 'George Mason University',
    position: "Master's",
    major: 'Computer Science',
    startDate: 'January 2023',
    endDate: 'May 2024',
    logo: 'https://media.licdn.com/dms/image/D4E0BAQHu5OKxS7J5tA/company-logo_100_100/0/1714017610072/george_mason_university_logo?e=1729123200&v=beta&t=vu6KWIa56PuQ1IDJRpo6l7gyWJwk7K_QblGgbItOR94',
    degreeLink: 'https://www.parchment.com/u/award/ba3ffe2e622c02c3d3eb701fd9492884',
    orgLink: 'https://www.gmu.edu/'
  },
  {
    id: 'ed2',
    name: 'BVRIT Hyderabad College of Engineering for Women',
    position: "Bachelor's",
    major: 'Information Technology',
    startDate: 'August 2015',
    endDate: 'May 2019',
    logo: 'https://media.licdn.com/dms/image/C510BAQGxWdwKm6NTww/company-logo_100_100/0/1630593887392/bvrit_hyderabad_logo?e=1729123200&v=beta&t=LaIUog25jhKPNlQDQK0eMEYN1VvWqipB34PSy8sOzJA',
    orgLink: 'https://bvrithyderabad.edu.in/'
  }
]

const page = () => {
  return (
    <div className="p-4">
      <div className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br'>
        Building the Future, One Course at a Time: Explore My Academic Journey!
      </div>
      <div>
        {educationDetails.map(educationDetail => (
          <Card detail={educationDetail} key={educationDetail.id}/>
        ))}
      </div>
    </div>
  )
}

export default page
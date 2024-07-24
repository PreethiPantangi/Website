const skills = [
  {
    id: 'sk1',
    name: 'HTML',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s'
  },
  {
    id: 'sk2',
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png'
  },
  {
    id: 'sk3',
    name: 'Vanilla JavaScript',
    logo: 'https://i.pinimg.com/originals/13/40/7c/13407c12f50f08d328800c3caef43f61.png'
  },
  {
    id: 'sk9',
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
  },
  {
    id: 'sk4',
    name: 'React JS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'
  },
  {
    id: 'sk5',
    name: 'Redux',
    logo: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
  },
  {
    id: 'sk6',
    name: 'Angular 8+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  },
  {
    id: 'sk7',
    name: 'Next.JS',
    logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
  },
  {
    id: 'sk8',
    name: 'Tailwind CSS',
    logo: 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp'
  },
  {
    id: 'sk10',
    name: 'Apollo Client',
    logo: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wOWE1NmNkNDlhNmM2YjM3OWIyN2NkMjg5YjY2ZjcwZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.1i4jj7oadh4oLHLtecCEni5COJru5iw1jJFSiNbA6HU'
  },
  {
    id: 'sk11',
    name: 'MySQL',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VofdmPnt1ZYROHeZIHLROMfi5jVQiNq61A&s'
  },
  {
    id: 'sk12',
    name: 'PostgreSQL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png'
  },
  {
    id: 'sk13',
    name: 'MongoDB',
    logo: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png'
  },
  {
    id: 'sk14',
    name: 'Python',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BF8l33vU2D0uFaqtdV5ullV7adyOIoRtLw&s'
  },
  {
    id: 'sk14',
    name: 'Node.JS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTvSgYst4IPfUgcgITtczxHkYG-m7dfQuog&s'
  },
  {
    id: 'sk15',
    name: 'NPM',
    logo: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80NmQ4ZDAwZTE5MGJlNjQ3MDUzZjdkOTdmZDA0NzhlND9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.5nKe6nJhOqDvUG6NzyDo5HVNm_RiThxzGMbRgg2P0Ls'
  },
  {
    id: 'sk16',
    name: 'CI/CD',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABUoTg0hRIRysVXsNZg21ojLCOSsljUElA&s'
  },
  {
    id: 'sk17',
    name: 'Git',
    logo: 'https://avatars.githubusercontent.com/u/18133?s=200&v=4'
  },
  {
    id: 'sk18',
    name: 'Postman',
    logo: 'https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    id: 'sk19',
    name: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png'
  },
  {
    id: 'sk20',
    name: 'Beautiful Soup',
    logo: 'https://cdn-images-1.medium.com/max/1000/1*6M0FxnC6CD9L6xGwROl5jQ.png'
  },
  {
    id: 'sk21',
    name: 'Flask',
    logo: 'https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png'
  },
  {
    id: 'sk22',
    name: 'Django',
    logo: 'https://www.djangoproject.com/m/img/logos/django-logo-positive.png'
  },
  {
    id: 'sk22',
    name: 'JIRA',
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png'
  },
  {
    id: 'sk22',
    name: 'Karma',
    logo: 'https://avatars.githubusercontent.com/u/3284117?s=280&v=4'
  },
]

const page = () => {
  return (
    <div className="p-4">
      <div className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br'>
        Skills
      </div>
      <div className="flex flex-wrap gap-4">
        { 
          skills.map(skill => (
            <div key={skill.id} className="w-52 gap-4 mt-5">
              <div>
                <div className="flex justify-center">{skill.name}</div>
                <div className="flex justify-center"><img src={skill.logo} alt={skill.name} width='50px' height='50px'/></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
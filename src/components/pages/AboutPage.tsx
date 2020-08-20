import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nisi hic obcaecati tempore animi nesciunt, placeat atque aperiam neque
        at sed repudiandae maiores. Repellendus cumque ipsam labore voluptatibus
        temporibus placeat?Nesciunt perferendis, cumque sed atque soluta nemo
        ipsam molestiae unde, commodi, dicta doloremque vero asperiores! Illum
        nesciunt similique modi eligendi voluptas voluptate animi minus,
        impedit, at ea nam autem suscipit!
      </p>
      <button className="btn" onClick={() => history.push('/')}>Back to Todo page</button>
    </>
  )
}

export default AboutPage

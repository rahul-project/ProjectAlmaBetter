import { Outlet, Link } from 'react-router-dom'

const LeftBox = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/personalInfo">Personal Information</Link>
          </li>
          <li>
            <Link to="/workExp">Work Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/keySkill">Key Skill</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default LeftBox

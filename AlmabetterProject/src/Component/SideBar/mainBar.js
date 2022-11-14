import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeftBox from './leftBox'
import React from 'react'
import KeySkill from './keySkill'
import NoPage from './noPage'
import Education from './education'
import WorkExp from './workExp'
import Personal from './personalInfo'

const MainBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeftBox />}>
          <Route path="personalInfo" element={<Personal />} />
          <Route path="workExp" element={<WorkExp />} />
          <Route path="education" element={<Education />} />
          <Route path="keySkill" element={<KeySkill />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainBar

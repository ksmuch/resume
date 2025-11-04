import './App.less'
import Menu from './components/Menu/Menu'
import Photo from './components/Photo/Photo'
import AboutPage from './components/AboutPage/AboutPage'
import SkillsPage from './components/SkillsPage/SkillsPage'
import ExperiencePage from './components/ExperiencePage/ExperiencePage'
import EducationPage from './components/EducationPage/EducationPage'
import { useState } from 'react'


function renderPage(page: string) {
  switch (page) {
    case "about":
      return <AboutPage />
    case "skills":
      return <SkillsPage />
    case "exp":
      return <ExperiencePage />
    case "education":
      return <EducationPage />
  }
}

export default function App() {
  let [page, setPage] = useState("about");
  let handleMenuSelect = (page: string) => {
    setPage(page);
  }

  return (
    <>
      <Menu switchMenu = {handleMenuSelect} page = {page}/>
      <Photo />
      {renderPage(page)}
    </>
  )
}

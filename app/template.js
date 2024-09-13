// 'use client'
// import NavBar from "../components/NavigationBar/NavBar"
// import { usePathname } from "next/navigation"
// import Footer from "../components/Footer/Footer"

export default function Template({ children }) {
  // const pathname = usePathname()
  return (
  <>
    {/* <NavBar pagePath={pathname}/> */}
    {children}
    {/* <Footer/> */}
  </>
)}
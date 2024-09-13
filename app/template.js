import NavBar from "@/components/global/NavBar/NavBar"
import Footer from "@/components/global/Footer/Footer"
// import { usePathname } from "next/navigation"

export default function Template({ children }) {
  // const pathname = usePathname()
  return (
  <>
    <NavBar/>
    {children}
    <Footer/>
  </>
)}
import Navbar from "../compnent/Navbar";

export default function AuthLayout({children}) {
    return (
        <>
        <Navbar /> 
        {children}
        </>
    )
}
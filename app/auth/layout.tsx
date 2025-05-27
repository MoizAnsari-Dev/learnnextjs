import Navbar from "../compnent/Navbar";

export default function AuthLayout({children}: any) {
    return (
        <>
        <Navbar /> 
        {children}
        </>
    )
}
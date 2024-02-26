import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Cookies from "js-cookie";

export default function LogOutButton(){
    const router = useRouter();

    const handleLogOut = () => {
        Cookies.remove('token')
        localStorage.removeItem('token')
        router.push('/')
    }

    return(
        <Button variant="destructive" onClick={handleLogOut}>Log Out</Button>
    )
}
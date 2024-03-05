'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import api from "@/services/Api";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Ban } from "lucide-react";

export default function CardLogin(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setError] = useState(false)

    const router = useRouter()

    const handleLogin = () => {
        try{
            api.post('/auth/login', {
                login: email,
                password: password,
            }).then((response) => {
                localStorage.setItem('token', response.data.token)
                Cookies.set('token', response.data.token);
                router.push('/home')
            }).catch((err) => {
                setError(true)
            })
        }catch(e){  
            
        }
    }


    console.log(errors)


    return(
        <Card>
            <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription className="h-5">Do you have an account? Log In</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label>E-mail</Label>
                        <Input placeholder="Use your E-mail to log in" type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input placeholder="Use your password to log in" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex gap-3">
                        <Button onClick={handleLogin}>Log In</Button>
                        <Button variant={"link"} >Do you forgot your password?</Button>
                    </div>
                    <div className={errors ? 'block' : 'hidden'}>
                    <Alert variant="destructive">
                        <Ban className="h-4 w-4" />
                        <AlertTitle>Something went wrong</AlertTitle>
                        <AlertDescription>
                            Wrong password or email!
                        </AlertDescription>
                    </Alert>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
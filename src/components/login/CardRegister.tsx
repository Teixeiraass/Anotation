'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import api from "@/services/Api";

export default function CardRegister(){
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        try{
            api.post('/auth/register', {
                username: username,
                login: email,
                password: password,
                role: 'USER'
            }).then((response) => {
                console.log("Usuario criado com sucesso!", response)
            })
        }catch(e){
            console.log("Infelizmente nao conseguimos criar sua conta!", e)
        }
    }
    
    return(
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription className="h-5">Do not have an account? Create one!</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleCreateAccount}>
                    <div className="space-y-2">
                        <Label>Username</Label>
                        <Input placeholder="Create an username for you" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                        <Label>E-mail</Label>
                        <Input placeholder="Use your best E-mail" type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input placeholder="Create one password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                    </div>  
                    <Button variant={"outline"} type="submit">Register</Button>
                </form>
            </CardContent>
        </Card>
    )
}
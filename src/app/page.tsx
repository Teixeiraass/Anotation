import CardLogin from "@/components/login/CardLogin";
import CardRegister from "@/components/login/CardRegister";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface authenticationPage{

}

export default function AuthScreen(){
    return(
        <div className="p-6 mx-auto space-y-4 w-2/5">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <Tabs defaultValue="login" className="">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signin">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="mt-5">
                    <CardLogin/>
                </TabsContent>
                <TabsContent value="signin" className="mt-5">
                    <CardRegister/>
                </TabsContent>
            </Tabs>
        </div>
    )
}
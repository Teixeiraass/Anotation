import LogOutButton from "./LogOutButton";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import {Settings} from 'lucide-react'

export default function Setting(){
    return(
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost"><Settings/></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Settings</SheetTitle>
                </SheetHeader>
                <div>
                    <div className="flex space-x-5 items-center">
                        <h1>Themes</h1>  
                        <ThemeToggle/>
                    </div>
                </div>
                <div className="bottom-10 fixed">
                    <LogOutButton/>
                </div>
            </SheetContent>
        </Sheet>
    )
}
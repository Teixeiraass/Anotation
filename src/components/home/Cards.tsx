import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import DialogCard from "./DialogCard";

export default function Cards() {
    return(
        <>
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Note name</CardTitle>
                    <CardDescription>Note Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Conteudo</p>
                </CardContent>
                <CardFooter>
                    <DialogCard/>
                </CardFooter>
            </Card>
        </>
    )
}
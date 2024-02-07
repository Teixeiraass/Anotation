
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import DialogCard from "./DialogCard";

interface Cards{
    id: number,
    title: string,
    description: string,
    content: string
}

export default function Cards({id ,title, description, content}:Cards) {
    return(
        <>
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="h-10">{description}</CardDescription>
                </CardHeader>
                <CardContent className="h-32">
                    <p>{content}</p>
                </CardContent>
                <CardFooter>
                    <DialogCard
                        id={id}
                        title={title}
                        description={description}
                        content={content}
                    />
                </CardFooter>
            </Card>
        </>
    )
}
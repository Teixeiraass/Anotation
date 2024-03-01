
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import DialogCard from "./DialogCard";

interface Cards{
    id: number,
    title: string,
    description: string,
    content: string,
    color: string,
    type: string,
}

export default function Cards({id ,title, description, content, color, type}:Cards) {
    return(
        <>
            <Card className="w-96" style={{
                backgroundColor: color
            }}>
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
                        type={type}
                        color={color}
                    />
                </CardFooter>
            </Card>
        </>
    )
}
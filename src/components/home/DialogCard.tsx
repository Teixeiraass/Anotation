import api from "@/services/Api";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface DialogCard{
    id: number,
    title: string,
    description: string,
    content: string
}

export default function DialogCard({id ,title, description, content}: DialogCard){

    const handleDelete = () => {
        api.delete(`/api/notes/${id}`).then((response) => {
            
        })
        window.location.reload();
    }

    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open note</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div>
                        <p>{content}</p>
                    </div>
                    <DialogFooter>
                        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                        <a href="/edit"><Button variant="outline">Edit</Button></a>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
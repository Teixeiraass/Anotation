import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export default function DialogCard(){
    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open note</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Notes</DialogTitle>
                        <DialogDescription>My notes description</DialogDescription>
                    </DialogHeader>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod totam? Voluptatem voluptates excepturi inventore ex tempora odit ab vero accusamus, quas blanditiis, eius iure dolores quisquam explicabo consequuntur dignissimos.z</p>
                    </div>
                    <DialogFooter>
                        <Button variant="destructive">Delete</Button>
                        <a href="/edit"><Button variant="outline">Edit</Button></a>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
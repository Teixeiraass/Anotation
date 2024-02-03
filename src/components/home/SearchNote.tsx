import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchNote() {
    return(
        <>
            <form className="flex gap-3">
                <Input placeholder="Search" className="w-auto"/>
                <Button type="submit" variant="default">Search</Button>
            </form>
        </>
    )
}
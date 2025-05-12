import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Author = {
    _id: string;
    name: string;
    image: string;
};

type Startup = {
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    views: number;
    _createdAt: string;
    author: Author;
};
export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
} = post;

return (
    <li className="startup-card group">
    <div className="flex-between">
    <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="icon-text-group">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{views}</span>
        </div>
    </div>

    <div className="flex-between mt-5 gap-5">
    <div className="flex">
        <Link href={`/user/${author?._id}`} style={{ textDecoration: "none" }}>
        <p className="text-16-medium line-clamp-1 mb-0">{author?.name}</p>
        </Link>
        <Link href={`/startup/${_id}`} style={{ textDecoration: "none" }}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
        </Link>
    </div>
    <Link href={`/user/${author?._id}`} >
    <Image
        src={author?.image!}
        alt={author?.name!}
        width={48}
        height={48}
        className="rounded-full"
    />
    </Link>
    </div>

    <Link className="no-underline" href={`/startup/${_id}`} style={{ textDecoration: "none" }}>
        <p className="startup-card_desc ">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img" />
    </Link>

    <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}` } style={{ textDecoration: "none" }}>
        <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
        <Link href={`/startup/${_id}`} style={{ textDecoration: "none" }}>Details</Link>
        </Button>
    </div>
    </li>
);
};

export const StartupCardSkeleton = () => (
<>
    {[0, 1, 2, 3, 4].map((index: number) => (
    <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
    </li>
    ))}
</>
);

export default StartupCard;
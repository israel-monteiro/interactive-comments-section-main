import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";

export const CommentList = () => {
    const { comments } = useContext(CommentContext);
    console.log(comments);
    return (
        <section className="mx-auto flex w-full max-w-182.5 flex-col gap-6">
            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </section>
    );
};

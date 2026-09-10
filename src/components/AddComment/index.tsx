import { useContext, useState, type SubmitEventHandler } from "react";
import { CommentContext } from "../../contexts/CommentContext";

interface AddCommentProps {
    isReplying?: boolean;
    commentId?: number;
    replyingTo?: string;
    setIsReplying?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddComment = ({ isReplying, commentId, replyingTo, setIsReplying }: AddCommentProps) => {
    const { currentUser, addComment, addReply } = useContext(CommentContext);
    const [content, setContent] = useState("");

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (!content.trim()) return;

        if (isReplying && commentId !== undefined && replyingTo && setIsReplying) {
            addReply(commentId, replyingTo, content.trim());
            setIsReplying(false);
        } else {
            addComment(content.trim());
        }

          setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="grid w-full max-w-182.5 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg bg-white px-4 py-[14.5px] md:flex md:items-start md:p-6">
            <img
                src={currentUser.image.png}
                alt={currentUser.username}
                className="row-start-2 size-8 shrink-0 rounded-full object-cover md:size-10"
            />
            <textarea
                aria-label="Add a comment"
                placeholder="Add a comment..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="col-span-2 row-start-1 h-24 w-full min-w-0 flex-1 resize-none rounded-lg border border-grey-100 bg-white px-4 py-2 text-grey-800 caret-purple-600 placeholder:text-grey-500 focus:border-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
            />

            <button
                type="submit"
                className="col-start-2 row-start-2 flex h-12 w-26 shrink-0 items-center justify-center rounded-lg bg-purple-600 py-3 font-medium text-white uppercase hover:bg-purple-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
            >
                {isReplying ? "Reply" : "Send"}
            </button>
        </form>
    );
};

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
        <form onSubmit={handleSubmit} className="flex w-full max-w-182.5 items-start gap-4 rounded-lg bg-white p-6">
            <img
                src={currentUser.image.png}
                alt={currentUser.username}
                className="size-10 shrink-0 rounded-full object-cover"
            />
            <textarea
                placeholder="Add a comment..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="h-24 min-w-0 flex-1 resize-none rounded-lg border border-grey-100 bg-white px-4 py-2 text-grey-800 caret-purple-600 placeholder:text-grey-500 focus:border-purple-600 focus:outline-none"
            />

            <button
                type="submit"
                className="flex h-12 w-26 shrink-0 items-center justify-center rounded-lg bg-purple-600 py-3 font-medium text-white uppercase hover:bg-purple-200"
            >
                {isReplying ? "Reply" : "Send"}
            </button>
        </form>
    );
};

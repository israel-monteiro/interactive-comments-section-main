import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/CommentContext";

interface CommentContentProps {
    content: string;
    replyingTo?: string;
    isEditing: boolean;
    commentId: number;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentContent = ({ content, replyingTo, isEditing, commentId, setIsEditing }: CommentContentProps) => {
    const [editedContent, setEditedContent] = useState(content);

    const { updateComment } = useContext(CommentContext);
    return (
        <>
            {isEditing ? (
                <>
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="block h-31 w-full min-w-0 resize-none rounded-lg border border-purple-600 bg-white px-4 py-2 text-grey-800 caret-purple-600 focus:border-purple-600 focus:outline-none"
                    ></textarea>
                    <button
                        type="button"
                        className="mt-4 ml-auto flex h-12 w-26 items-center justify-center rounded-lg bg-purple-600 py-3 font-medium text-white hover:bg-purple-200"
                        onClick={() => {
                            updateComment(commentId, editedContent);
                            setIsEditing(false);
                        }}
                    >
                        UPDATE
                    </button>
                </>
            ) : (
                <p className="wrap-break-word">
                    {replyingTo && <span className="font-medium text-purple-600">@{replyingTo} </span>}
                    {content}
                </p>
            )}
        </>
    );
};

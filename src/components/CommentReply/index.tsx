import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Reply } from "../../interfaces/comment";
import { VoteComment } from "../VoteComment";
import { CommentActions } from "../CommentActions";
import { CommentContent } from "../CommentContent";
import { AddComment } from "../AddComment";

interface CommentReplyProps {
    reply: Reply;
    commentId: number;
}

export const CommentReply = ({ reply, commentId }: CommentReplyProps) => {
    const { currentUser } = useContext(CommentContext);
    const [isEditing, setIsEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    const isCurrentUser = reply.user.username === currentUser.username;

    return (
        <>
            <article className="flex w-full items-start gap-6 rounded-lg bg-white p-6">
                <VoteComment id={reply.id} score={reply.score} />
                <div className="min-w-0 flex-1">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 whitespace-nowrap">
                            <img
                                className="size-8 shrink-0 rounded-full object-cover"
                                src={reply.user.image.png}
                                alt={reply.user.username}
                            />
                            <strong className="font-medium text-grey-800">{reply.user.username}</strong>
                            {isCurrentUser && (
                                <span className="-ml-2 shrink-0 rounded-xs bg-purple-600 px-[6.5px] py-[1.5px] text-[13px] leading-4 font-medium text-white">
                                    you
                                </span>
                            )}
                            <span>{reply.createdAt}</span>
                        </div>
                        <CommentActions
                            isCurrentUser={isCurrentUser}
                            isEditing={() => setIsEditing(!isEditing)}
                            isReplying={() => setIsReplying(!isReplying)}
                        />
                    </div>
                    <CommentContent
                        replyingTo={reply.replyingTo}
                        content={reply.content}
                        isEditing={isEditing}
                        commentId={reply.id}
                        setIsEditing={setIsEditing}
                    />
                </div>
            </article>
            {isReplying && (
                <AddComment
                    isReplying={isReplying}
                    commentId={commentId}
                    replyingTo={reply.user.username}
                    setIsReplying={setIsReplying}
                />
            )}
        </>
    );
};

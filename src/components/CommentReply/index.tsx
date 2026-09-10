import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Reply } from "../../interfaces/comment";
import { VoteComment } from "../VoteComment";
import { CommentActions } from "../CommentActions";
import { CommentContent } from "../CommentContent";
import { AddComment } from "../AddComment";
import { DeleteModal } from "../DeleteModal";

interface CommentReplyProps {
    reply: Reply;
    commentId: number;
}

export const CommentReply = ({ reply, commentId }: CommentReplyProps) => {
    const { currentUser } = useContext(CommentContext);
    const [isEditing, setIsEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const isCurrentUser = reply.user.username === currentUser.username;

    return (
        <>
            <article className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-4 rounded-lg bg-white p-4 md:grid-cols-[40px_minmax(0,1fr)_auto] md:gap-x-6 md:px-6 md:py-[23.5px]">
                <div className="col-start-1 row-start-3 self-center md:row-span-2 md:row-start-1 md:self-start">
                    <VoteComment id={reply.id} score={reply.score} />
                </div>
                <div className="contents">
                    <div className="contents">
                        <div className="col-span-2 row-start-1 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 md:col-span-1 md:col-start-2">
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
                        <div className="col-start-2 row-start-3 self-center justify-self-end md:col-start-3 md:row-start-1">
                            <CommentActions
                                isCurrentUser={isCurrentUser}
                                isEditing={() => setIsEditing(!isEditing)}
                                isReplying={() => setIsReplying(!isReplying)}
                                isDeleteModalOpen={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
                            />
                        </div>
                    </div>
                    <div className="col-span-2 row-start-2 min-w-0 md:col-start-2">
                        <CommentContent
                            replyingTo={reply.replyingTo}
                            content={reply.content}
                            isEditing={isEditing}
                            commentId={reply.id}
                            setIsEditing={setIsEditing}
                        />
                    </div>
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
            {isDeleteModalOpen && (
                <DeleteModal onCancel={() => setIsDeleteModalOpen(!isDeleteModalOpen)} commentId={reply.id} />
            )}
        </>
    );
};

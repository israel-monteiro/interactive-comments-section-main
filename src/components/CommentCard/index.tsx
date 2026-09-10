import { useContext, useState } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Comment } from "../../interfaces/comment";
import { CommentReply } from "../CommentReply";
import { VoteComment } from "../VoteComment";
import { CommentActions } from "../CommentActions";
import { CommentContent } from "../CommentContent";
import { AddComment } from "../AddComment";
import { DeleteModal } from "../DeleteModal";

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
    const { currentUser } = useContext(CommentContext);
    const [isEditing, setIsEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const isCurrentUser = comment.user.username === currentUser.username;
    return (
        <div>
            <article className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-4 rounded-lg bg-white p-4 md:grid-cols-[40px_minmax(0,1fr)_auto] md:gap-x-6 md:px-6 md:py-[23.5px]">
                <div className="col-start-1 row-start-3 self-center md:row-span-2 md:row-start-1 md:self-start">
                    <VoteComment id={comment.id} score={comment.score} />
                </div>
                <div className="contents">
                    <div className="contents">
                        <div className="col-span-2 row-start-1 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 md:col-span-1 md:col-start-2">
                            <img
                                className="size-8 shrink-0 rounded-full object-cover"
                                src={comment.user.image.png}
                                alt={comment.user.username}
                            />

                            <strong className="font-medium text-grey-800">{comment.user.username}</strong>
                            {isCurrentUser && (
                                <span className="-ml-2 shrink-0 rounded-xs bg-purple-600 px-[6.5px] py-[1.5px] text-[13px] leading-4 font-medium text-white">
                                    you
                                </span>
                            )}
                            <span>{comment.createdAt}</span>
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
                            content={comment.content}
                            isEditing={isEditing}
                            commentId={comment.id}
                            setIsEditing={setIsEditing}
                        />
                    </div>
                </div>
            </article>
            {isReplying && (
                <div className="mt-4 md:mt-6">
                    <AddComment
                        isReplying={isReplying}
                        replyingTo={comment.user.username}
                        commentId={comment.id}
                        setIsReplying={setIsReplying}
                    />
                </div>
            )}
            <div className="mt-4 flex min-w-0 flex-col gap-4 border-l-2 border-grey-100 pl-4 empty:hidden md:mt-6 md:ml-11.5 md:gap-6 md:pl-10">
                {comment.replies.map((reply) => (
                    <CommentReply key={reply.id} reply={reply} commentId={comment.id} />
                ))}
            </div>
            {isDeleteModalOpen && <DeleteModal onCancel={() => setIsDeleteModalOpen(!isDeleteModalOpen)} commentId={comment.id} />}
        </div>
    );
};

import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Comment } from "../../interfaces/comment";
import { CommentReply } from "../CommentReply";
import { VoteComment } from "../VoteComment";
import { CommentActions } from "../CommentActions";

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
    const { currentUser } = useContext(CommentContext);

    const isCurrentUser = comment.user.username === currentUser.username;
    return (
        <div className="comment-thread">
            <article className="flex w-full items-start gap-6 rounded-lg bg-white p-6">
                <VoteComment id={comment.id} score={comment.score} />
                <div className="min-w-0 flex-1">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                className="size-8 shrink-0 rounded-full object-cover"
                                src={comment.user.image.png}
                                alt={comment.user.username}
                            />

                            <strong className="font-medium text-grey-800">{comment.user.username}</strong>
                            {isCurrentUser && <span className="-ml-2 shrink-0 rounded-[2px] bg-purple-600 px-[6.5px] py-[1.5px] text-[13px] leading-4 font-medium text-white">you</span>}
                            <span>{comment.createdAt}</span>
                        </div>
                        <CommentActions
                            isCurrentUser={isCurrentUser}
                        />
                    </div>
                    <p className="wrap-break-word">{comment.content}</p>
                </div>
            </article>
            <div className="mt-6 ml-11.5 flex min-w-0 flex-col gap-6 border-l-2 border-grey-100 pl-10 empty:hidden">
                {comment.replies.map((reply) => (
                    <CommentReply key={reply.id} reply={reply} />
                ))}
            </div>
        </div>
    );
};

import type { Comment } from "../../interfaces/comment";
import { CommentReply } from "../CommentReply";
import { VoteComment } from "../VoteComment";
import IconReply from "/images/icon-reply.svg";

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
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
                            <span>{comment.createdAt}</span>
                        </div>
                        <button type="button" className="flex items-center gap-2 font-medium text-purple-600">
                            <img className="h-[12.25px] w-3.5 shrink-0" src={IconReply} alt="" />
                            Reply
                        </button>
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

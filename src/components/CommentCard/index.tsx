import type { Comment } from "../../interfaces/comment";
import { VoteControls } from "../VoteControls";
import IconReply from "/images/icon-reply.svg";

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
    return (
        <article className="flex w-full items-start gap-6 rounded-lg bg-white p-6">
            <VoteControls comment={comment} />
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
                    <button className="flex items-center gap-2 font-medium text-purple-600">
                        <img className="h-[12.25px] w-3.5 shrink-0" src={IconReply} alt="" />
                        Reply
                    </button>
                </div>
                <p className="wrap-break-word">{comment.content}</p>
            </div>
        </article>
    );
};

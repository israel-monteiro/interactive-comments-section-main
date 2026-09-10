import type { Reply } from "../../interfaces/comment";
import { VoteComment } from "../VoteComment";
import IconReply from "/images/icon-reply.svg";

interface CommentReplyProps {
    reply: Reply;
}

export const CommentReply = ({ reply }: CommentReplyProps) => {
    console.log(reply);
    return (
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
                        <span>{reply.createdAt}</span>
                    </div>
                    <button type="button" className="flex shrink-0 items-center gap-2 font-medium text-purple-600">
                        <img className="h-[12.25px] w-3.5 shrink-0" src={IconReply} alt="" />
                        Reply
                    </button>
                </div>
                <p className="wrap-break-word"><span className="font-medium text-purple-600">@{reply.replyingTo} </span>{reply.content}</p>
            </div>
        </article>
    );
};

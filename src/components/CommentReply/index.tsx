import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Reply } from "../../interfaces/comment";
import { VoteComment } from "../VoteComment";
import { CommentActions } from "../CommentActions";

interface CommentReplyProps {
    reply: Reply;
}

export const CommentReply = ({ reply }: CommentReplyProps) => {
    const { currentUser } = useContext(CommentContext);

    const isCurrentUser = reply.user.username === currentUser.username;

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
                        {isCurrentUser && <span className="-ml-2 shrink-0 rounded-xs bg-purple-600 px-[6.5px] py-[1.5px] text-[13px] leading-4 font-medium text-white">you</span>}
                        <span>{reply.createdAt}</span>
                    </div>
                    <CommentActions
                        isCurrentUser={isCurrentUser}
                    />
                </div>
                <p className="wrap-break-word">
                    <span className="font-medium text-purple-600">@{reply.replyingTo} </span> {reply.content}
                </p>
            </div>
        </article>
    );
};

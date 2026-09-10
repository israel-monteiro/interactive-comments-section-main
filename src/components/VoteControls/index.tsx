import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";
import type { Comment } from "../../interfaces/comment";

interface VoteControlsProps {
    comment: Comment;
}

export const VoteControls = ({ comment }: VoteControlsProps) => {
    const { increaseScore, reduceScore } = useContext(CommentContext);

    return (
        <div className="flex h-25 w-10 shrink-0 flex-col items-center justify-center gap-4 rounded-[10px] bg-grey-50 text-purple-600">
            <button className="flex w-7.5 items-center justify-center" type="button" aria-label="Increase score" onClick={() => increaseScore(comment.id)}>
                <img className="size-2.75" src="/images/icon-plus.svg" alt="" />
            </button>
            <span className="w-7.5 text-center font-medium">{comment.score}</span>
            <button className="flex w-7.5 items-center justify-center" type="button" aria-label="Decrease score" onClick={() => reduceScore(comment.id)}>
                <img className="h-0.75 w-2.75" src="/images/icon-minus.svg" alt="" />
            </button>
        </div>
    );
};

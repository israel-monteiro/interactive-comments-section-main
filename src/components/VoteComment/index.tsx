import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";

interface VoteCommentProps {
    id: number;
    score: number;
}

export const VoteComment = ({ id, score }: VoteCommentProps) => {
    const { increaseScore, reduceScore } = useContext(CommentContext);

    return (
        <div className="flex h-10 w-25 shrink-0 items-center justify-center gap-1 md:h-25 md:w-10 md:flex-col md:gap-1 rounded-[10px] bg-grey-50 text-purple-600">
            <button
                className="group flex h-8 w-8 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                type="button"
                aria-label="Increase score"
                onClick={() => increaseScore(id)}
            >
                <img className="size-2.75 group-hover:opacity-50" src="/images/icon-plus.svg" alt="" />
            </button>
            <span className="w-7.5 text-center font-medium">{score}</span>
            <button
                className="group flex h-8 w-8 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                type="button"
                aria-label="Decrease score"
                onClick={() => reduceScore(id)}
            >
                <img className="h-0.75 w-2.75 group-hover:opacity-50" src="/images/icon-minus.svg" alt="" />
            </button>
        </div>
    );
};

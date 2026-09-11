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
                className="flex h-8 w-8 shrink-0 items-center justify-center text-purple-200 hover:text-purple-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                type="button"
                aria-label="Increase score"
                onClick={() => increaseScore(id)}
            >
                <svg className="size-2.75" viewBox="0 0 11 11" aria-hidden="true"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="currentColor"/></svg>
            </button>
            <span className="w-7.5 text-center font-medium">{score}</span>
            <button
                className="flex h-8 w-8 shrink-0 items-center justify-center text-purple-200 hover:text-purple-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                type="button"
                aria-label="Decrease score"
                onClick={() => reduceScore(id)}
            >
                <svg className="h-0.75 w-2.75" viewBox="0 0 11 3" aria-hidden="true"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="currentColor"/></svg>
            </button>
        </div>
    );
};

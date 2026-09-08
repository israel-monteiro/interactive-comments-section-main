import { useState } from "react";
import { CommentContext } from "./CommentContext";
import data from "../data/data.json";
import type { Comment, Reply } from "../interfaces/comment";

interface CommentProviderProps {
    children: React.ReactNode;
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
    const [comments, setComments] = useState<Comment[]>(data.comments);
    const currentUser = data.currentUser;

    function addComment(content: string): void {
        const newComment: Comment = {
            id: Date.now(),
            content: content,
            createdAt: "now",
            score: 0,
            user: currentUser,
            replies: [],
        };

        setComments((prevComments) => [...prevComments, newComment]);
    }

    function addReply(parentCommentId: number, replyingTo: string, content: string): void {
        const newReply: Reply = {
            id: Date.now(),
            content,
            createdAt: "now",
            score: 0,
            replyingTo,
            user: currentUser,
        };

        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === parentCommentId
                    ? {
                          ...comment,
                          replies: [...comment.replies, newReply],
                      }
                    : comment,
            ),
        );
    }

    function updateComment(commentId: number, content: string): void {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          content,
                      }
                    : {
                          ...comment,
                          replies: comment.replies.map((reply) =>
                              reply.id === commentId
                                  ? {
                                        ...reply,
                                        content,
                                    }
                                  : reply,
                          ),
                      },
            ),
        );
    }

    function deleteComment(commentId: number): void {
        setComments((prevComments) =>
            prevComments
                .filter((comment) => comment.id !== commentId)
                .map((comment) => ({
                    ...comment,
                    replies: comment.replies.filter((reply) => reply.id !== commentId),
                })),
        );
    }

    function increaseScore(commentId: number): void {
        updateScore(commentId, 1);
    }

    function reduceScore(commentId: number): void {
        updateScore(commentId, -1);
    }

    function updateScore(commentId: number, value: number): void {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          score: Math.max(0, comment.score + value),
                      }
                    : {
                          ...comment,
                          replies: comment.replies.map((reply) =>
                              reply.id === commentId
                                  ? {
                                        ...reply,
                                        score: Math.max(0, reply.score + value),
                                    }
                                  : reply,
                          ),
                      },
            ),
        );
    }

    return (
        <CommentContext.Provider
            value={{
                comments,
                currentUser,
                addComment,
                addReply,
                updateComment,
                deleteComment,
                increaseScore,
                reduceScore,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};

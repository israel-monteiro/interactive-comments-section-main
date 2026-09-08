import { createContext } from "react";
import type { Comment } from "../interfaces/comment";
import type { User } from "../interfaces/user";

interface CommentContextType {
    comments: Comment[];
    currentUser: User;
    addComment: (content: string) => void;
    addReply: (commentId: number, replyingTo: string, content: string) => void;
    updateComment: (commentId: number, content: string) => void;
    deleteComment: (commentId: number) => void;
    increaseScore: (commentId: number) => void;
    reduceScore: (commentId: number) => void;
}

export const CommentContext = createContext({} as CommentContextType);

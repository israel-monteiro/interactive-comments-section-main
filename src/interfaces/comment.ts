import type { User } from "./user";

export interface CommentBase {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
}

export interface Reply extends CommentBase {
    replyingTo: string;
}

export interface Comment extends CommentBase {
    replies: Reply[];
}
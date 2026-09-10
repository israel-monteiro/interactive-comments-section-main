import IconReply from "/images/icon-reply.svg";
import IconDelete from "/images/icon-delete.svg";
import IconEdit from "/images/icon-edit.svg";

interface CommentActionsProps {
    isCurrentUser: boolean;
    isEditing: () => void;
}

export const CommentActions = ({ isCurrentUser, isEditing }: CommentActionsProps) => {
    return (
        <>
            {isCurrentUser ? (
                <div className="flex shrink-0 items-center gap-6">
                    <button className="flex items-center gap-2 font-medium text-pink-400">
                        <img className="h-3.5 w-3 shrink-0" src={IconDelete} alt="" />
                        Delete
                    </button>
                    <button className="flex items-center gap-2 font-medium text-purple-600" onClick={isEditing}>
                        <img className="size-3.5 shrink-0" src={IconEdit} alt="" />
                        Edit
                    </button>
                </div>
            ) : (
                <button type="button" className="flex shrink-0 items-center gap-2 font-medium text-purple-600">
                    <img className="h-[12.25px] w-3.5 shrink-0" src={IconReply} alt="" />
                    Reply
                </button>
            )}
        </>
    );
};

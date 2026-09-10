import IconReply from "/images/icon-reply.svg";
import IconDelete from "/images/icon-delete.svg";
import IconEdit from "/images/icon-edit.svg";

interface CommentActionsProps {
    isCurrentUser: boolean;
    isEditing: () => void;
    isReplying: () => void;
    isDeleteModalOpen: () => void;
}

export const CommentActions = ({ isCurrentUser, isEditing, isReplying, isDeleteModalOpen }: CommentActionsProps) => {
    return (
        <>
            {isCurrentUser ? (
                <div className="flex shrink-0 items-center gap-4 md:gap-6">
                    <button type="button" className="group flex min-h-8 items-center gap-2 font-medium text-pink-400 hover:text-pink-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600" onClick={isDeleteModalOpen}>
                        <img className="h-3.5 w-3 shrink-0 group-hover:opacity-50" src={IconDelete} alt="" />
                        Delete
                    </button>
                    <button type="button" className="group flex min-h-8 items-center gap-2 font-medium text-purple-600 hover:text-purple-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600" onClick={isEditing}>
                        <img className="size-3.5 shrink-0 group-hover:opacity-50" src={IconEdit} alt="" />
                        Edit
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    className="group flex min-h-8 shrink-0 items-center gap-2 font-medium text-purple-600 hover:text-purple-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
                    onClick={isReplying}
                >
                    <img className="h-[12.25px] w-3.5 shrink-0 group-hover:opacity-50" src={IconReply} alt="" />
                    Reply
                </button>
            )}
        </>
    );
};

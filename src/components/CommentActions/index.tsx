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
                <div className="flex shrink-0 items-center gap-6">
                    <button className="flex items-center gap-2 font-medium text-pink-400 hover:text-pink-200 hover:relative hover:[&>img]:opacity-0 hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:bg-pink-200 hover:before:mask-[url(/images/icon-delete.svg)] hover:before:mask-no-repeat hover:before:mask-position-[left_center] hover:before:mask-size-[12px_14px]" onClick={isDeleteModalOpen}>
                        <img className="h-3.5 w-3 shrink-0" src={IconDelete} alt="" />
                        Delete
                    </button>
                    <button className="flex items-center gap-2 font-medium text-purple-600 hover:text-purple-200 hover:relative hover:[&>img]:opacity-0 hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:bg-purple-200 hover:before:mask-[url(/images/icon-edit.svg)] hover:before:mask-no-repeat hover:before:mask-position-[left_center] hover:before:mask-size-[14px_14px]" onClick={isEditing}>
                        <img className="size-3.5 shrink-0" src={IconEdit} alt="" />
                        Edit
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    className="flex shrink-0 items-center gap-2 font-medium text-purple-600 hover:text-purple-200 hover:relative hover:[&>img]:opacity-0 hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:bg-purple-200 hover:before:mask-[url(/images/icon-reply.svg)] hover:before:mask-no-repeat hover:before:mask-position-[left_center] hover:before:mask-size-[14px_12.25px]"
                    onClick={isReplying}
                >
                    <img className="h-[12.25px] w-3.5 shrink-0" src={IconReply} alt="" />
                    Reply
                </button>
            )}
        </>
    );
};

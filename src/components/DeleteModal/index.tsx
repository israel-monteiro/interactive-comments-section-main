import { useContext } from "react";
import { CommentContext } from "../../contexts/CommentContext";

interface DeleteModalProps {
    onCancel: () => void;
    commentId: number;
}

export const DeleteModal = ({ onCancel, commentId }: DeleteModalProps) => {
    const { deleteComment } = useContext(CommentContext);

    const handleDelete = () => {
        deleteComment(commentId);
        onCancel();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex h-63 w-100 shrink-0 flex-col justify-center gap-6 rounded-lg bg-white px-7.75 py-6.875">
                <h2 className="text-2xl leading-[1.2] font-medium text-grey-800">Delete comment</h2>

                <p className="text-base leading-6 text-grey-500">
                    Are you sure you want to delete this comment? This will remove the comment and can’t be undone.
                </p>

                <div className="flex gap-4">
                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-grey-500 py-3 font-medium text-white"
                        onClick={onCancel}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-pink-400 py-3 font-medium text-white"
                        onClick={handleDelete}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

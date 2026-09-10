import { useContext, useEffect, useId, useRef } from "react";
import { CommentContext } from "../../contexts/CommentContext";

interface DeleteModalProps {
    onCancel: () => void;
    commentId: number;
}

export const DeleteModal = ({ onCancel, commentId }: DeleteModalProps) => {
    const { deleteComment } = useContext(CommentContext);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();
    const descriptionId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const previousOverflow = document.documentElement.style.overflow;
        dialog.showModal();
        document.documentElement.style.overflow = "hidden";

        return () => {
            dialog.close();
            document.documentElement.style.overflow = previousOverflow;
        };
    }, []);

    const handleDelete = () => {
        deleteComment(commentId);
        onCancel();
    };

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onCancel={(event) => {
                event.preventDefault();
                onCancel();
            }}
            className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-85.75 overflow-y-auto rounded-lg border-0 bg-white p-0 backdrop:bg-black/50 md:max-w-100"
        >
            <div className="flex w-full flex-col justify-center gap-4 px-6.375 py-5.375 md:min-h-63 md:gap-6 md:px-7.75 md:py-6.875">
                <h2 id={titleId} className="text-2xl leading-[1.2] font-medium text-grey-800">Delete comment</h2>

                <p id={descriptionId} className="text-base leading-6 text-grey-500">
                    Are you sure you want to delete this comment? This will remove the comment and can’t be undone.
                </p>

                <div className="flex gap-4">
                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-grey-500 py-3 font-medium text-white hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 "
                        onClick={onCancel}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-pink-400 py-3 font-medium text-white hover:bg-pink-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                        onClick={handleDelete}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </dialog>
    );
};

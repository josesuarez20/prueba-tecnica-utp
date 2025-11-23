import { Button } from "@/shared/ui/Buttons";
import { CloseIcon } from "@/shared/ui/Icons";

interface ConfirmDialogProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    cancelText?: string;
    type?: 'success' | 'danger' | 'warning';
}

export function ConfirmDialog({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    type = 'success'
}: ConfirmDialogProps) {
    if (!isOpen) return null;

    const typeStyles = {
        success: 'text-green-600',
        danger: 'text-red-600',
        warning: 'text-yellow-600'
    };

    const buttonVariant = type === 'danger' ? 'secondary' : 'primary';

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
                <div 
                    className="fixed inset-0 bg-black/50 transition-opacity"
                    onClick={onCancel}
                />
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg z-10">
                    <button
                        onClick={onCancel}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <CloseIcon width={20} height={20} />
                    </button>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                <h3 className={`text-lg font-semibold leading-6 ${typeStyles[type]} mb-2`}>
                                    {title}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse gap-2">
                        <Button
                            variant={buttonVariant}
                            onClick={onConfirm}
                            className="w-full sm:w-auto"
                        >
                            {confirmText}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onCancel}
                            className="w-full sm:w-auto mt-3 sm:mt-0"
                        >
                            {cancelText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

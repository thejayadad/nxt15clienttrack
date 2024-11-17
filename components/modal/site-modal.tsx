'use client'

import { useCallback, useEffect, useState } from "react";
import {FiX} from "react-icons/fi"
import Button from "./button";
interface Props {
    isOpen: boolean;
    onClose: ()=> void;
    onSubmit: () => void;
    title?: string,
    body?: React.ReactElement;
    actionLabel: string;
    disabled: boolean;
    secondaryAction?: ()=> void;
    secondaryActionLabel?: string;
}

const SiteModal = ({isOpen, onClose, onSubmit, title, body, actionLabel, disabled, secondaryAction, secondaryActionLabel}: Props) => {
const [showModal, setShowModal] = useState(isOpen)
useEffect(() => {
    setShowModal(isOpen);
}, [isOpen])
const handleClose = useCallback(() => {
    if(disabled){
        return;
    }
    setShowModal(false);
    setTimeout(() => {
        onClose()
    }, 300)
}, [disabled, onClose])
const handleSubmit = useCallback(() => {
    if(disabled){
        return
    }
    onSubmit()
}, [disabled, onSubmit])
const handleSecondaryAction = useCallback(() => {
    if(disabled || secondaryAction){
        return
    }
    secondaryAction()
}, [disabled, secondaryAction])
    if(!isOpen){
        return null
    }
    return (
    <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline bg-neutral-900/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
            <div className={`translate duration-300 h-full
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}

                `}>
                    <div className="translate lg:h-auto sm:mt-48 lg:mt-0 md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[600px] sm:mx-auto bg-white outline-none focus:outline-none">
                        <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button
                            onClick={handleClose}
                            className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                <FiX size={18} />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                            {secondaryAction && secondaryActionLabel && (
                                       <Button
                                       outline
                                           disabled={disabled}
                                           label={secondaryActionLabel}
                                           onClick={handleSecondaryAction}
                                       />
                            )}
                                <Button
                                    disabled={disabled}
                                    label={actionLabel}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SiteModal
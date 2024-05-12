import type { Notification } from "@/types";

const Notification = ({ Icon, message, timestamp }: Notification) => {
    return (
        <div>
            <div className="flex gap-5">
                <div className="bg-gray-700 w-fit p-2 rounded-full">
                    <Icon className="text-red-500 text-2xl" />
                </div>
                <div>
                    <p className="text-sm">{message}</p>
                    <p className="text-gray-500 text-xs">{timestamp}</p>
                </div>
            </div>
            <hr className="border border-gray-700 my-3" />
        </div>
    );
};

export default Notification;

import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const NotificationSettings = () => {
    return (
        <div className="space-y-6">
            <h1 className="w-full text-primary-2 font-bold text-xl ">Notifications Settings</h1>
            <Separator />
            <div className="flex items-center justify-between">
                <h1 className=" text-primary-2 font-bold text-xl ">Push Notifications</h1>
                <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-6">
                <h2 className="font-semibold text-sm">You and Your Posts</h2>
                <NotificationItem label="New Campaign Payment" />
                <NotificationItem label="New Subscription" />
                <NotificationItem label="New Tip" />
                <NotificationItem label="New Follower" />
                <NotificationItem label="New Subscriber" />
                <NotificationItem label="New Likes" />
                <NotificationItem label="New Comment" />
            </div>
            <Separator />
            <div className="space-y-6">
                <h3 className="font-semibold text-sm">Subscriptions and Following</h3>
                <NotificationItem label="New Live Stream" />
                <NotificationItem label="New Photo" />
                <NotificationItem label="New Video" />
                <NotificationItem label="New Audio" />
            </div>
            <Separator />
            <div className="space-y-6">
                <h3 className="font-semibold text-sm">New Messages</h3>
                <NotificationItem label="VIP Messages" />
                <NotificationItem label="New Messages" />
            </div>
        </div>
    );
};

const NotificationItem = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center justify-between">
            <span>{label}</span>
            <Switch defaultChecked />
        </div>
    );
};

export default NotificationSettings;

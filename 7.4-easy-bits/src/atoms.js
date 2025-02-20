import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
export const jobAtom = atom({
    key: "jobAtom",
    default: 1
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 2
})
export const totalNotificationCountSelector = selector({
    key: "totalNotificationCountSelector",
    get: ({ get }) => {
        const networknotificationCount = get(networkAtom);
        const jobsCount = get(jobAtom);
        const messageCount = get(messagingAtom);
        const notificationCount = get(notificationAtom);

        return networknotificationCount + jobsCount + messageCount + notificationCount
    }
})
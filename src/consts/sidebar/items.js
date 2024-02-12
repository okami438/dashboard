import Overview from "@/assets/svg/chart-pie.svg";
import DocumentReport from "@/assets/svg/document-report.svg";
import ShoppingBag from "@/assets/svg/shopping-bag.svg";
import InboxIn from "@/assets/svg/inbox-in.svg";
import LockClosed from "@/assets/svg/lock-closed.svg";
import ClipboardList from "@/assets/svg/clipboard-list.svg";
import Collection from "@/assets/svg/collection.svg";
import Support from "@/assets/svg/support.svg";

export const menuConfiguration = [
    {
        name: "Overview",
        icon: Overview,
        to: '/'
    },
    {
        name: "Pages",
        icon: DocumentReport,
    },
    {
        name: "Sales",
        icon: ShoppingBag,
        children: [
            {
                name: "Product list",
            },
            {
                name: "Billing",
            },
            {
                name: "Invoice",
            },
        ]
    },
    {
        name: "Messages",
        icon: InboxIn,
    },
    {
        name: "Authentication",
        icon: LockClosed,
    },
    {
        name: "Docs",
        icon: ClipboardList,
    },
    {
        name: "Components",
        icon: Collection,
    },
    {
        name: "Help",
        icon: Support,
    },
]
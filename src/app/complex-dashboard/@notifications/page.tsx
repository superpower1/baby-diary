import Card from "@/components/card/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div>Dashboard Notifications</div>
      <Link href='/complex-dashboard/archived'>Archived</Link>
    </Card>
  )
}

export default Notifications;
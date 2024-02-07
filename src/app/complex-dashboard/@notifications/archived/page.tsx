import Card from "@/components/card/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div>Archived Dashboard Notifications</div>
      <Link href='/complex-dashboard'>Default</Link>
    </Card>
  )
}

export default Notifications;
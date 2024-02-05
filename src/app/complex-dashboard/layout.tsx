const DashboardLayout = ({
  children,
  notifications,
  users
} : {
  children: React.ReactNode,
  notifications: React.ReactNode,
  users: React.ReactNode
}) => {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div>{users}</div>
        <div>{notifications}</div>
      </div>
    </>
  )
}

export default DashboardLayout;
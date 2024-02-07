const DashboardLayout = ({
  children,
  notifications,
  users,
  login
} : {
  children: React.ReactNode,
  notifications: React.ReactNode,
  users: React.ReactNode,
  login: React.ReactNode
}) => {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div>{users}</div>
        <div>{notifications}</div>
      </div>
    </>
  ) : login
}

export default DashboardLayout;
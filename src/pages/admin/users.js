export default function UsersPage() {
  const usersList = [
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
    {
      username: "Zahed",
      email: "zahed75@gmail.com",
      phone: "017129247021",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
      role: "Admin",
    },
  ];
  const roles = [
    {
      roleName: "Admin",
      userCount: 21,
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
    },
    {
      roleName: "Moderator",
      userCount: 11,
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
    },
    {
      roleName: "User",
      userCount: 51,
      createdAt: "2023-01-08 07:52:19",
      updatedAt: "2023-01-18 07:52:19",
    },
  ];
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
        <div className=" flex items-center justify-between  mb-8">
          <p className="text-2xl font-bold text-white">Users</p>
          <button className="btn lg:btn-wide btn-info">Add User</button>
        </div>
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="table  table-zebra  w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="font-semibold">{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.createdAt.slice(0, 10)}</td>
                  <td>{item.updatedAt.slice(0, 10)}</td>
                  <td>
                    <div
                      className={
                        index <= item.length - 3
                          ? "dropdown dropdown-top"
                          : "dropdown dropdown-right"
                      }
                    >
                      <label
                        tabIndex={0}
                        className=" flex items-center justify-center cursor-pointer"
                      >
                        {item.role}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        {roles.map((item, index) => (
                          <li key={index}>
                            <a>{item.roleName}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary mx-1">
                      Update Role
                    </button>
                    <button className="btn btn-sm btn-error">
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
        <div className="bg-gray-800 rounded-3xl px-6 pt-6">
          <div className=" flex items-center justify-between  mb-8">
            <p className="text-2xl font-bold text-white">Roles</p>
            <button className="btn lg:btn-wide btn-info">Add Role</button>
          </div>
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="table  table-zebra  w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  {/* <th>Created At</th> */}
                  <th>Updated At</th>
                  <th>Users</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className="font-semibold">{item.roleName}</td>
                    {/* <td>{item.createdAt.slice(0, 10)}</td> */}
                    <td>{item.updatedAt.slice(0, 10)}</td>
                    <td>{item.userCount}</td>
                    <td>
                      <button className="btn btn-sm btn-primary mx-1">
                        Update
                      </button>
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

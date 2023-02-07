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
          <label
            className="btn lg:btn-wide btn-error text-white"
            htmlFor="my-modal-6"
          >
            Add User
          </label>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="font-bold text-2xl mb-6">Add New User</h3>
              <form>
                <div>
                  <p className="font-semibold text-lg mb-3">Username </p>
                  <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                    <div className="inset-y-0 left-0 flex items-center pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </div>

                    <input
                      required
                      type="text"
                      name="User's name here"
                      className="py-2 text-sm pl-1  w-full text-primary rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                      placeholder="User's name here "
                    />
                  </div>
                </div>

                <br />
                <div>
                  <p className="font-semibold text-lg mb-3">Email </p>
                  <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                    <div className="inset-y-0 left-0 flex items-center pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>

                    <input
                      required
                      type="email"
                      name="User's email"
                      className="py-2 text-sm pl-1  w-full text-primary rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                      placeholder="User's email here"
                    />
                  </div>
                </div>

                <br />

                <>
                  <p className="font-semibold text-lg mb-4"> Password</p>
                  <div className="flex justify-start items-center text-gray-600 border rounded-lg border-[#c7c7c7e8]  py-2 px-4 ">
                    <div className="inset-y-0 left-0 flex items-center pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2 text-sm pl-1 w-full text-primary rounded-md focus:outline-none focus:bg-white bg-transparent focus:text-gray-900"
                      placeholder="User's pass here"
                      required
                    />
                  </div>
                </>

                <label
                  htmlFor="my-modal-6"
                  type="submit"
                  className="   mx-auto w-full rounded-lg btn lg:my-8 my-4 border bg-primary text-white text-center flex items-center justify-center font-semibold   shadow-inner group lg:hover:bg-opacity-90 transition-all"
                >
                  Add User
                </label>
              </form>
            </div>
          </div>
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
            <label
              className="btn lg:btn-wide btn-error text-white"
              htmlFor="my-modal-7"
            >
              Add Role
            </label>

            <input type="checkbox" id="my-modal-7" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-7"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="font-bold text-2xl mb-6">Add New Role</h3>
                <form>
                  <div>
                    <p className="font-semibold text-lg mb-3">Rolename </p>
                    <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                      <div className="inset-y-0 left-0 flex items-center pr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          />
                        </svg>
                      </div>

                      <input
                        required
                        type="text"
                        name="Give the role a name!"
                        className="py-2 text-sm pl-1  w-full text-primary rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                        placeholder="Give the role a name! "
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="my-modal-7"
                    type="submit"
                    className="   mx-auto w-full rounded-lg btn lg:my-8 my-4 border bg-primary text-white text-center flex items-center justify-center font-semibold   shadow-inner group lg:hover:bg-opacity-90 transition-all"
                  >
                    Add Role
                  </label>
                </form>
              </div>
            </div>
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

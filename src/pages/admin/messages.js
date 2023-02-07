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
  const sentMessages = [
    {
      name: "Zahed",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      date: "14th Feb",
      message:
        "Hey, can tell me about progress of project? I'm waiting for your response.",
    },
    {
      name: "Zahed",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      date: "14th Feb",
      message:
        "Hey, can tell me about progress of project? I'm waiting for your response.",
    },
    {
      name: "Zahed",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      date: "14th Feb",
      message:
        "Hey, can tell me about progress of project? I'm waiting for your response.",
    },
    {
      name: "Zahed",
      image:
        "https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      date: "14th Feb",
      message:
        "Hey, can tell me about progress of project? I'm waiting for your response.",
    },
  ];

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
        <div className=" flex items-center justify-between  mb-8">
          <p className="text-2xl font-bold text-white">All Users</p>
        </div>
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="table  table-zebra  w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Message</th>
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
                  <td> {item.role}</td>
                  <td>
                    {" "}
                    <textarea
                      placeholder="Type Message"
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                    ></textarea>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary mx-1">
                      Send Message
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
            <p className="text-2xl font-bold text-white">Sent Messages</p>
          </div>
          <div className="overflow-x-auto overflow-y-hidden">
            {/* <table className="table  table-zebra  w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Created At</th>
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
                    <td>{item.createdAt.slice(0, 10)}</td>
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
            </table> */}
            <div>
              {sentMessages.map((item, index) => (
                <div
                  className="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700 rounded-lg my-2 cursor-pointer"
                  key={index}
                >
                  <img
                    src={item.image}
                    className="object-cover w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div className="pl-4 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-white font-medium">{item.name}</div>
                    </div>
                    <p className="mb-2 text-sm text-gray-400">{item.message}</p>
                    <p className="text-right text-gray-400 text-sm">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

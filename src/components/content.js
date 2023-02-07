const Content = ({ title }) => {
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
        <div className="flex justify-between text-white items-center mb-8">
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="flex flex-wrap justify-between items-center pb-8">
          <div className="flex flex-wrap text-white space-x-10">
            <div className="">
              <div className="text-5xl font-bold">45</div>
              <div className="font-semibold text-xl font-sans">Users</div>
            </div>
            <div className="">
              <div className="text-5xl font-bold">24</div>
              <div className="font-semibold text-xl font-sans">Roles</div>
            </div>
            <div>
              <div className="text-5xl font-bold">62</div>
              <div className="font-semibold text-xl font-sans">
                Sent Messages
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <div className="p-2">
              <div className="p-4 rounded-3xl bg-emerald-500 cursor-pointer flex items-center justify-center flex-col transition-all hover:rounded-lg hover:bg-opacity-90">
                <div className="flex items-center justify-b"></div>
                <div className="text-center mb-4 mt-5">
                  <p className="text-white text-2xl font-bold opacity-70">
                    Users
                  </p>
                </div>
                <div className="avatar-group  -space-x-6">
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-20 bg-emerald-400 text-white">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <div className="p-2">
              <div className="p-4 rounded-3xl bg-red-400 cursor-pointer flex items-center justify-center flex-col transition-all hover:rounded-lg hover:bg-opacity-90">
                <div className="flex items-center justify-b"></div>
                <div className="text-center mb-4 mt-5">
                  <p className="text-white text-2xl font-bold opacity-70">
                    Messages
                  </p>
                </div>
                <div className="avatar-group  -space-x-6">
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-20">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-20 bg-slate-600 text-neutral-content">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
        <div className="bg-gray-800 rounded-3xl px-6 pt-6">
          <div className="flex text-white text-2xl pb-6 font-bold">
            <p>Sent Messages</p>
          </div>
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
            <div className="flex items-center justify-center">
              <button className="btn btn-wide  mx-auto my-4"> View All </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

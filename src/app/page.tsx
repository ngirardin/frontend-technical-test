import EditUser from "./components/EditUser";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { searchUsers } from "./lib/searchUsers";

type Props = {
  searchParams: {
    search?: string;
    page?: string;
  };
};

const getData = (props: Props) => {
  const page = Number(props.searchParams.page) || 1;
  const search = props.searchParams.search;

  const results = searchUsers({
    search,
    page,
  });

  return { ...results, page, search };
};

const App = (props: Props) => {
  const data = getData(props);

  return (
    <div data-testid="appContainer" className="flex flex-col gap-6 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Users</h1>
        <Search />
      </div>

      {data.users.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="font-bold text-xl">No users found</p>
          <p className="text-lg">Try another search</p>
        </div>
      )}

      {data.users.length > 0 && (
        <table>
          <thead>
            <tr className="text-left uppercase pb-3 mb-3">
              <th className="pb-2">Email</th>
              <th className="pb-2">Name</th>
              <th className="pb-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <tr key={user.id} className="py-4 hover:bg-yellow-100">
                <td className="w-1/3 py-2">{user.email}</td>
                <td className="w-1/3 py-2 pr-4">
                  <EditUser user={user} />
                </td>
                <td className="w-1/3 py-2">
                  <span className="bg-slate-200 px-3 py-1 rounded-md">
                    {user.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination page={data.page} search={data.search} total={data.pages} />
    </div>
  );
};

export default App;

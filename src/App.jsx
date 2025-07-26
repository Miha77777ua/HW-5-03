import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/Friends/FriendList/FriendList";
import { TransactionHistory } from "./components/Transaction/TransactionHistory";
import user from "./data/user.json";
import stats from "./data/data.json";
import friends from "./data/friends.json";
import items from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  )
}

export default App

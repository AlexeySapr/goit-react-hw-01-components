import s from './App.module.css';

import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';

import FriendList from './components/friend-list/FriendList';
import friends from './components/friend-list/friends.json';

import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <div className={s.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

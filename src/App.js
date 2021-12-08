import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
}

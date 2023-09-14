import axios from 'axios';

interface DuolingoUser {
  last_streak: {
    length: number
  }
}

export default async function fetchDuolingoStreakLength(username: string): Promise<number> {
  try {
    const response = await axios.get<DuolingoUser>(
      `https://www.duolingo.com/api/1/users/show?username=${username}`,
    );
    return response.data.last_streak.length;
  } catch (error) {
    console.error('Error fetching Duolingo streak:', error);
    throw error;
  }
}

import { mockRiders } from '../data/mockRiders';

interface Rider {
  id: string;
  name: string;
  gender: string;
  age: number;
  city: string;
  rideType: string;
  distancePref: [number, number];
  paceZone: number;
  socialPref: string;
  expLevel: string;
  activeSearch: boolean;
  lastActive: string;
  avatar: string;
  hoursPerWeek?: number;
  preferredDays?: string[];
  preferredTimeOfDay?: string;
  matchScore?: number;
}

function calculateMatchScore(user: Rider, candidate: Rider): number {
  let score = 0;

  if (user.rideType === candidate.rideType) score += 25;

  if (user.city === candidate.city) score += 20;

  if (Math.abs(user.paceZone - candidate.paceZone) <= 1) score += 20;

  const userDistanceMin = user.distancePref[0];
  const userDistanceMax = user.distancePref[1];
  const candidateDistanceMin = candidate.distancePref[0];
  const candidateDistanceMax = candidate.distancePref[1];

  const overlapMin = Math.max(userDistanceMin, candidateDistanceMin);
  const overlapMax = Math.min(userDistanceMax, candidateDistanceMax);

  if (overlapMax >= overlapMin) {
    score += 15;
  }

  if (user.socialPref === candidate.socialPref) score += 10;

  if (user.hoursPerWeek && candidate.hoursPerWeek) {
    const hoursDiff = Math.abs(user.hoursPerWeek - candidate.hoursPerWeek);
    if (hoursDiff <= 2) score += 10;
    else if (hoursDiff <= 5) score += 5;
  }

  if (user.preferredDays && candidate.preferredDays) {
    const commonDays = user.preferredDays.filter(day =>
      candidate.preferredDays?.includes(day)
    );
    if (commonDays.length >= 2) score += 10;
    else if (commonDays.length === 1) score += 5;
  }

  if (user.preferredTimeOfDay && candidate.preferredTimeOfDay) {
    if (user.preferredTimeOfDay === candidate.preferredTimeOfDay) score += 5;
  }

  return Math.min(score, 100);
}

export function getActiveMatches(user: Rider): (Rider & { matchScore: number })[] {
  return mockRiders
    .filter(r => r.id !== user.id && r.activeSearch)
    .map(r => ({
      ...r,
      matchScore: calculateMatchScore(user, r)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

export function getPassiveMatches(user: Rider): (Rider & { matchScore: number })[] {
  return mockRiders
    .filter(r => r.id !== user.id)
    .map(r => ({
      ...r,
      matchScore: calculateMatchScore(user, r)
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

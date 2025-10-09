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
  matchScore?: number;
}

function calculateMatchScore(user: Rider, candidate: Rider): number {
  let score = 0;

  if (user.rideType === candidate.rideType) score += 30;

  if (user.city === candidate.city) score += 20;

  if (Math.abs(user.paceZone - candidate.paceZone) <= 1) score += 25;

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

'use client';

import VerkochteAutosFilter from './VerkochteAutosFilter';
import { Car } from '@/types';

interface VerkochteAutosClientProps {
  cars: Car[];
}

export default function VerkochteAutosClient({ cars }: VerkochteAutosClientProps) {
  return <VerkochteAutosFilter cars={cars} />;
}

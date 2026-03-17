import { YES_REASONS, NO_REASONS } from './data.js';

export interface Metrics {
  synergyOscillation: number;
  quantumAlignment: number;
  teaPreferenceHarmonization: number;
  workStyleCoherence: number;
}

export interface CompatibilityResult {
  person1: string;
  person2: string;
  compatible: boolean;
  percentage: number;
  reason: string;
  metrics: Metrics;
}

/**
 * Generate random metrics between 0 and 100
 */
function generateMetrics(): Metrics {
  return {
    synergyOscillation: Math.round(Math.random() * 1000) / 10,
    quantumAlignment: Math.round(Math.random() * 1000) / 10,
    teaPreferenceHarmonization: Math.round(Math.random() * 1000) / 10,
    workStyleCoherence: Math.round(Math.random() * 1000) / 10,
  };
}

/**
 * Generate a random verdict (50/50 YES/NO)
 */
function generateVerdict(): boolean {
  return Math.random() > 0.5;
}

/**
 * Select a random reason from the appropriate pool
 */
function selectReason(compatible: boolean): string {
  const reasonPool = compatible ? YES_REASONS : NO_REASONS;
  const index = Math.floor(Math.random() * reasonPool.length);
  return reasonPool[index];
}

/**
 * Calculate average of metrics
 */
function calculatePercentage(metrics: Metrics): number {
  const sum = Object.values(metrics).reduce((a, b) => a + b, 0);
  return Math.round((sum / 4) * 10) / 10;
}

/**
 * Main calculation function
 */
export function calculateCompatibility(
  person1: string,
  person2: string,
  answers1: string[],
  answers2: string[]
): CompatibilityResult {
  const metrics = generateMetrics();
  const compatible = generateVerdict();
  const percentage = calculatePercentage(metrics);
  const reason = selectReason(compatible);

  return {
    person1,
    person2,
    compatible,
    percentage,
    reason,
    metrics,
  };
}

export function calculateTimeLeft(targetDateStr: string): { 
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  // Parse the target date string
  const targetDate = new Date(targetDateStr);
  
  // Get current date and time
  const now = new Date();
  
  // Calculate the difference in milliseconds
  const difference = targetDate.getTime() - now.getTime();
  
  // Default return if date is in the past
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  
  // Calculate time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}
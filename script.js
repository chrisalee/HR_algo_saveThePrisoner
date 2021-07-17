/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n  --total prisoners
 *  2. INTEGER m  --total treats
 *  3. INTEGER s  --seat start
 */

const saveThePrisoner = (n, m, s) => {
  // firstPrisoner eats 1 candy
  const initialFinalEater = s + m - 1;

  // check if we have to start another revolution
  const willReturnToFirstChair = initialFinalEater > n;

  // if we don't have to start another revolution, then our first
  // attempt to identify the final prisoner is correct
  if (!willReturnToFirstChair) {
      return initialFinalEater
  };

  // remainder is shortcut to help us skip calculations
  const prisonersFromStart = initialFinalEater % n;

  // the only case where the remainder is zero is where the final eater
  // sits in the last chair
  const isEaterLastPrisoner = prisonersFromStart === 0;

  console.log(isEaterLastPrisoner ? n : prisonersFromStart);
  return isEaterLastPrisoner ? n : prisonersFromStart;

}

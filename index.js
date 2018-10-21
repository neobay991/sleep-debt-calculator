const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 7;
    case 'friday':
      return 6;
    case 'saturday':
      return 9;
    case 'sunday':
      return 10;
  }
};
// console.log(getSleepHours('wednesday'))

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;
};
// console.log(getActualSleepHours())

const getIdealSleepHours = hours => {
  let idealHours = hours;
  return idealHours * 7;
};
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours(8);
  let idealSleepHours = getIdealSleepHours();
  let diffSleepHours = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    return "User got perfect amount of sleep";
  } else if (actualSleepHours > idealSleepHours) {
    return "User got more sleep than needed -" + diffSleepHours + " hours extra"
  } else if (actualSleepHours < idealSleepHours) {
    return "User should get some rest " + diffSleepHours + " hours extra"
  }
};

// console.log(calculateSleepDebt());

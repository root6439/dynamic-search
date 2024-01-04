export class FormData {
  race: {
    white: boolean;
    black: boolean;
    brown: boolean;
    yellow: boolean;
  };
  ageGroup: {
    baby: boolean;
    child: boolean;
    youth: boolean;
    adult: boolean;
    elderly: boolean;
  };
  sex: Sex;
  socialClass: {
    poor: boolean;
    middleClass: boolean;
    rich: boolean;
  };
  religion: {
    christian: boolean;
    hindu: boolean;
    buddhist: boolean;
    jewish: boolean;
  };
  politicalPosition: {
    right: boolean;
    left: boolean;
  };
}

export class Sex {
  male: boolean;
  female: boolean;
}

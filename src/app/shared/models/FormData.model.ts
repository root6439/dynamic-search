export class FormData {
  race: Race;
  ageGroup: AgeGroup;
  sex: Sex;
  socialClass: SocialClass;
  religion: Religion;
  politicalPosition: PoliticalPosition;
  nationality: Nationality;
}

export class Sex {
  male: boolean;
  female: boolean;
}

export class Race {
  white: boolean;
  black: boolean;
  brown: boolean;
  yellow: boolean;
}

export class AgeGroup {
  baby: boolean;
  child: boolean;
  youth: boolean;
  adult: boolean;
  elderly: boolean;
}

export class SocialClass {
  poor: boolean;
  middleClass: boolean;
  rich: boolean;
}

export class Religion {
  christian: boolean;
  hindu: boolean;
  buddhist: boolean;
  jewish: boolean;
}

export class PoliticalPosition {
  right: boolean;
  left: boolean;
}

export class Nationality {
  brazilian: boolean;
  foreigner: boolean;
}

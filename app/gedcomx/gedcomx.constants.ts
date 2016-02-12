export class FACT_TYPE{
  public static get BIRTH():string { return "http://gedcomx.org/Birth"; }
  public static get DEATH():string { return "http://gedcomx.org/Death"; }

  private static all:Array<string>;
  public static get ALL():string[] {
      if (FACT_TYPE.all==undefined){
        FACT_TYPE.all=[];
        FACT_TYPE.all.push(FACT_TYPE.BIRTH);
        FACT_TYPE.all.push(FACT_TYPE.DEATH);
      }
      return FACT_TYPE.all;
  }
}
export class EVENT_TYPE{
  public static get BIRTH():string { return "http://gedcomx.org/Birth"; }
}
export class GENDER_TYPE{
  public static get MALE():string { return "http://gedcomx.org/Male"; }
  public static get FEMALE():string { return "http://gedcomx.org/Female"; }
  public static get UNKNOWN():string { return "http://gedcomx.org/Unknown"; }

  private static all:Array<string>;
  public static get ALL():string[] {
      if (GENDER_TYPE.all==undefined){
        GENDER_TYPE.all=[];
        GENDER_TYPE.all.push(GENDER_TYPE.MALE);
        GENDER_TYPE.all.push(GENDER_TYPE.FEMALE);
        GENDER_TYPE.all.push(GENDER_TYPE.UNKNOWN);
      }
      return GENDER_TYPE.all;
  }
}
export class NAME_TYPE{
  public static get BIRTHNAME():string { return "http://gedcomx.org/BirthName"};
  public static get MARRIEDNAME():string { return "http://gedcomx.org/MarriedName"};
  public static get ALSOKNOWNAS():string { return "http://gedcomx.org/AlsoKnownAs"};
  public static get NICKNAME():string { return "http://gedcomx.org/Nickname"};
  public static get ADOPTIVENAME():string { return "http://gedcomx.org/AdoptiveName"};
  public static get FORMALNAME():string { return "http://gedcomx.org/FormalName"};
  public static get RELIGIOUSNAME():string { return "http://gedcomx.org/ReligiousName"};

  private static all:Array<string>;
  public static get ALL():string[] {
      if (NAME_TYPE.all==undefined){
        NAME_TYPE.all=[];
        NAME_TYPE.all.push(NAME_TYPE.BIRTHNAME);
        NAME_TYPE.all.push(NAME_TYPE.MARRIEDNAME);
        NAME_TYPE.all.push(NAME_TYPE.ALSOKNOWNAS);
        NAME_TYPE.all.push(NAME_TYPE.NICKNAME);
        NAME_TYPE.all.push(NAME_TYPE.ADOPTIVENAME);
        NAME_TYPE.all.push(NAME_TYPE.FORMALNAME);
        NAME_TYPE.all.push(NAME_TYPE.RELIGIOUSNAME);
      }
      return NAME_TYPE.all;
  }
}

export class NAMEPART_TYPE{
  public static get PREFIX():string { return "http://gedcomx.org/Prefix"};
  public static get SUFFIX():string { return "http://gedcomx.org/Suffix"};
  public static get GIVEN():string { return "http://gedcomx.org/Given"};
  public static get SURNAME():string { return "http://gedcomx.org/Surname"};

  private static all:Array<string>;
  public static get ALL():string[] {
      if (NAMEPART_TYPE.all==undefined){
        NAMEPART_TYPE.all=[];
        NAMEPART_TYPE.all.push(NAMEPART_TYPE.PREFIX);
        NAMEPART_TYPE.all.push(NAMEPART_TYPE.SUFFIX);
        NAMEPART_TYPE.all.push(NAMEPART_TYPE.GIVEN);
        NAMEPART_TYPE.all.push(NAMEPART_TYPE.SURNAME);
      }
      return NAMEPART_TYPE.all;
  }
}

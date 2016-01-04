declare module "gedcomx"{
  export=gedcomx_spec;
}
declare module gedcomx_spec {

    interface ResourceReference{
      resource:string;
    }
    interface Attribution {
      contributor?:ResourceReference;
      modified?:number;
      changeMessage?:string;
    }

    interface SourceReference {
      description:string;
      attribution?:Attribution;
    }
    interface Note{
      lang?:string;
      subject?:string;
      text:string;
      attribution?:Attribution;
    }
    enum ConfidenceType{

    }
    interface Conclusion {
      id?:string;
      lang?:string;
      sources?:Array<SourceReference>;
      analysis?:ResourceReference;
      notes?:Array<Note>;
      confidence?:ConfidenceType;
    }
    interface Gender extends Conclusion {
        type:string;
    }
    interface EvidenceReference {
      resource:string;
      attribution?:Attribution;
    }
    interface GedcomXDate {

    }
    interface Date{
      original?:string;
      formal?:GedcomXDate;
    }
    interface PlaceReference {
      original?:string;
      description?:string;
    }
    enum EventRoleType{}
    interface  EventRole extends Conclusion{
      person:ResourceReference;
      type?:EventRoleType;
      details?:string;
    }
    enum RelationshipType{
      COUPLE,PARENT_CHILD
    }
    enum ResourceType{
      COLLECTION,PHYSICAL_ARTIFACT,DIGITAL_ARTIFACT,RECORD
    }
    interface NamePart{
      type?:string;
      value:string;
      qualifiers?:Array<Qualifier>;
    }
    interface NameForm{
      lang?:string;
      fullText?:string;
      parts?:Array<NamePart>;
    }
    interface Name extends Conclusion{
      type?:string;
      nameForms:Array<NameForm>;
      date?:Date;
    }
    interface QualifierType{}
    interface Qualifier{
      name:QualifierType;
      value?:string;
    }
    interface Fact extends Conclusion{
      type?:string;
      date?:Date;
      place?:PlaceReference;
      original?:string;
      qualifiers?:Array<Qualifier>;
    }
    interface Subject extends Conclusion{
      exracted?:boolean;
      evidence?:Array<EvidenceReference>;
      media?:Array<SourceReference>;
      identifiers?:Array<Identifier>;
      attribution?:Attribution;
    }

    interface  SourceCitation {
      lang?:string;
      textType?:SourceCitationType;
      value:string;
    }
    enum SourceCitationType{

    }
    interface  PlaceDescription extends Subject {
      names:Array<TextValue>;
      type?:PlaceType;
      place?:ResourceReference;
      jurisdiction?:ResourceReference;
      latitude?:number;
      longitude?:number;
      temporalDescription?:Date;
      spatialDescription?:ResourceReference;
    }
    interface Agent {
      id?:string;
      identifiers?:Array<Identifier>;
      names?:Array<TextValue>;
      homepage?:ResourceReference;
      openid?:ResourceReference;
      accounts?:Array<OnlineAccount>;
      emails?:ResourceReference;
      phones?:ResourceReference;
      addresses?:Array<Address>;
      person?:ResourceReference;
    }
    interface Address{
      value?:string;
      city?:string;
      country?:string;
      postalCode?:string;
      stateOrProvince?:string;
      street?:string;
      street2?:string;
      street3?:string;
      street4?:string;
      street5?:string;
      street6?:string;
    }
    interface OnlineAccount{
      serviceHomepage:ResourceReference;
      accountName:string;
    }
    interface Analysis{

    }


    interface DocumentGX extends Conclusion{
      type?:DocumentGXType;
      extracted?:boolean;
      textType?:TextType;
      text:string;
      attribution?:Attribution;
    }
    enum TextType{

    }
    enum DocumentGXType{

    }

    interface TextValue{
      lang?:string;
      value:string;
    }

    interface Coverage {
      spatial?:PlaceReference;
      temporal?:Date;
    }
    interface Identifier{
      value:string;
      type?:IdentifierType;
    }
    enum IdentifierType{

    }
    enum PlaceType{

    }
    interface SourceDescription{
      id?:string;
      resourceType?:ResourceType;
      citations:Array<SourceCitation>;
      mediaType?:string;
      about?:string;
      mediator?:ResourceReference;
      sources?:Array<SourceReference>;
      analysis?:ResourceReference;
      componentOf?:SourceReference;
      titles?:Array<TextValue>;
      notes?:Array<Note>;
      attribution?:Attribution;
      rights?:ResourceReference;
      coverage?:Coverage;
      descriptions?:Array<TextValue>;
      identifiers?:Array<Identifier>;
      created?:number;
      modified?:number;
      repository?:ResourceReference
    }
    interface Person extends Subject {
      privatePerson?:boolean;
      gender?:Gender;
      names?:Array<Name>;
      facts?:Array<Fact>;
    }
    interface Relationship extends Subject{
      type?:RelationshipType;
      person1:ResourceReference;
      person2:ResourceReference;
      facts?:Array<Fact>;
    }
    interface Event extends Subject{
      type?:EventType;
      date?:Date;
      place?:PlaceReference;
      roles?:Array<EventRole>;
    }
    enum EventType{

    }

    interface GedcomXFile {
      attribution?:Attribution;
      persons?:Person[];
      relationships?:Relationship[];
      sourceDescriptions?:SourceDescription[];
      agents?:Agent[];
      events?:Event[];
      documents?:DocumentGX[];
      places?:PlaceDescription[];
    }

}

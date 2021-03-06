export var GEDCOMX_DATA3: any ={
  "attribution" : {
    "contributor" : {
      "resource" : "#A-1"
    },
    "modified" : 1395900000000
  },
  "persons" : [ {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "WONG Aloiau"
      } ]
    } ],
    "gender" : {
      "type" : "http://gedcomx.org/Male"
    },
    "facts" : [ {
      "type" : "http://gedcomx.org/Birth",
      "date" : {
        "original" : "former Qing 1848 year 11th month 22nd day 23-1 hour",
        "formal" : "+1848-11-22"
      },
      "place" : {
        "original" : "Pun Sha Village, See Dai Doo, Chung Shan, Guangdong, China"
      }
    }, {
      "type" : "http://gedcomx.org/Death",
      "date" : {
        "original" : "Republic of China year 1920 year 7th mo. 12th day 11-13 hour",
        "formal" : "+1920-08-03"
      }
    }, {
      "type" : "http://gedcomx.org/Burial",
      "place" : {
        "original" : "Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii"
      }
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-4"
    } ],
    "id" : "P-1"
  }, {
    "names" : [ {
      "nameForms" : [ {
        "fullText" : "Lo Yau"
      } ]
    }, {
      "type" : "http://gedcomx.org/AlsoKnownAs",
      "nameForms" : [ {
        "fullText" : "Young Hong Wong"
      } ]
    } ],
    "extracted" : true,
    "sources" : [ {
      "description" : "#S-4"
    } ],
    "id" : "P-2"
  }, {
    "evidence" : [ {
      "resource" : "#P-1"
    } ],
    "analysis" : {
      "resource" : "#D-3"
    },
    "id" : "C-1"
  } ],
  "relationships" : [ {
    "id" : "R-1",
    "type" : "http://gedcomx.org/ParentChild",
    "person1" : {
      "resource" : "#P-2"
    },
    "person2" : {
      "resource" : "#P-1"
    }
  } ],
  "sourceDescriptions" : [ {
    "resourceType" : "http://gedcomx.org/PhysicalArtifact",
    "citations" : [ {
      "value" : "WONG Aloiau gravestone, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii; visited May 1975 by Jane Doe."
    } ],
    "titles" : [ {
      "value" : "Grave Marker of WONG Aloiau, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii"
    } ],
    "repository" : {
      "resource" : "#A-2"
    },
    "id" : "S-1"
  }, {
    "sources" : [ {
      "description" : "#S-1"
    } ],
    "resourceType" : "http://gedcomx.org/DigitalArtifact",
    "citations" : [ {
      "value" : "WONG Aloiau gravestone (digital photograph), Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii; visited May 1975 by Jane Doe."
    } ],
    "titles" : [ {
      "value" : "Grave Marker of WONG Aloiau, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii"
    } ],
    "id" : "S-2"
  }, {
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "resourceType" : "http://gedcomx.org/DigitalArtifact",
    "citations" : [ {
      "value" : "WONG Aloiau gravestone (transcription), Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii; visited May 1975 by Jane Doe."
    } ],
    "about" : "#D-1",
    "titles" : [ {
      "value" : "Transcription of Grave Marker of WONG Aloiau, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii"
    } ],
    "id" : "S-3"
  }, {
    "sources" : [ {
      "description" : "#S-3"
    } ],
    "resourceType" : "http://gedcomx.org/DigitalArtifact",
    "citations" : [ {
      "value" : "WONG Aloiau gravestone, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii; visited May 1975 by Jane Doe. Translation by HANYU Pinyin 王大年."
    } ],
    "about" : "#D-2",
    "titles" : [ {
      "value" : "Translation of Grave Marker of WONG Aloiau, Lin Yee Chung Cemetery, Honolulu, Oahu, Hawaii"
    } ],
    "attribution" : {
      "contributor" : {
        "resource" : "#A-3"
      },
      "modified" : 1395900000000
    },
    "id" : "S-4"
  } ],
  "agents" : [ {
    "names" : [ {
      "value" : "Jane Doe"
    } ],
    "emails" : [ {
      "resource" : "mailto:example@example.org"
    } ],
    "id" : "A-1"
  }, {
    "names" : [ {
      "value" : "HANYU Pinyin 王大年"
    } ],
    "emails" : [ {
      "resource" : "mailto:example@example.org"
    } ],
    "id" : "A-3"
  }, {
    "names" : [ {
      "value" : "Lin Yee Chung Cemetery"
    } ],
    "addresses" : [ {
      "city" : "Honolulu",
      "stateOrProvince" : "Hawaii"
    } ],
    "id" : "A-2"
  } ],
  "documents" : [ {
    "text" : "WONG ALOIAU\nNOV. 22, 1848 – AUG. 3, 1920\n中山  大字都  泮沙鄉\n生  於  前  清 戊申 年 十一 月 廿二（日）子   時\n終  於  民國  庚申 年     七月    十二 (日)    午    時\n先考  諱 羅有  字 容康 王 府 君 之 墓",
    "sources" : [ {
      "description" : "#S-2"
    } ],
    "lang" : "zh",
    "id" : "D-1"
  }, {
    "text" : "WONG ALOIAU\nNOV. 22, 1848 – AUG. 3, 1920 [lunar dates]\n[Birthplace] [China, Guandong, ]Chung Shan, See Dai Doo, Pun Sha village\n[Date of birth] Born at former Qing 1848 year 11th month 22nd day 23-1 hour.\n[Life] ended at Republic of China year 1920 year 7th mo. 12th day 11-13 hour.\nDeceased father avoid [mention of] Lo Yau also known as Young Hong Wong [noble]residence ruler’s grave.",
    "sources" : [ {
      "description" : "#S-3"
    } ],
    "id" : "D-2"
  }, {
    "text" : "...Jane Doe's analysis document...",
    "id" : "D-3"
  } ]
};

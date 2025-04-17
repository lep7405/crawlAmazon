let str="2025年3月4日 在美国审核"
// str=str.split(" el ")[1];
// console.log(str);
const multiLangDate = {
    "on ": "",
    "le ": "",
    "de enero de": "january",
    "de febrero de": "february",
    "de marzo de": "march",
    "de abril de": "april",
    "de mayo de": "may",
    "de junio de": "june",
    "de julio de": "july",
    "de julyo de": "july",
    "de agosto de": "august",
    "de septiembre de": "september",
    "de octubre de": "october",
    "de noviembre de": "november",
    "de diciembre de": "december",
    ocak: "january",
    şubat: "february",
    mart: "march",
    nisan: "april",
    mayıs: "may",
    haziran: "june",
    temmuz: "july",
    ağustos: "august",
    eylül: "september",
    ekim: "october",
    kasım: "november",
    aralık: "december",
    "de janeiro de": "january",
    "de fevereiro de": "february",
    "de março de": "march",
    "de maio de": "may",
    "de junho de": "july",
    "de julho de": "july",
    "de setembro de": "september",
    "de outubro de": "october",
    "de novembro de": "november",
    "de dezembro de": "december",
    "revisado no brasil em ": "",
    "janvier ": "january",
    février: "february",
    mars: "march",
    avril: "april",
    mai: "may",
    juin: "june",
    juillet: "july",
    août: "august",
    septembre: "september",
    octobre: "october",
    novembre: "november",
    décembre: "december",
    "commenté en france ": "",
    jänner: "january",
    februar: "february",
    märz: "march",
    juli: "june",
    oktober: "october",
    dezember: "december",
    gennaio: "january",
    febbraio: "february",
    marzo: "march",
    aprile: "april",
    maggio: "may",
    giugno: "june",
    luglio: "july",
    agosto: "august",
    settembre: "september",
    ottobre: "october",
    dicembre: "december",
    januari: "january",
    februari: "february",
    maart: "march",
    maj: "may",
    augusti: "august",
    mei: "may",
    juni: "june",
    augustus: "august",
    年: "-",
    月: "-",
    日: "",
    يناير: "january",
    فبراير: "february",
    مارس: "march",
    أبريل: "april",
    مايو: "may",
    يونيو: "june",
    يوليو: "july",
    أغسطس: "august",
    سبتمبر: "september",
    أكتوبر: "october",
    نوفمبر: "november",
    ديسمبر: "december",
    stycznia: "january",
    lutego: "february",
    marca: "march",
    kwietnia: "april",
    maja: "may",
    czerwca: "june",
    lipca: "july",
    sierpnia: "august",
    września: "september",
    października: "october",
    listopada: "november",
    grudnia: "december",
  };

function removeFiller(str) {
    const newStr = str.match(/\d+/g);
    return (
      newStr.length &&
        (2 < newStr.length
          ? (str = newStr[0] + "-" + newStr[1] + "-" + newStr[2])
          : (-1 < str.indexOf("\u65E5\u306B") &&
              (str = str.split("\u65E5\u306B")[0]),
            str.indexOf(" on ") > -1 && (str = str.split(" on ")[1]),
            str.indexOf(" vom ") > -1 && (str = str.split(" vom ")[1]),
            str.indexOf(" em ") > -1 && (str = str.split(" em ")[1]),
            str.indexOf(" el ") > -1 && (str = str.split(" el ")[1]),
            str.indexOf(" le ") > -1 && (str = str.split(" le ")[1]),
            str.indexOf(" il ") > -1 && (str = str.split(" il ")[1]),
            str.indexOf(" dnia ") > -1 && (str = str.split(" dnia ")[1]),
            str.indexOf(" tarihinde ") > -1 &&
              ((str = str.split(" tarihinde ")[0]),
              (str = str.split("t\xFCrkiye\u2019de ")[0])))),
      str
    );
  }
 
  function transformDateTime(dateString) {
    try {
      let date = dateString.toLowerCase();
      date = removeFiller(date);
      console.log(date);
      for (const key in multiLangDate) {
        date = date.replace(key, multiLangDate[key]);
      }
      const instance = new Date(date);
      console.log(instance.toLocaleString("en-US").split(",")[0]);
      return instance.toLocaleString("en-US").split(",")[0];
    } catch (error) {
      return new Date().toLocaleString("en-US").split(",")[0];
    }
  }
  transformDateTime(str);
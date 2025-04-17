javascript: (() => {
  const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; xCfg64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

  const ImportError = {
    NeedSignIn: "NEED_SIGN_IN",
    BlockedByAmazon: "BLOCKED_BY_AMAZON",
    NotFoundPage: "NOT_FOUND_PAGE",
    NotFoundReviewLink: "NOT_FOUND_REVIEW_LINK",
    FetchUrlFailed: "Failed to fetch",
  };
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

  const COUNTRY_MAP_CODE = {
    States: "US",
    Germany: "DE",
    Kingdom: "GB",
    Japan: "JP",
    France: "FR",
    Italy: "IT",
    Canada: "CA",
    Australia: "AU",
    Korea: "KR",
    Spain: "ES",
    Netherlands: "NL",
    Switzerland: "CH",
    Sweden: "SE",
    Belgium: "BE",
    Austria: "AT",
    Denmark: "DK",
    Finland: "FI",
    Norway: "NO",
    Ireland: "IE",
    Zealand: "NZ",
    Singapore: "SG",
    Portugal: "PT",
    Greece: "GR",
    Iceland: "IS",
    Israel: "IL",
    Czech: "CZ",
    China: "CN",
    Poland: "PL",
    Brazil: "BR",
    Mexico: "MX",
    Turkey: "TR",
    India: "IN",
    Staaten: "US",
    Deutschland: "DE",
    Königreich: "GB",
    Frankreich: "FR",
    Italien: "IT",
    Kanada: "CA",
    Australien: "AU",
    Spanien: "ES",
    Niederlande: "NL",
    Schweiz: "CH",
    Schweden: "SE",
    Belgien: "BE",
    Österreich: "AT",
    Dänemark: "DK",
    Finnland: "FI",
    Norwegen: "NO",
    Irland: "IE",
    Seeland: "NZ",
    Singapur: "SG",
    Griechenland: "GR",
    Island: "IS",
    Tschechien: "CZ",
    Polen: "PL",
    Brasilien: "BR",
    Mexiko: "MX",
    Türkei: "TR",
    Inde: "ID",
    "États-Unis": "US",
    Allemagne: "DE",
    "Royaume-Uni": "GB",
    Japon: "JP",
    Italie: "IT",
    Australie: "AU",
    Corée: "KR",
    Espagne: "ES",
    "Pays-Bas": "NL",
    Suisse: "CH",
    Suède: "SE",
    Belgique: "BE",
    Autriche: "AT",
    Danemark: "DK",
    Finlande: "FI",
    Norvège: "NO",
    Irlande: "IE",
    Zélande: "NZ",
    Singapour: "SG",
    Grèce: "GR",
    Islande: "IS",
    Israël: "IL",
    Tchéquie: "CZ",
    Chine: "CN",
    Pologne: "PL",
    Brésil: "BR",
    Mexique: "MX",
    Turquie: "TR",
    Indien: "ID",
    Estados: "US",
    Alemanha: "DE",
    Reino: "GB",
    Japão: "JP",
    França: "FR",
    Itália: "IT",
    Canadá: "CA",
    Austrália: "AU",
    Coreia: "KR",
    Espanha: "ES",
    Baixos: "NL",
    Suíça: "CH",
    Suécia: "SE",
    Bélgica: "BE",
    Áustria: "AT",
    Dinamarca: "DK",
    Finlândia: "FI",
    Noruega: "NO",
    Irlanda: "IE",
    Zelândia: "NZ",
    Singapura: "SG",
    Grécia: "GR",
    Islândia: "IS",
    Checa: "CZ",
    Polônia: "PL",
    Brasil: "BR",
    México: "MX",
    Turquia: "TR",
    Índia: "ID",
    Índio: "ID",
    Staten: "US",
    Duitsland: "DE",
    Koninkrijk: "GB",
    Frankrijk: "FR",
    Italië: "IT",
    Australië: "AU",
    Spanje: "ES",
    Nederland: "NL",
    Zwitserland: "CH",
    Zweden: "SE",
    België: "BE",
    Oostenrijk: "AT",
    Denemarken: "DK",
    Noorwegen: "NO",
    Ierland: "IE",
    Zeeland: "NZ",
    Griekenland: "GR",
    IJsland: "IS",
    Tsjechië: "CZ",
    Brazilië: "BR",
    Turkije: "TR",
    Indië: "ID",
    Devletler: "US",
    Almanya: "DE",
    Krallık: "GB",
    Japonya: "JP",
    Fransa: "FR",
    İtalya: "IT",
    Avustralya: "AU",
    Kore: "KR",
    İspanya: "ES",
    Hollanda: "NL",
    İsviçre: "CH",
    İsveç: "SE",
    Belçika: "BE",
    Avusturya: "AT",
    Danimarka: "DK",
    Finlandiya: "FI",
    Norveç: "NO",
    İrlanda: "IE",
    Zelanda: "NZ",
    Portekiz: "PT",
    Yunanistan: "GR",
    İzlanda: "IS",
    İsrail: "IL",
    Çekya: "CZ",
    Çin: "CN",
    Polonya: "PL",
    Brezilya: "BR",
    Meksika: "MX",
    Türkiye: "TR",
    Hindistan: "ID",
    Stati: "US",
    Indio: "ID",
    Staterna: "US",
    Tyskland: "DE",
    Storbritannien: "GB",
    Frankrike: "FR",
    Nederländerna: "NL",
    Sverige: "SE",
    Österrike: "AT",
    Danmark: "DK",
    Norge: "NO",
    Grekland: "GR",
    Tjeckien: "CZ",
    Kina: "CN",
    Turkiet: "TR",
    Alemania: "DE",

    Japón: "JP",
    Francia: "FR",
    Italia: "IT",
    Corea: "KR",
    España: "ES",
    "Países Bajos": "NL",
    Suiza: "CH",
    Suecia: "SE",
    Finlandia: "FI",
    Grecia: "GR",
    Islandia: "IS",
    Chequia: "CZ",
    Polonia: "PL",
    Turquía: "TR",
  };
  const countryCodeMap = {
    // English - EN
    Australia: "AU",
    Belgium: "BE",
    Brazil: "BR",
    Canada: "CA",
    China: "CN",
    Egypt: "EG",
    France: "FR",
    Germany: "DE",
    India: "IN",
    Ireland: "IE",
    Italy: "IT",
    Japan: "JP",
    Mexico: "MX",
    Netherlands: "NL",
    Poland: "PL",
    "Saudi Arabia": "SA",
    Singapore: "SG",
    "South Africa": "ZA",
    Spain: "ES",
    Sweden: "SE",
    Turkey: "TR",
    "United Arab Emirates": "AE",
    "United Kingdom": "GB",
    "United States": "US",
  
    // español - ES
    Bélgica: "BE",
    Brasil: "BR",
    Canadá: "CA",
    Egipto: "EG",
    Francia: "FR",
    Alemania: "DE",
    Irlanda: "IE",
    Italia: "IT",
    Japón: "JP",
    México: "MX",
    "Países Bajos": "NL",
    Polonia: "PL",
    "Arabia Saudita": "SA",
    Singapur: "SG",
    "Sudáfrica": "ZA",
    España: "ES",
    Suecia: "SE",
    Turquía: "TR",
    "Emiratos Árabes Unidos": "AE",
    "Reino Unido": "GB",
    "Estados Unidos": "US",
  
    // العربية - AR
    أستراليا: "AU",
    بلجيكا: "BE",
    البرازيل: "BR",
    كندا: "CA",
    الصين: "CN",
    مصر: "EG",
    فرنسا: "FR",
    ألمانيا: "DE",
    الهند: "IN",
    أيرلندا: "IE",
    إيطاليا: "IT",
    اليابان: "JP",
    المكسيك: "MX",
    هولندا: "NL",
    بولندا: "PL",
    "المملكة العربية السعودية": "SA",
    سنغافورة: "SG",
    "جنوب أفريقيا": "ZA",
    إسبانيا: "ES",
    السويد: "SE",
    تركيا: "TR",
    "الإمارات العربية المتحدة": "AE",
    "المملكة المتحدة": "GB",
    "الولايات المتحدة": "US",
  
    // Deutsch - DE
    Australien: "AU",
    Belgien: "BE",
    Brasilien: "BR",
    Kanada: "CA",
    Ägypten: "EG",
    Frankreich: "FR",
    Deutschland: "DE",
    Indien: "IN",
    Irland: "IE",
    Italien: "IT",
    Japan: "JP",
    Mexiko: "MX",
    Niederlande: "NL",
    Polen: "PL",
    "Saudi-Arabien": "SA",
    Singapur: "SG",
    "Südafrika": "ZA",
    Spanien: "ES",
    Schweden: "SE",
    Türkei: "TR",
    "Vereinigte Arabische Emirate": "AE",
    "Vereinigtes Königreich": "GB",
    "Vereinigte Staaten": "US",
  
    // עברית - HE
    אוסטרליה: "AU",
    בלגיה: "BE",
    ברזיל: "BR",
    קנדה: "CA",
    סין: "CN",
    מצרים: "EG",
    צרפת: "FR",
    גרמניה: "DE",
    הודו: "IN",
    אירלנד: "IE",
    איטליה: "IT",
    יפן: "JP",
    מקסיקו: "MX",
    הולנד: "NL",
    פולין: "PL",
    "ערב הסעודית": "SA",
    סינגפור: "SG",
    "דרום אפריקה": "ZA",
    ספרד: "ES",
    שוודיה: "SE",
    טורקיה: "TR",
    "איחוד האמירויות הערביות": "AE",
    "הממלכה המאוחדת": "GB",
    "ארצות הברית": "US",
  
    // 한국어 - KO
    호주: "AU",
    벨기에: "BE",
    브라질: "BR",
    캐나다: "CA",
    중국: "CN",
    이집트: "EG",
    프랑스: "FR",
    독일: "DE",
    인도: "IN",
    아일랜드: "IE",
    이탈리아: "IT",
    일본: "JP",
    멕시코: "MX",
    네덜란드: "NL",
    폴란드: "PL",
    사우디아라비아: "SA",
    싱가포르: "SG",
    남아프리카: "ZA",
    스페인: "ES",
    스웨덴: "SE",
    튀르키예: "TR",
    아랍에미리트: "AE",
    영국: "GB",
    미국: "US",
  
    // português - PT
    Austrália: "AU",
    Bélgica: "BE",
    Brasil: "BR",
    Canadá: "CA",
    China: "CN",
    Egito: "EG",
    França: "FR",
    Alemanha: "DE",
    Índia: "IN",
    Irlanda: "IE",
    Itália: "IT",
    Japão: "JP",
    México: "MX",
    "Países Baixos": "NL",
    Polônia: "PL",
    "Arábia Saudita": "SA",
    Singapura: "SG",
    "África do Sul": "ZA",
    Espanha: "ES",
    Suécia: "SE",
    Turquia: "TR",
    "Emirados Árabes Unidos": "AE",
    "Reino Unido": "GB",
    "Estados Unidos": "US",
  
    // 中文 (简体) - ZH-CN
    澳大利亚: "AU",
    比利时: "BE",
    巴西: "BR",
    加拿大: "CA",
    中国: "CN",
    埃及: "EG",
    法国: "FR",
    德国: "DE",
    印度: "IN",
    爱尔兰: "IE",
    意大利: "IT",
    日本: "JP",
    墨西哥: "MX",
    荷兰: "NL",
    波兰: "PL",
    沙特阿拉伯: "SA",
    新加坡: "SG",
    南非: "ZA",
    西班牙: "ES",
    瑞典: "SE",
    土耳其: "TR",
    阿拉伯联合酋长国: "AE",
    英国: "GB",
    美国: "US",
  
    // 中文 (繁體) - ZH-TW
    澳洲: "AU",
    比利時: "BE",
    巴西: "BR",
    加拿大: "CA",
    中國: "CN",
    埃及: "EG",
    法國: "FR",
    德國: "DE",
    印度: "IN",
    愛爾蘭: "IE",
    義大利: "IT",
    日本: "JP",
    墨西哥: "MX",
    荷蘭: "NL",
    波蘭: "PL",
    沙烏地阿拉伯: "SA",
    新加坡: "SG",
    南非: "ZA",
    西班牙: "ES",
    瑞典: "SE",
    土耳其: "TR",
    阿拉伯聯合大公國: "AE",
    英國: "GB",
    美國: "US"
  };
  const amazonDomainToCountryCode = {
    "com": "US",
    "co.uk": "GB",
    "de": "DE",
    "fr": "FR",
    "it": "IT",
    "es": "ES",
    "ca": "CA",
    "com.mx": "MX",
    "com.br": "BR",
    "com.au": "AU",
    "co.jp": "JP",
    "in": "IN",
    "nl": "NL",
    "sg": "SG",
    "ae": "AE",
    "sa": "SA",
    "se": "SE",
    "pl": "PL",
    "eg": "EG",
    "com.tr": "TR",
    "cn": "CN"
  };
  
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Transforms a date string from any language to a US date string.
   * If the string is not recognized as a date, returns the current date.
   * @param {string} dateString
   * @returns {string} the US date string
   */
/*******  e2e1608b-d4e5-43d2-9967-7d44cbb1ea58  *******/  
  
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
      for (const key in multiLangDate) {
        date = date.replace(key, multiLangDate[key]);
      }
      const instance = new Date(date);
      return instance.toLocaleString("en-US").split(",")[0];
    } catch (error) {
      return new Date().toLocaleString("en-US").split(",")[0];
    }
  }

  function transformRating(ratingText) {
    return ratingText.match(/\d+/g)
      ? Math.min(
          ...ratingText
            .match(/\d+/g)
            .filter((r) => r != "0")
            .map((x) => +x)
        )
      : 1;
  }

  function extractCountry(inputString) {
    if (!inputString) {
      return "US";
    }
    const words = inputString.split(" ");

    for (const word of words) {
      if (COUNTRY_MAP_CODE[word]) {
        return COUNTRY_MAP_CODE[word];
      }
    }
    return "US";
  }

  function extractCountryTest(inputString,defaultCountry="US") {
    if (!inputString) return defaultCountry;
  
    for (const countryName in countryCodeMap) {
      if (inputString.includes(countryName)) {
        return countryCodeMap[countryName];
      }
    }
  
    return defaultCountry;
  }

  const Selector = {
    ReviewSection: "[data-hook='review']",
    Author: "div.a-profile-content > span.a-profile-name",
    Content: "span[data-hook='review-body'] > span",
    Avatar: "div.a-profile-avatar > img",
    HelpfulVotes: 'span[data-hook="helpful-vote-statement"]',
    Photos: '.review-image-tile-section img[data-hook="review-image-tile"]',
    Rating: "i[data-hook='review-star-rating']",
    Date: 'span[data-hook="review-date"]',
    Rating2: "i[data-hook='cmps-review-star-rating']",
    Photos2: 'img[data-hook="cmps-review-image-tile"]',
    SeeMoreReviews: 'a[data-hook="see-all-reviews-link-foot"]',
    TotalReviewsFilter: "[data-hook='cr-filter-info-review-rating-count']",
  };
  class AmazonCrawler {
    constructor({ params }) {
      this.importOptions = params;
      this.reviewLink = null;
      this.crawledReviews = {};
      this.errorMessage = "";
      this.requestCount=0;
    }

    getPageForImport() {
      return 10;
    }

    async getReviewLinkFromSeeMoreBtn(productLink) {
      if (this.reviewLink) {
        return this.reviewLink;
      }

      const response = await fetch(productLink, {
        credentials: "include",
        headers: {
            "User-Agent": userAgent,
        },
    });;
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const checkHasButton = !!doc.querySelector(Selector.SeeMoreReviews);
      if (!checkHasButton) {
        throw new Error(ImportError.NotFoundReviewLink);
      }
      const reviewPath = doc
        .querySelector(Selector.SeeMoreReviews)
        .attr("href");
      const { origin } = new URL(productLink);
      this.reviewLink = `${origin}${reviewPath}`;

      return this.reviewLink;
    }

    async generateReviewUrl(productLink) {
      const { origin, pathname } = new URL(productLink);
      const shortProductLink = `${origin}${pathname}`;

      let reviewLink = null;
      if (shortProductLink.includes("/dp/")) {
        reviewLink = shortProductLink.replaceAll("/dp/", "/product-reviews/");
      } else if (shortProductLink.includes("/product-reviews/")) {
        reviewLink = shortProductLink;
      } else {
        reviewLink = await this.getReviewLinkFromSeeMoreBtn(shortProductLink);
      }

      if (!reviewLink) {
        alert("Please check the product link again.");
        return;
      }

      if (this.importOptions?.hasPhoto) {
        return `${reviewLink}?reviewerType=all_reviews&mediaType=media_reviews_only&pageNumber=1`;
      }
      return `${reviewLink}?reviewerType=all_reviews&pageNumber=1`;
    }

    async generateReviewUrlWithPage(urlLink, page = 1) {
      return urlLink.replace("pageNumber=1", `pageNumber=${page}`);
    }

    filterReview(review) {
      if (this.importOptions.hasHelpful && !review.helpfulVotes) {
        return false;
      }

      if (
        this.importOptions?.dateRange?.start &&
        new Date(review.time) < new Date(this.importOptions.dateRange.start)
      ) {
        return false;
      }

      if (
        this.importOptions?.dateRange?.end &&
        new Date(review.time) > new Date(this.importOptions.dateRange.end)
      ) {
        return false;
      }

      return true;
    }

    async getReviews(url) {
      this.requestCount++;
      const response = await fetch(url, {
        credentials: "include",
        headers: {
            "User-Agent": userAgent,
        },
    });
      if (!response.ok) {
        this.errorMessage += ` - fetch reviews from ${url} failed`;
        return;
      }
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const loginForm = doc.querySelector('form[name="signIn"]');

      if (!!loginForm) {
        throw new Error(ImportError.NeedSignIn);
      }

      const reviewSections = doc.querySelectorAll(Selector.ReviewSection);
      // if (reviewSections.length === 0) {
      //   throw new Error(ImportError.NotFoundPage);
      // }

      const totalReviews = doc
        .querySelector(Selector.TotalReviewsFilter)
        .textContent.trim();
      const match = totalReviews.replace(/,/g, '').match(/\d+/g);

      const reviewCount = match ? match[1] : 0;
      const totalReviewsFilters = reviewCount + " reviews";
      const reviews = Array.from(reviewSections).map((review) => {
        const id = review.getAttribute("id");

        const authorEl = review.querySelector(Selector.Author);
        const author = authorEl?.textContent?.trim() || null;

        const content =
          review.querySelector(Selector.Content)?.textContent?.trim() || "";

        const helpfulVotesText = review
          .querySelector(Selector.HelpfulVotes)
          ?.textContent?.trim();
        const helpfulVotes = !!helpfulVotesText;

        let photoSections = review.querySelectorAll(Selector.Photos);
        if (!photoSections.length) {
          photoSections = review.querySelectorAll(Selector.Photos2);
        }

        let photos = [];
        if (photoSections.length) {
          photos = Array.from(photoSections).map((img) => {
            const src = img.getAttribute("src");
            if (src?.includes("._SY88.")) {
              return src.replace("._SY88.", ".");
            }
            return src;
          });
        }

        let ratingText = review
          .querySelector(Selector.Rating)
          ?.textContent?.trim();
        if (!ratingText) {
          ratingText = review
            .querySelector(Selector.Rating2)
            ?.textContent?.trim();
        }

        const rating = transformRating(ratingText);

        const dateText = review
          .querySelector(Selector.Date)
          ?.textContent?.trim();
        const time = transformDateTime(dateText);
        

        const match = url.match(/amazon\.([a-z.]+)\//i);
        if (!match) return null;
      
        const domain = match[1];
        const countryCode = amazonDomainToCountryCode[domain] || "US";
        const country = extractCountryTest(dateText,countryCode);

        return {
          reviewId: id,
          name: author,
          content,
          helpfulVotes,
          photos,
          rating,
          time,
          country,
        };
      });
      return { reviews, total: totalReviewsFilters };
    }

    getStatusCode(errorMessage) {
      if (!errorMessage) {
        return 200;
      }
      if (errorMessage === ImportError.NeedSignIn) {
        return 40001;
      }
      if (errorMessage === ImportError.BlockedByAmazon) {
        return 40002;
      }
      if (errorMessage === ImportError.NotFoundReviewLink) {
        return 40003;
      }
      if (errorMessage === ImportError.NotFoundReviewLink) {
        return 40003;
      }
      if (errorMessage === "Not in Amazon tab") {
        return 40003;
      }
      return 500;
    }

    // ...existing code...

    async handleUrl(urlLink, progressCallback, idx) {
      let crawledReview = [];
      let productAsin = null;

      try {
        const modifyUrl = await this.generateReviewUrl(urlLink);
        const regex = /\/product-reviews\/([A-Z0-9]{10})(?:[/?]|$)/;
        const match = modifyUrl.match(regex);
        productAsin = match ? match[1] : null;

        if (!productAsin) {
          throw new Error(
            `Không thể trích xuất productAsin từ URL: ${urlLink}`
          );
        }
        let totalReviewsOfAmazon=0;
        for (let page = 1; page <= 10; page++) {
         
          const url = await this.generateReviewUrlWithPage(modifyUrl, page);
          if(page>1&&totalReviewsOfAmazon<(page-1)*10){
            break;
          }
         const { reviews, total } = await this.getReviews(url);
          totalReviewsOfAmazon=parseInt(total);

          let totalReviews = total; // chỉ lấy tổng ở page đầu

          if (!reviews || reviews.length === 0) {
            break;
          }

          const filteredReviews = reviews.filter((review) =>
            this.filterReview(review)
          );
          crawledReview.push(...filteredReviews);

          // Cập nhật tiến độ sau mỗi page
          if (typeof progressCallback === "function") {
            progressCallback(idx, crawledReview.length, totalReviews);
          }

          if (crawledReview.length >= this.importOptions.limit) {
            break;
          }

          const delay = this.importOptions.requestDelay || 500;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }

        this.crawledReviews = this.crawledReviews || {};
        this.crawledReviews[productAsin] = crawledReview.slice(
          0,
          this.importOptions.limit
        );

        return { success: true, productAsin };
      } catch (error) {
        let errorMessage = "";

        if (error.message === ImportError.NotFoundPage) {
          errorMessage += " - Trang không tồn tại";
        } else if (error.message === ImportError.FetchUrlFailed) {
          errorMessage += " - Không thể tải URL";
        } else if (error.message === ImportError.NotFoundReviewLink) {
          errorMessage += " - Không tìm thấy liên kết đánh giá";
        } else {
          errorMessage += ` - ${error.message}`;
        }
        this.errorMessage = errorMessage;
        return { success: false, error: errorMessage, productAsin };
      }
    }

    async scrape() {
      let urlLink = this.importOptions.url;
      if (!urlLink) {
        alert("Please enter a valid Amazon product link.");
        return;
      }

      const urlArray = urlLink.split(",").map((url) => url.trim());

      for (let i = 0; i < urlArray.length; i++) {
        const urlLink = urlArray[i].trim();
        if (!urlLink.includes("amazon")) {
          alert("Please enter a valid Amazon product link.");
          return;
        }
      }

      // Hiển thị progress box
      progressBox.style.display = "block";
      const progressList = document.getElementById("progress-list");
      progressList.innerHTML = urlArray
        .map((url, idx) => {
          const asin =
            url.match(/\/dp\/([A-Z0-9]{10})/) ||
            url.match(/\/product-reviews\/([A-Z0-9]{10})/);
          return `<div id="progress-item-${idx}">
    <b>ASIN:</b> <span>${asin ? asin[1] || asin[2] : "-"}</span> | 
    <b>Reviews:</b> <span id="review-count-${idx}">0</span>
    <span id="progress-status-${idx}" style="color: #888; margin-left: 8px;">(waiting)</span>
    <span id="review-total-${idx}" style="color: #888; margin-left: 8px;"></span>
  </div>`;
        })
        .join("");


        const requestStat = document.createElement("div");
        requestStat.id = "request-stat";
        requestStat.style.marginTop = "10px";
        requestStat.style.fontSize = "13px";
        progressBox.appendChild(requestStat);


      // Xử lý từng link và cập nhật giao diện liên tục
      await Promise.all(
        urlArray.map(async (urlLink, idx) => {
          document.getElementById(`progress-status-${idx}`).innerText =
            "(running...)";
          const progressCallback = (index, reviewCount, totalReviews) => {
            document.getElementById(`review-count-${index}`).innerText =
              reviewCount;
            if (totalReviews) {
              if(totalReviews==="null reviews"){
                document.getElementById(
                  `review-total-${index}`
                ).innerText = `| Failed to get reviews page`;
              }
              document.getElementById(
                `review-total-${index}`
              ).innerText = `| Tổng reviews đáp ứng: ${totalReviews}`;
            }
          };
          const result = await this.handleUrl(urlLink, progressCallback, idx);
          let count = 0;
          if (
            result &&
            result.productAsin &&
            this.crawledReviews[result.productAsin]
          ) {
            count = this.crawledReviews[result.productAsin].length;
          }
          document.getElementById(`review-count-${idx}`).innerText = count;
          if (result && result.totalReviews) {
            document.getElementById(
              `review-total-${idx}`
            ).innerText = `| Tổng reviews đáp ứng: ${result.totalReviews}`;
          }
          document.getElementById(`progress-status-${idx}`).innerText =
            "(done)";
        })
      );
      // ...existing code...

      // progressBox.style.display = "none";
      return {
        reviews: this.crawledReviews,
        code: this.getStatusCode(this.errorMessage),
        errorMessage: this.errorMessage,
      };
    }

    // ...existing code...
  }
  const progressBox = document.createElement("div");
  progressBox.style.position = "fixed";
  progressBox.style.top = "50%";
  progressBox.style.left = "calc(50% + 230px)";
  progressBox.style.transform = "translateY(-50%)";
  progressBox.style.background = "#f7f7f7";
  progressBox.style.border = "1px solid #ccc";
  progressBox.style.borderRadius = "8px";
  progressBox.style.padding = "16px";
  progressBox.style.minWidth = "260px";
  progressBox.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  progressBox.style.zIndex = "10001";
  progressBox.style.fontFamily = "Arial, sans-serif";
  progressBox.innerHTML = `
    <b>Progress</b>
    <div id="progress-list"></div>
  `;
  progressBox.style.display = "none";
  document.body.appendChild(progressBox);
  // Create the form container
  const formContainer = document.createElement("div");
  formContainer.style.position = "fixed";
  formContainer.style.top = "50%";
  formContainer.style.left = "50%";
  formContainer.style.transform = "translate(-50%, -50%)";
  formContainer.style.backgroundColor = "white";
  formContainer.style.padding = "20px";
  formContainer.style.borderRadius = "8px";
  formContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  formContainer.style.zIndex = "10000";
  formContainer.style.width = "400px";
  formContainer.style.maxWidth = "90%";
  formContainer.style.fontFamily = "Arial, sans-serif";
  formContainer.style.maxHeight = "90vh";
  formContainer.style.overflowY = "auto";

  // <div style="margin-bottom: 15px;">
  //   <label style="display: block; margin-bottom: 5px; font-weight: bold;">Amazon product link</label>
  //   <input id="amazon-link" type="text" placeholder="https://www.amazon.com/..." style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
  //   <div style="font-size: 12px; color: #666; margin-top: 5px;">Example: https://www.amazon.com/dp/B0B15QM5LL</div>
  // </div>

  formContainer.innerHTML = `
      <h2 style="margin-top: 0; color: #333;">Amazon Product Tool</h2>
      

      
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Quantity</label>
        <input id="quantity11" type="number" min="1" max="100" value="20" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
        <div style="font-size: 12px; color: #666; margin-top: 5px;">Maximum number is 100</div>
      </div>
      
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Date Range</label>
        <div style="display: flex; gap: 10px;">
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 5px; font-size: 14px;">Start Date</label>
            <input id="start-date" type="date" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 5px; font-size: 14px;">End Date</label>
            <input id="end-date" type="date" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Content options</label>
        <div style="margin-bottom: 5px;">
          <input id="photos" type="checkbox" checked>
          <label for="photos">Contain photos</label>
        </div>
        <div style="margin-bottom: 5px;">
          <input id="content-text" type="checkbox" checked>
          <label for="content-text">Content text</label>
        </div>
        <div style="margin-bottom: 5px;">
          <input id="helpful" type="checkbox">
          <label for="helpful">Voted as helpful</label>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between;">
        <button id="submit-btn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;">Submit</button>
        <button id="cancel-btn" style="background-color: #f44336; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;">Cancel</button>
      </div>
    `;

  const epochStart = new Date(1970, 0, 1);
  const today = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Add the form to the page
  document.body.appendChild(formContainer);

  setTimeout(() => {
    document.getElementById("start-date").value = formatDate(epochStart);
    document.getElementById("end-date").value = formatDate(today);
  }, 0);

  document.getElementById("cancel-btn").addEventListener("click", () => {
    document.body.removeChild(formContainer);
  });
  // https://www.amazon.com/inteligente-Bluetooth-frecuencia-deportivos-rastreador/dp/B0F1YRFD6S,https://www.amazon.com/Cuckoo-CR-3032-Commercial-Cooker-Silver/dp/B00U1XN4L8,https://www.amazon.com/dp/B0CP8D4SM2,https://www.amazon.com/dp/B0DTB4R3VP,https://www.amazon.com/dp/B0D33NC672,https://www.amazon.com/dp/B0D9NHYR82,https://www.amazon.com/dp/B0DRP687WH

  // https://www.amazon.com/product-reviews/
//https://www.amazon.co.uk/Harrier-Rounded-Standing-Patio-Heater/dp/B08TMTFF6G

//https://www.amazon.in/Combo-Pack-Chemistry-2020-2021-Examination/dp/B083C8Q76Q

  const stringUrl =
    "https://www.amazon.com/inteligente-Bluetooth-frecuencia-deportivos-rastreador/dp/B0F1YRFD6S,https://www.amazon.com/Cuckoo-CR-3032-Commercial-Cooker-Silver/dp/B00U1XN4L8,https://www.amazon.com/dp/B0CP8D4SM2,https://www.amazon.com/dp/B0DTB4R3VP,https://www.amazon.com/dp/B0D33NC672,https://www.amazon.com/dp/B0D9NHYR82,https://www.amazon.com/dp/B0DRP687WH";
  document.getElementById("submit-btn").addEventListener("click", () => {
    // const amazonLink = document.getElementById("amazon-link").value;
    // if (amazonLink === "") {
    //   alert("Please enter a valid Amazon product link.");
    //   return;
    // }
    // if (!amazonLink.includes("amazon")) {
    //   alert("Please enter a valid Amazon product link.");
    //   return;
    // }

    const quantity = parseInt(document.getElementById("quantity11").value);
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const containPhotos = document.getElementById("photos").checked;
    const contentText = document.getElementById("content-text").checked;
    const votedHelpful = document.getElementById("helpful").checked;

    console.log({
      stringUrl,
      quantity,
      startDate,
      endDate,
      containPhotos,
      contentText,
      votedHelpful,
    });

    const params = {
      url: stringUrl,
      limit: quantity,
      dateRange: {
        start: startDate,
        end: endDate,
      },
      hasPhoto: containPhotos,
      hasHelpful: votedHelpful,
      hasContentText: contentText,
    };
    const amazonCrawler = new AmazonCrawler({
      params: params,
    });
    let startTime = Date.now();

    amazonCrawler
      .scrape()
      .then((response) => {
        const endTime = Date.now();
        const totalSeconds = ((endTime - startTime) / 1000).toFixed(2);
        document.getElementById("request-stat").innerText =
          `Tổng request: ${amazonCrawler.requestCount}\nTổng thời gian chạy: ${totalSeconds} giây`;
        console.log("response", response);
      })
      .catch((error) => {
        const endTime = Date.now();
        const totalSeconds = ((endTime - startTime) / 1000).toFixed(2);
        document.getElementById("request-stat").innerText =
          `Tổng request: ${amazonCrawler.requestCount}\nTổng thời gian chạy: ${totalSeconds} giây`;
        console.error("Error:", error);
      });
  });
})();

javascript: (() => {
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
  };
  class AmazonCrawler {
    constructor({ params }) {
      this.importOptions = params;
      this.reviewLink = null;
      this.crawledReviews = {};
    }

    getPageForImport() {
      return 10;
    }

    async getReviewLinkFromSeeMoreBtn(productLink) {
      if (this.reviewLink) {
        return this.reviewLink;
      }

      const response = await fetch(productLink);
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
      const response = await fetch(url);
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

      return Array.from(reviewSections).map((review) => {
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
        const country = extractCountry(dateText);

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

    async handleUrl(urlLink) {
      try {
        const errors = [];     
          let crawledReview = [];
          let productAsin = null;
      
          try {
            const modifyUrl = await this.generateReviewUrl(urlLink);
      
            const regex = /\/product-reviews\/([A-Z0-9]{10})\//;
            const match = modifyUrl.match(regex);
            productAsin = match ? match[1] : null;
      
            if (!productAsin) {
              throw new Error(`Không thể trích xuất productAsin từ URL: ${urlLink}`);
            }
      
            for (let page = 1; page <= 10; page++) {
              const url = await this.generateReviewUrlWithPage(modifyUrl, page);
              const reviews = await this.getReviews(url);

              if (!reviews || reviews.length === 0) {
                break;
              }
              console.log(`Reviews for ${productAsin}, page ${page}:`, reviews);
      
              const filteredReviews = reviews.filter((review) => {
                return this.filterReview(review);
              });
      
              crawledReview = [...crawledReview, ...filteredReviews];
              if (crawledReview.length >= this.importOptions.limit) {
                break;
              }
              await new Promise((resolve) => setTimeout(resolve, 1200));
            }
      
            this.crawledReviews = this.crawledReviews || {};
            this.crawledReviews[productAsin] = crawledReview.slice(0, this.importOptions.limit);
          } catch (innerError) {
            let errorMessage = `Lỗi với productAsin: ${productAsin || 'unknown'} từ URL: ${urlLink}`;
            
            if (innerError.message === ImportError.NotFoundPage) {
              errorMessage += " - Trang không tồn tại";
            } else if (innerError.message === ImportError.FetchUrlFailed) {
              errorMessage += " - Không thể tải URL";
            } else if (innerError.message === ImportError.NotFoundReviewLink) {
              errorMessage += " - Không tìm thấy liên kết đánh giá";
            } else {
              errorMessage += ` - ${innerError.message}`;
            }
      
            errors.push(errorMessage);
            console.error(errorMessage);
          }
        
      
        if (errors.length > 0) {
          throw new Error(`Hoàn thành với lỗi: \n${errors.join('\n')}`);
        }
      } 
      catch (error) {
        console.error("Lỗi tổng quát:", error.message);
      }
    }
    async scrape() {
      let errorMessage = null;

      let urlLink = this.importOptions.url;
      if (!urlLink) {
        alert("Please enter a valid Amazon product link.");
        return;
      }

      let urlArray = urlLink.split(",");
      
      for (let i = 0; i < urlArray.length; i++) {
        const urlLink = urlArray[i].trim();
        if (!urlLink.includes("amazon")) {
          alert("Please enter a valid Amazon product link.");
          return;
        }
      }

   

      const crawlPromises= urlArray.map(async (urlLink) => {
          this.handleUrl(urlLink);
      });
      const results = await Promise.allSettled(crawlPromises);
      return {
        reviews: results,
        code: this.getStatusCode(errorMessage),
        errorMessage,
      };
    }
  }





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

  formContainer.innerHTML = `
      <h2 style="margin-top: 0; color: #333;">Amazon Product Tool</h2>
      
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Amazon product link</label>
        <input id="amazon-link" type="text" placeholder="https://www.amazon.com/..." style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
        <div style="font-size: 12px; color: #666; margin-top: 5px;">Example: https://www.amazon.com/dp/B0B15QM5LL</div>
      </div>
      
      <div style="margin-bottom: 15px;">
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Quantity</label>
        <input id="quantity" type="number" min="1" max="100" value="20" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;">
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

  document.getElementById("submit-btn").addEventListener("click", () => {
    const amazonLink = document.getElementById("amazon-link").value;
    if (amazonLink === "") {
      alert("Please enter a valid Amazon product link.");
      return;
    }
    if (!amazonLink.includes("amazon")) {
      alert("Please enter a valid Amazon product link.");
      return;
    }

    const quantity = document.getElementById("quantity").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const containPhotos = document.getElementById("photos").checked;
    const contentText = document.getElementById("content-text").checked;
    const votedHelpful = document.getElementById("helpful").checked;

    console.log({
      amazonLink,
      quantity,
      startDate,
      endDate,
      containPhotos,
      contentText,
      votedHelpful,
    });

    const params = {
      url: amazonLink,
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
    amazonCrawler
      .scrape()
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
})();
